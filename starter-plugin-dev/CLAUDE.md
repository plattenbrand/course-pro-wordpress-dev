# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Commands
- **Create New Plugin:** `npm run rename "Plugin Name" "Namespace" "slug" [destination-directory]` (creates a new plugin from this template)
- **JS/TS Development:** `npm run dev` (watches SCSS and TS files)
- **JS/TS Build:** `npm run build` (builds for production)
- **TypeScript Check:** `npm run type-check` (runs TypeScript without emitting)
- **Version Patch Bump:** `npm run version:patch` (increments patch version)
- **Version Minor Bump:** `npm run version:minor` (increments minor version)
- **Version Major Bump:** `npm run version:major` (increments major version)
- **Convert to Dev:** `npm run to:dev` (adds -dev suffix to plugin version)
- **Convert to Production:** `npm run to:prod` (removes -dev suffix from plugin version)
- **Production Build:** `npm run build:prod` (creates clean production build)
- **Deploy Production:** `npm run deploy:prod` (pushes to production repository)
- **PHP Linting:** `composer run phpcs` (runs PHP CodeSniffer)
- **PHP Static Analysis:** `composer run phpstan` (runs PHPStan)
- **PHP Tests:** `composer run test` (runs PHPUnit tests)

## Version Control
- **IMPORTANT:** Do NOT commit or push changes. The user will handle all git operations manually.
- When assisting with version changes, recommend the appropriate version bump command.
- The plugin uses semantic versioning (major.minor.patch) with a -dev suffix for development versions.

## Build & Deployment
- Always ensure changes work with release builds created via `npm run build:prod`
- Test all code with both development (`npm run dev`) and production builds (`npm run build`)
- When adding new files, verify they're included in the build process
- Make sure any new dependencies are properly imported
- The plugin separates development (-dev suffix) and production (no suffix) environments

## Code Style Guidelines
- **PHP:** Follow PSR-2 standards with 4-space indentation and proper namespacing (`PluginNamespace\`)
- **TypeScript/JS:** Use 2-space indentation, semicolons, and strong typing
- **CSS/SCSS:** Use 2-space indentation, organize by components
- **Error Handling:** Always use try/catch blocks with proper logging (`console.error` or `error_log`)
- **Imports:** Group by type, external libraries first, then internal modules
- **WordPress:** Follow WordPress coding standards for hooks, sanitization, and escaping
- **JavaScript:** All frontend code should be TypeScript with proper interfaces and types
- **Comments:** Document complex logic, public methods, and function parameters

## File Structure
- `plugin-name-dev.php`: Main plugin file with plugin info and initialization
- `includes/`: PHP classes for plugin functionality
  - `Admin.php`: Admin functionality
  - `Frontend.php`: Frontend functionality
  - `Activator.php`: Plugin activation
  - `Updater.php`: Version update handling
- `src/`: Source files for assets
  - `js/`: TypeScript files
    - `admin/`: Admin scripts
    - `frontend/`: Frontend scripts
    - `types/`: TypeScript type definitions
  - `scss/`: SCSS stylesheets
    - `admin/`: Admin styles
    - `frontend/`: Frontend styles
- `templates/`: PHP templates for rendering
  - `admin/`: Admin templates
  - `frontend/`: Frontend templates
- `scripts/`: Build scripts
  - `version-bump.js`: Version management
  - `build-production.js`: Production build
- `dist/`: Compiled assets (do not edit directly)

## Key Implementation Details
- The plugin uses a singleton pattern in the main class
- Shortcodes are registered in the Frontend class
- Admin pages are registered in the Admin class
- Assets are registered in the main plugin file and enqueued in the respective classes
- Version updates are handled by the Updater class
- Template files are used for rendering HTML

## Best Practices
- When creating new features, follow the existing pattern:
  1. Add PHP implementation in the appropriate class
  2. Add template file if needed
  3. Add TypeScript/SCSS for frontend functionality
  4. Register assets and hooks in the appropriate location
- Always wrap database queries with proper sanitization and escaping
- Use WordPress transients for API caching
- Follow the principle of progressive enhancement (basic functionality works without JS)
- Use semantic HTML and ARIA attributes for accessibility
- Consider responsiveness in all UI components