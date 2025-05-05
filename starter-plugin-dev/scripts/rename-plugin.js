#!/usr/bin/env node

/**
 * Plugin Renaming Script
 * 
 * This script creates a new copy of the plugin with a new name by:
 * - Creating a new directory
 * - Copying all files (excluding .git)
 * - Renaming files as needed
 * - Replacing content in files
 * 
 * Usage:
 * node scripts/rename-plugin.js "My Plugin Name" "mycompany" "my-plugin" [destination-directory]
 * 
 * Arguments:
 * 1. Plugin Name: The human readable name (e.g., "My Plugin Name")
 * 2. Namespace: The PHP namespace (e.g., "MyCompany")
 * 3. Slug: The slug for file names and text domain (e.g., "my-plugin")
 * 4. Destination Directory (optional): The directory to create the new plugin in
 *    If not provided, will create in the parent directory of the current plugin
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colored console output
const log = {
  info: (msg) => console.log(`\x1b[36mINFO:\x1b[0m ${msg}`),
  success: (msg) => console.log(`\x1b[32mSUCCESS:\x1b[0m ${msg}`),
  error: (msg) => console.error(`\x1b[31mERROR:\x1b[0m ${msg}`),
  warn: (msg) => console.warn(`\x1b[33mWARNING:\x1b[0m ${msg}`)
};

// Get arguments
const args = process.argv.slice(2);

// Check for help flag
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Plugin Name Creator Script

Description:
  Creates a new plugin from this template by copying files to a new location,
  renaming the plugin files, and updating all references.

Usage:
  node scripts/rename-plugin.js "My Plugin Name" "MyCompany" "my-plugin" [destination-directory]

Arguments:
  1. Plugin Name        - The human readable name (e.g., "My Plugin Name")
  2. Namespace          - The PHP namespace (e.g., "MyCompany")
  3. Slug               - The slug for file names and text domain (e.g., "my-plugin")
  4. Destination Dir    - (Optional) Where to create the new plugin
                          If not provided, will create in the parent directory

Example:
  node scripts/rename-plugin.js "Awesome Map Plugin" "MapCompany" "awesome-maps" ~/projects/
  
Notes:
  - The new plugin directory will be created with -dev suffix (e.g., awesome-maps-dev)
  - No git history will be copied to the new location
  - All file contents will be updated with the new plugin name, namespace, and slug
  `);
  process.exit(0);
}

if (args.length < 3) {
  log.error('Usage: node scripts/rename-plugin.js "My Plugin Name" "MyCompany" "my-plugin" [destination-directory]');
  log.error('Use --help or -h for more information');
  process.exit(1);
}

const [pluginName, namespace, slug] = args;
const camelSlug = slug.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

// Determine destination directory
const currentDir = process.cwd();
const parentDir = path.dirname(currentDir);

// Handle destination directory
let destDir;
if (args[3]) {
  // Expand tilde in path if present (for home directory)
  const destPath = args[3].replace(/^~/, process.env.HOME || process.env.USERPROFILE);
  
  // If path doesn't end with a slash, add it
  const normalizedPath = destPath.endsWith(path.sep) ? destPath : destPath + path.sep;
  
  // Create absolute path
  destDir = path.resolve(normalizedPath, `${slug}-dev`);
} else {
  destDir = path.join(parentDir, `${slug}-dev`);
}

// Default values to replace
const defaultPluginName = 'Plugin Name';
const defaultNamespace = 'PluginNamespace';
const defaultSlug = 'plugin-name';
const defaultDevSlug = 'plugin-name-dev'; // File name with dev suffix
const defaultCamel = 'pluginName';

log.info(`Creating new plugin:`);
log.info(`- Plugin Name: ${pluginName}`);
log.info(`- Namespace: ${namespace}`);
log.info(`- Slug: ${slug}`);
log.info(`- Camel Case: ${camelSlug}`);
log.info(`- Destination: ${destDir}`);

// Files to rename in new location
const filesToRename = [
  {
    from: path.join(destDir, `${defaultDevSlug}.php`),
    to: path.join(destDir, `${slug}-dev.php`)
  }
];

// Files to update content (relative paths from destDir)
const filesToProcess = [
  `${defaultDevSlug}.php`,
  'includes/Activator.php',
  'includes/Admin.php',
  'includes/Frontend.php',
  'includes/Updater.php',
  'templates/admin/settings-page.php',
  'templates/frontend/shortcode-template.php',
  'src/js/admin/admin.ts',
  'src/js/frontend/frontend.ts',
  'src/js/types/index.ts',
  'package.json',
  'composer.json',
  'README.md',
  'CLAUDE.md'
];

// Replacements to make
const replacements = [
  {
    from: new RegExp(defaultPluginName, 'g'),
    to: pluginName
  },
  {
    from: new RegExp(defaultPluginName.toLowerCase(), 'g'),
    to: pluginName.toLowerCase()
  },
  {
    from: new RegExp(defaultNamespace, 'g'),
    to: namespace
  },
  {
    from: new RegExp(defaultSlug + '-dev', 'g'), // Match slug-dev first (for filenames)
    to: `${slug}-dev`
  },
  {
    from: new RegExp(defaultSlug, 'g'),
    to: slug
  },
  {
    from: new RegExp(defaultCamel, 'g'),
    to: camelSlug
  },
  // Plugin constants
  {
    from: new RegExp('PLUGIN_VERSION', 'g'),
    to: `${slug.toUpperCase().replace(/-/g, '_')}_VERSION`
  },
  {
    from: new RegExp('PLUGIN_DIR', 'g'),
    to: `${slug.toUpperCase().replace(/-/g, '_')}_DIR`
  },
  {
    from: new RegExp('PLUGIN_URL', 'g'),
    to: `${slug.toUpperCase().replace(/-/g, '_')}_URL`
  },
  {
    from: new RegExp('PLUGIN_FILE', 'g'),
    to: `${slug.toUpperCase().replace(/-/g, '_')}_FILE`
  }
];

/**
 * Copy directory recursively, excluding .git
 */
function copyDirectory(src, dest) {
  // Skip .git directory
  if (src.includes('.git')) {
    return;
  }
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  // Get all files and directories in source
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    // Skip .git directories
    if (entry.name === '.git') {
      continue;
    }
    
    if (entry.isDirectory()) {
      // Recursive copy for directories
      copyDirectory(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * Process a file - replace content
 */
function processFile(filePath) {
  // Check if file exists first
  if (!fs.existsSync(filePath)) {
    log.warn(`File not found: ${filePath}`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let replaced = false;

    // Apply all replacements
    for (const replacement of replacements) {
      if (content.match(replacement.from)) {
        content = content.replace(replacement.from, replacement.to);
        replaced = true;
      }
    }

    if (replaced) {
      fs.writeFileSync(filePath, content);
      log.success(`Updated content in: ${filePath}`);
    } else {
      log.info(`No replacements needed in: ${filePath}`);
    }
  } catch (error) {
    log.error(`Error processing file ${filePath}: ${error.message}`);
  }
}

/**
 * Rename files
 */
function renameFiles() {
  for (const file of filesToRename) {
    const oldPath = file.from;
    const newPath = file.to;

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      log.success(`Renamed: ${path.basename(oldPath)} -> ${path.basename(newPath)}`);
    } else {
      log.warn(`File not found for renaming: ${oldPath}`);
    }
  }
}

/**
 * Process all files
 */
function processAllFiles() {
  for (const relativeFile of filesToProcess) {
    // Get the correct path (some files might have been renamed)
    let filePath = path.join(destDir, relativeFile);
    
    // Handle renamed files
    for (const rename of filesToRename) {
      if (filePath === rename.from) {
        filePath = rename.to;
        break;
      }
    }
    
    processFile(filePath);
  }
}

/**
 * Main function
 */
function main() {
  try {
    log.info('Starting plugin copy and rename process...');

    // Check if destination already exists
    if (fs.existsSync(destDir)) {
      log.error(`Destination directory already exists: ${destDir}`);
      log.error('Please choose a different name or remove the existing directory.');
      process.exit(1);
    }
    
    // Copy entire plugin directory (except .git)
    log.info(`Copying plugin files to ${destDir}...`);
    copyDirectory(currentDir, destDir);
    
    // Rename files
    renameFiles();
    
    // Update content in all files
    processAllFiles();
    
    log.success('Plugin copy and rename completed successfully!');
    log.info(`Your new plugin "${pluginName}" is ready at: ${destDir}`);
  } catch (error) {
    log.error(`Plugin copy and rename failed: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
main();