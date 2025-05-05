# Separate Production Repository Approach

This guide explains how to implement a two-repository approach for WordPress plugin development that separates development code from production-ready releases.

## Overview

Rather than using branch-based deployments, we maintain two distinct repositories:

1. **Development Repository**: Contains all development code, build tools, tests, and source files with the `-dev` suffix
2. **Production Repository**: Contains only clean, production-ready code that SatisPress monitors for updates

This approach provides clear separation between environments and simplifies the SatisPress integration.

## Repository Structure

### Development Repository (plugin-name-dev)

```
plugin-name-dev/
├── includes/
│   ├── Admin.php
│   ├── Frontend.php
│   └── ...
├── src/
│   ├── js/
│   └── scss/
├── scripts/
│   ├── build-production.js
│   └── version-bump.js
├── dist/
├── plugin-name-dev.php
├── package.json
└── ... (all development files)
```

### Production Repository (plugin-name-production)

```
plugin-name-production/
├── includes/
│   ├── Admin.php
│   ├── Frontend.php
│   └── ...
├── dist/
├── plugin-name.php  # Note: no "-dev" suffix
└── ... (only production files)
```

## Implementation

### 1. Setup Production Repository

1. Create a new repository named `plugin-name-production` on GitHub
2. Ensure SatisPress Deployer for Git is configured to monitor this repository

### 2. Update package.json

Add a deployment script that builds and pushes to the production repository:

```json
"scripts": {
  "build:prod": "node scripts/build-production.js",
  "deploy:prod": "node scripts/build-production.js --push --repo git@github.com:your-username/plugin-name-production.git"
}
```

### 3. Configure build-production.js

The starter-plugin-dev already has this functionality built in:

```javascript
// When running with --push --repo options
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
    
    log.success(`Successfully pushed to ${prodRepo}`);
  } catch (error) {
    log.error('Failed to push to production repository');
    log.error(error.message);
  }
}
```

### 4. Define .distignore File

Create a .distignore file to specify which files should be excluded from production:

```
/.git
/.github
/node_modules
/scripts
/src
/.distignore
/.gitignore
/tsconfig.json
/package-lock.json
/webpack.config.js
```

## Development Workflow

1. **Development Phase**:
   - Work in the development repository with dev-suffixed plugin
   - Version is tracked as X.Y.Z-dev in code
   - Use `npm run version:patch/minor/major` to update versions

2. **Release Process**:
   - When ready to release:
   ```
   npm run deploy:prod
   ```
   - This will:
     - Build production assets
     - Remove development files
     - Strip the -dev suffix
     - Push to the production repository
     - Create a Git version tag (using 'v' prefix, e.g., v1.0.0)
     - Note: While Git tags use the 'v' prefix, WordPress plugin headers use just numbers (1.0.0)

3. **SatisPress Integration**:
   - Deployer for Git monitors the production repository
   - When a new tag is detected, SatisPress makes it available
   - WordPress sites get update notifications

## Production Repository Management

The production repository is managed automatically through the build script. You should never need to manually commit to it. All changes should flow through the development repository's deployment process.

### Version Tagging

The build script creates version tags in the production repository:

- `1.0.0`, `1.0.1`, etc. 

These tags are used by SatisPress to identify versions. Note that WordPress plugin versions should not include a 'v' prefix in the version headers.

## Benefits

- Complete separation between development and production code
- No risk of development files making it into production
- Clear versioning with dev/production distinction
- Simple SatisPress integration with clean repository
- Automated deployment process reduces human error
- Production repository serves as historical release archive