#!/usr/bin/env node

/**
 * Production build script
 * 
 * This script:
 * 1. Creates a clean production build of the plugin
 * 2. Removes development files and dev dependencies
 * 3. Changes version from -dev to production version
 * 4. Optionally pushes to a production repository
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { performance } = require('perf_hooks');

// Configuration
const DIST_DIRS = [
  'dist/js/admin',
  'dist/js/frontend',
  'dist/css/admin',
  'dist/css/frontend'
];

// File patterns to exclude from production build
const DIST_IGNORE_FILE = path.join(__dirname, '..', '.distignore');

// Set colored console output
const log = {
  info: (msg) => console.log(`\x1b[36mINFO:\x1b[0m ${msg}`),
  success: (msg) => console.log(`\x1b[32mSUCCESS:\x1b[0m ${msg}`),
  error: (msg) => console.error(`\x1b[31mERROR:\x1b[0m ${msg}`),
  warn: (msg) => console.warn(`\x1b[33mWARNING:\x1b[0m ${msg}`)
};

// Command line args
const args = process.argv.slice(2);
const buildDir = args[0] || 'build';
const shouldPush = args.includes('--push');
const prodRepo = args.includes('--repo') 
  ? args[args.indexOf('--repo') + 1]
  : null;

/**
 * Prepare build directory
 */
function prepareBuildDir() {
  if (fs.existsSync(buildDir)) {
    log.info(`Removing existing ${buildDir} directory...`);
    execSync(`rm -rf ${buildDir}`);
  }
  
  log.info(`Creating ${buildDir} directory...`);
  fs.mkdirSync(buildDir, { recursive: true });
}

/**
 * Ensure dist directory exists
 */
function ensureDistDirs() {
  for (const dir of DIST_DIRS) {
    log.info(`Ensuring ${dir} directory exists...`);
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Read .distignore file and get patterns to exclude
 */
function getExcludePatterns() {
  let patterns = [
    '.git',
    '.github',
    'node_modules',
    'scripts',
    'src',
    '.distignore',
    '.gitignore',
    'tsconfig.json',
    'package-lock.json',
    '*.map',
    'README-AUTOMATION.md',
    'CLAUDE.md'
  ];
  
  if (fs.existsSync(DIST_IGNORE_FILE)) {
    const distIgnore = fs.readFileSync(DIST_IGNORE_FILE, 'utf8');
    const filePatterns = distIgnore.split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.startsWith('#'));
      
    patterns = [...patterns, ...filePatterns];
  }
  
  return patterns;
}

/**
 * Copy plugin files to build directory, excluding patterns from .distignore
 */
function copyPluginFiles() {
  const excludePatterns = getExcludePatterns();
  const excludeArgs = excludePatterns
    .map(pattern => `--exclude="${pattern}"`)
    .join(' ');
  
  log.info('Copying plugin files to build directory...');
  
  try {
    execSync(`rsync -av --progress ./ ./${buildDir}/ ${excludeArgs}`);
    log.success('Files copied successfully');
  } catch (error) {
    log.error('Failed to copy files');
    log.error(error.stderr.toString());
    process.exit(1);
  }
}

/**
 * Build assets with webpack
 */
function buildAssets() {
  log.info('Building assets with webpack...');
  
  try {
    execSync('NODE_ENV=production npm run build', { stdio: 'inherit' });
    log.success('Assets built successfully');
  } catch (error) {
    log.error('Failed to build assets');
    process.exit(1);
  }
}

/**
 * Convert from development to production version
 */
function convertToProduction() {
  log.info('Converting to production version...');
  
  try {
    execSync('node scripts/version-bump.js none --prod', { stdio: 'inherit' });
    log.success('Converted to production version');
  } catch (error) {
    log.error('Failed to convert to production version');
    process.exit(1);
  }
}

/**
 * Push to production repository (if specified)
 */
function pushToProductionRepo() {
  if (!shouldPush || !prodRepo) {
    return;
  }
  
  log.info(`Pushing to production repository: ${prodRepo}`);
  
  try {
    // Get current version from package.json
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const version = packageJson.version;
    
    // Initialize git in build directory
    process.chdir(buildDir);
    execSync('git init');
    execSync('git add .');
    execSync(`git commit -m "Release ${version}"`);
    
    // Add remote and push
    execSync(`git remote add origin ${prodRepo}`);
    execSync(`git push -f origin master`);
    
    // Create version tag
    execSync(`git tag -a v${version} -m "Version ${version}"`);
    execSync(`git push origin v${version}`);
    
    // Return to original directory
    process.chdir('..');
    
    log.success(`Successfully pushed to ${prodRepo}`);
  } catch (error) {
    log.error('Failed to push to production repository');
    log.error(error.message);
  }
}

/**
 * Main function
 */
function main() {
  const startTime = performance.now();
  
  log.info('Starting production build...');
  
  try {
    // Ensure dist directory exists before starting
    ensureDistDirs();
    
    // Build assets first
    buildAssets();
    
    // Prepare build directory
    prepareBuildDir();
    
    // Convert to production version
    convertToProduction();
    
    // Copy files to build directory
    copyPluginFiles();
    
    // Push to production repository if specified
    if (shouldPush) {
      pushToProductionRepo();
    }
    
    const endTime = performance.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);
    
    log.success(`Production build completed in ${duration}s`);
    log.info(`Build directory: ${buildDir}`);
  } catch (error) {
    log.error('Production build failed');
    log.error(error.message || error);
    process.exit(1);
  }
}

// Run the script
main();