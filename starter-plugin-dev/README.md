# WordPress Plugin Starter Template

A professional WordPress plugin starter template with development/production environment separation, modern build tools, and automated deployment.

## Features

- Development and production environment separation
- TypeScript and SCSS support
- Webpack for asset bundling
- Automatic versioning system
- GitHub Actions for CI/CD
- Clean production builds
- Professional plugin structure with proper namespacing

## Requirements

- PHP 7.4 or higher
- WordPress 5.8 or higher
- Node.js 14 or higher
- npm 7 or higher

## Getting Started

### 1. Setup

Clone this template and create a new plugin with your desired name using the built-in script:

```bash
# Install Node.js dependencies first
npm install

# Run the rename script with your plugin details
npm run rename "My Awesome Plugin" "MyCompany" "my-awesome-plugin" [destination-directory]
```

The rename script accepts four parameters:
1. Plugin Name - The human-readable name (e.g., "My Awesome Plugin")
2. Namespace - The PHP namespace (e.g., "MyCompany")
3. Slug - The text domain and file slug (e.g., "my-awesome-plugin")
4. Destination Directory (optional) - Where to create the new plugin (defaults to parent directory)

The script will automatically:
- Create a new directory for your plugin (without .git history)
- Copy all plugin files to the new location
- Rename the main plugin file
- Update all namespace references
- Change text domains and function prefixes
- Update constant names
- Modify CSS class prefixes

After renaming, install the remaining dependencies:

```bash
# Install PHP dependencies
composer install
```

### 2. Development

```bash
# Start development mode (watches for changes)
npm run dev

# Run TypeScript type checking
npm run type-check
```

### 3. Managing Versions

The plugin includes a powerful version management system that handles development and production versions:

```bash
# Bump patch version (1.0.0 -> 1.0.1)
npm run version:patch

# Bump minor version (1.0.0 -> 1.1.0)
npm run version:minor

# Bump major version (1.0.0 -> 2.0.0)
npm run version:major

# Convert to development version (adds -dev suffix)
npm run to:dev

# Convert to production version (removes -dev suffix)
npm run to:prod
```

### 4. Building for Production

```bash
# Build assets for production
npm run build

# Create a complete production build
npm run build:prod

# Deploy to production repository
npm run deploy:prod
```

## File Structure

```
plugin-name-dev/
├── .github/                   # GitHub Actions workflows
├── dist/                      # Compiled assets (JS/CSS)
├── includes/                  # PHP classes
│   ├── Activator.php          # Plugin activation logic
│   ├── Admin.php              # Admin functionality
│   ├── Frontend.php           # Frontend functionality
│   └── Updater.php            # Version update handling
├── languages/                 # Translation files
├── scripts/                   # Build scripts
│   ├── build-production.js    # Production build script
│   ├── version-bump.js        # Version management script
│   └── rename-plugin.js       # Plugin renaming script
├── src/                       # Source files
│   ├── js/                    # TypeScript/JavaScript
│   │   ├── admin/             # Admin scripts
│   │   ├── frontend/          # Frontend scripts
│   │   └── types/             # TypeScript type definitions
│   └── scss/                  # SCSS styles
│       ├── admin/             # Admin styles
│       └── frontend/          # Frontend styles
├── templates/                 # Template files
│   ├── admin/                 # Admin templates
│   └── frontend/              # Frontend templates
├── .distignore                # Files to exclude from production
├── CLAUDE.md                  # Instructions for Claude Code
├── composer.json              # PHP dependencies
├── package.json               # Node.js dependencies
├── plugin-name-dev.php        # Main plugin file (with -dev suffix)
├── tsconfig.json              # TypeScript configuration
└── webpack.config.js          # Webpack configuration
```

## Development Workflow

1. Make changes to the plugin in the development environment (-dev suffix)
2. Test your changes locally
3. Commit your changes to git
4. When ready for release:
   - Run `npm run version:patch` (or minor/major) to bump the version
   - Run `npm run build:prod` to create a production build
   - Test the production build
   - Deploy to the production repository with `npm run deploy:prod`

## GitHub Actions

The plugin includes a GitHub Actions workflow for automated releases. To use it:

1. Push your changes to GitHub
2. Go to the Actions tab in your repository
3. Manually trigger the "Plugin Release" workflow
4. Select the version bump type (patch, minor, major)
5. Choose whether to push to the production repository

## Shortcode Usage

The plugin includes a basic shortcode system that you can customize:

```
[plugin_shortcode id="123" option="custom"]
```

## Customization

1. Update the namespace in all PHP files from `PluginNamespace` to your own namespace
2. Customize the plugin settings page in `templates/admin/settings-page.php`
3. Modify the shortcode template in `templates/frontend/shortcode-template.php`
4. Add your own styles in the SCSS files
5. Extend the TypeScript functionality as needed

## License

This template is licensed under the GPL v2 or later.

---

## Additional Resources

- [WordPress Plugin Development Handbook](https://developer.wordpress.org/plugins/)
- [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Webpack Documentation](https://webpack.js.org/concepts/)