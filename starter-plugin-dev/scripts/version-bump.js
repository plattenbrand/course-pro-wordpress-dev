#!/usr/bin/env node

/**
 * Script to automate version management for WordPress plugins
 * - Updates version numbers in package.json and main plugin file
 * - Handles development vs production versions
 * - Supports semantic versioning (major.minor.patch)
 */

const fs = require('fs');
const path = require('path');

// Configuration
const DEV_SUFFIX = '-dev';
const PLUGIN_FILE_PATTERN = /^plugin-name.php$/; // Change this pattern to match your main plugin file

// Command line arguments
const args = process.argv.slice(2);
const incrementType = args[0] || 'patch'; // Default to patch
const toDev = args.includes('--dev');
const toProd = args.includes('--prod');

// Validate args
if (!['major', 'minor', 'patch', 'none'].includes(incrementType) && incrementType !== 'none') {
  console.error('Error: Version increment must be one of: major, minor, patch, none');
  process.exit(1);
}

if (toDev && toProd) {
  console.error('Error: Cannot specify both --dev and --prod');
  process.exit(1);
}

/**
 * Check if a version has the dev suffix
 */
function isDevVersion(version) {
  return version.endsWith(DEV_SUFFIX);
}

/**
 * Increment a semantic version string
 */
function incrementVersion(version, type) {
  if (type === 'none') return version;
  
  const parts = version.split('.');
  
  if (parts.length !== 3) {
    console.error(`Error: Invalid version format: ${version}`);
    process.exit(1);
  }
  
  let [major, minor, patch] = parts.map(Number);
  
  switch (type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
  }
  
  return `${major}.${minor}.${patch}`;
}

/**
 * Find the main plugin file
 */
function findPluginFile() {
  const files = fs.readdirSync('.');
  const pluginFile = files.find(file => PLUGIN_FILE_PATTERN.test(file));
  
  if (!pluginFile) {
    console.error('Error: Could not find main plugin file');
    process.exit(1);
  }
  
  return pluginFile;
}

/**
 * Extract plugin info from main plugin file
 */
function extractPluginInfo(pluginFilePath) {
  const content = fs.readFileSync(pluginFilePath, 'utf8');
  
  // Extract plugin name
  const nameMatch = content.match(/Plugin Name:\s*(.+?)(?:\s*-\s*dev)?(?:\r?\n|\r)/);
  const name = nameMatch ? nameMatch[1].trim() : null;
  
  // Extract version
  const versionMatch = content.match(/Version:\s*([0-9]+\.[0-9]+\.[0-9]+(?:-dev)?)/);
  const version = versionMatch ? versionMatch[1] : null;
  
  // Extract constant
  const defineMatch = content.match(/define\s*\(\s*['"]PLUGIN_VERSION['"],\s*['"]([^'"]+)['"]\s*\)/);
  const defineVersion = defineMatch ? defineMatch[1] : null;
  
  // Check if the plugin is in dev mode
  const isDevMode = name && name.includes('-dev') || (version && isDevVersion(version));
  
  if (!name || !version) {
    console.error('Error: Could not extract plugin info from main file');
    process.exit(1);
  }
  
  return { name, version, defineVersion, isDevMode };
}

/**
 * Update package.json with new version
 */
function updatePackageJson(newVersion) {
  const packageJsonPath = path.join('.', 'package.json');
  
  if (!fs.existsSync(packageJsonPath)) {
    console.warn('Warning: package.json not found. Skipping update.');
    return;
  }
  
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  packageJson.version = newVersion;
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Updated package.json version to ${newVersion}`);
}

/**
 * Update main plugin file with new version and name
 */
function updatePluginFile(pluginFilePath, oldInfo, newVersion, isDev) {
  let content = fs.readFileSync(pluginFilePath, 'utf8');
  
  // Extract original plugin name without dev suffix
  const basePluginName = oldInfo.name.replace(/ - dev$/, '');
  
  // Prepare the new plugin name
  const newPluginName = isDev ? `${basePluginName} - dev` : basePluginName;
  
  // Update Plugin Name
  content = content.replace(
    /Plugin Name:\s*.+/,
    `Plugin Name: ${newPluginName}`
  );
  
  // Update Version
  content = content.replace(
    /Version:\s*[0-9]+\.[0-9]+\.[0-9]+(?:-dev)?/,
    `Version: ${newVersion}`
  );
  
  // Update version constant
  if (oldInfo.defineVersion) {
    content = content.replace(
      /define\s*\(\s*['"]PLUGIN_VERSION['"],\s*['"][^'"]+['"]\s*\)/,
      `define('PLUGIN_VERSION', '${newVersion}')`
    );
  }
  
  fs.writeFileSync(pluginFilePath, content);
  console.log(`Updated ${pluginFilePath} version to ${newVersion}`);
}

// Main function
function main() {
  console.log(`Version bump: ${incrementType} | To dev: ${toDev} | To prod: ${toProd}`);
  
  // Find the main plugin file
  const pluginFilePath = findPluginFile();
  
  // Extract plugin info
  const pluginInfo = extractPluginInfo(pluginFilePath);
  console.log('Current info:', pluginInfo);
  
  // Handle version changes
  let targetIsDev = pluginInfo.isDevMode;
  if (toDev) targetIsDev = true;
  if (toProd) targetIsDev = false;
  
  // Handle version increment
  // Always work with the clean version, then add dev suffix back if needed
  const baseVersion = isDevVersion(pluginInfo.version) 
    ? pluginInfo.version.slice(0, -DEV_SUFFIX.length) 
    : pluginInfo.version;
  
  // Increment the clean version
  const incrementedVersion = incrementVersion(baseVersion, incrementType);
  
  // Add dev suffix back if we're in dev mode
  const newVersion = targetIsDev 
    ? incrementedVersion + DEV_SUFFIX 
    : incrementedVersion;
  
  console.log(`Updating version: ${pluginInfo.version} -> ${newVersion}`);
  
  // Update files
  updatePackageJson(newVersion);
  updatePluginFile(pluginFilePath, pluginInfo, newVersion, targetIsDev);
  
  console.log('Version update complete!');
}

// Run the script
main();