# Module 12: Professional Plugin Development - Shot List & Script

## Shot 1: Introduction to Professional Plugin Development (Wide Shot at Desk)

**TEXT:** "Welcome to our module on professional WordPress plugin development. In this module, we'll explore how to structure, develop, and deploy WordPress plugins using modern development practices. We'll focus on creating maintainable, well-structured plugins that can be easily deployed to production environments through our SatisPress repository. This approach bridges the gap between development best practices and WordPress plugin deployment requirements."

## Shot 2: Plugin Development Challenges (Talking Head with Graphics)

**TEXT:** "Before diving into our development workflow, let's discuss the challenges of professional plugin development. Traditional WordPress plugins often mix concerns, lack proper dependency management, and have deployment workflows that don't align with modern development practices. We'll address these challenges by implementing proper code organization, leveraging Composer for dependencies, and creating an automated build and release process that separates development code from production-ready releases."

## Shot 3: Plugin Repository Structure (Screen Recording of Code Editor)

**TEXT:** "Let's examine the optimal structure for a modern WordPress plugin repository using our starter-plugin-dev template. We organize the code with a clear separation of concerns: we have the includes directory for our PHP classes, src directory for our TypeScript and SCSS source files, templates for frontend and admin templates, and scripts for our build and automation tools. The main plugin file follows the naming convention 'plugin-name-dev.php' during development to clearly indicate it's a development version. This structure makes our plugin more maintainable while following WordPress conventions. Let's explore how this structure facilitates the separation between development and production environments."

## Shot 4: Setting Up the Development Environment (Screen Recording)

**TEXT:** "Now, let's set up our development environment based on our starter plugin. We'll install the necessary development dependencies through npm for TypeScript and SCSS compilation. Our package.json already includes scripts for development, building, version management, and production deployment. The 'npm run dev' command watches for file changes and compiles our assets in development mode, while 'npm run build' creates optimized production assets. We also have specialized scripts like 'version:patch', 'version:minor', and 'version:major' for semantic versioning, and 'build:prod' which creates a production-ready version with the '-dev' suffix removed. This setup provides a smooth workflow from development to production."

## Shot 5: PHP Class Organization and Namespacing (Screen Recording of Code Editor)

**TEXT:** "For our PHP code organization, we use proper namespacing and class structuring even without a formal autoloader. Our main plugin file defines key constants like PLUGIN_VERSION and PLUGIN_DIR, then loads our class files from the includes directory. Each class has a specific responsibility: Admin.php handles the dashboard functionality, Frontend.php manages public-facing features, Activator.php handles installation tasks, and Updater.php manages version upgrades. Our main Plugin class acts as the coordinator, registering hooks and initializing the necessary components. This modular approach keeps our code organized and maintainable. The plugin also checks for a Composer autoloader, allowing for easy integration with additional dependencies when needed."

## Shot 6: Modern Frontend Asset Management (Screen Recording)

**TEXT:** "Our starter plugin implements modern asset management with TypeScript and SCSS. In the src directory, we separate admin and frontend assets, with TypeScript files providing type safety and better code organization. Our webpack configuration compiles these assets into optimized JavaScript and CSS files in the dist directory. The plugin enqueues these assets with proper version control using our PLUGIN_VERSION constant, which ensures cache busting when updates are released. During development, 'npm run dev' watches for file changes and rebuilds assets automatically, while 'npm run build' creates minified, production-ready assets. This approach allows us to use modern frontend technologies while maintaining compatibility with WordPress's asset management system."

## Shot 7: Implementing Plugin Features (Screen Recording of Code Editor)

**TEXT:** "Let's implement some core plugin features using our modern architecture. We'll build functionality using proper object-oriented principles, ensuring each class has a single responsibility. I'll demonstrate how to register WordPress hooks within our classes, implement admin interfaces using modern approaches, and handle plugin data using WordPress data APIs. Throughout this process, we'll follow WordPress coding standards while leveraging modern PHP practices."

## Shot 8: Testing Plugin Functionality (Screen Recording)

**TEXT:** "Testing is a critical part of professional plugin development. We'll set up PHPUnit for unit testing our plugin's PHP code and implement tests for our core functionality. I'll also show you how to test WordPress-specific functionality, including hooks, shortcodes, and admin features. Additionally, we'll set up end-to-end testing to ensure our plugin works correctly in a WordPress environment, using tools like wp-browser to simulate WordPress interactions."

## Shot 9: GitHub Repository Setup (Screen Recording)

**TEXT:** "Now let's set up our GitHub repository for collaborative development and automated deployment. We'll create the necessary configuration files, including a comprehensive README with installation and development instructions, contribution guidelines, and proper documentation. We'll also set up GitHub issue templates to standardize bug reports and feature requests, making it easier to maintain the plugin over time."

## Shot 10: Version Management with npm (Screen Recording)

**TEXT:** "Our starter plugin includes a powerful versioning system managed through npm scripts. The scripts/version-bump.js utility allows us to easily increment version numbers according to semantic versioning principles. With commands like 'npm run version:patch', 'npm run version:minor', and 'npm run version:major', we can update version numbers across all relevant files. The script automatically maintains the '-dev' suffix during development and can convert between development and production versions with the 'to:dev' and 'to:prod' commands. This system ensures version consistency across the plugin header, constants, and package.json, eliminating manual version management errors and clearly distinguishing development from production code."

## Shot 11: Production Build Process (Screen Recording)

**TEXT:** "Let's examine our production build process implemented in the scripts/build-production.js file. This Node.js script creates optimized, production-ready versions of our plugin by removing development files, compiling assets for production, and converting development version markers to production versions. It uses the .distignore file to exclude development-only files and directories from the production build. The script can be triggered with 'npm run build:prod' and optionally can push directly to a production repository. This automation ensures consistent, clean production builds and eliminates the human error factor from the release process. When combined with our version management system, we get a streamlined workflow from development to production."

## Shot 12: Separate Production Repository Approach (Screen Recording)

**TEXT:** "Let's examine our production deployment strategy using separate repositories. We maintain our development code in a repository named 'plugin-name-dev' with the '-dev' suffix in filenames, while production-ready code lives in a separate 'plugin-name-production' repository that SatisPress monitors. Our build-production.js script already supports this approach with the '--push --repo' options, allowing us to build a clean production version and push it directly to the production repository. Let's see how this works: when we run 'npm run deploy:prod', the script builds the assets, removes development files according to our .distignore, strips the '-dev' suffix from all version references, and pushes the clean code to the production repository. This approach maintains complete separation between development and production code while giving SatisPress a clean repository to pull from."

## Shot 13: Plugin Versioning Best Practices (Talking Head with Graphics)

**TEXT:** "Proper versioning is essential for WordPress plugins. We'll implement semantic versioning to communicate the nature of changes to users. Major versions indicate breaking changes, minor versions add features in a backward-compatible way, and patch versions fix bugs. WordPress plugin headers should use just the numbers without a 'v' prefix, like '1.0.0' rather than 'v1.0.0'. However, in Git, we commonly tag versions with the 'v' prefix, creating a distinction between Git tags and WordPress version headers. We'll connect our version numbers in the plugin header, readme.txt, and release tags to ensure consistency. This approach provides clear upgrade paths for users and helps manage plugin updates."

## Shot 14: Handling Plugin Updates (Screen Recording)

**TEXT:** "Let's examine how our workflow handles plugin updates. When we need to update our plugin, we'll develop and test the changes locally, commit to our repository, and create a new version tag. Our GitHub Actions workflow will create an optimized release package, and SatisPress will detect this new version. WordPress sites using our SatisPress repository will then receive update notifications through the standard WordPress update system. This seamless process combines modern development practices with WordPress's native update functionality."

## Shot 15: Managing Multiple Plugin Versions (Screen Recording)

**TEXT:** "Sometimes we need to maintain multiple versions of a plugin for different clients or WordPress versions. I'll show you strategies for managing multiple versions, including branch management in Git, tagging approaches for different variants, and configuring our GitHub Actions workflows to handle multiple release types. This flexibility allows us to maintain backward compatibility while continuing to develop new features."

## Shot 16: Plugin Documentation (Screen Recording)

**TEXT:** "Professional plugins require comprehensive documentation. We'll implement inline documentation using PHPDoc standards, create a wiki in our GitHub repository for developer documentation, and write user documentation in WordPress-standard readme.txt format. This multi-layered documentation approach serves different audiences, from plugin users to developers extending your plugin. Good documentation enhances the usability and maintainability of your plugin."

## Shot 17: Conclusion and Best Practices (Wide Shot at Desk)

**TEXT:** "Let's wrap up with plugin development best practices. These include maintaining a clean separation between development and production code, implementing automated testing, following WordPress coding standards while leveraging modern PHP practices, using proper versioning, and maintaining comprehensive documentation. By following these practices, you'll create plugins that are maintainable, extensible, and reliably deployable through your professional WordPress workflow. This approach elevates plugin development to the same professional standards as your theme and core WordPress development."

## Key Points for Memorization

### Modern Plugin Structure:
- Main plugin file with -dev suffix for development
- Includes directory for PHP classes
- Src directory for TypeScript and SCSS files
- Templates directory for HTML templates
- Scripts directory for build and automation tools
- Dist directory for compiled assets
- Clear separation of concerns
- Development vs. production naming conventions

### Development Environment:
- npm for TypeScript and SCSS compilation
- webpack for asset bundling and optimization
- Development scripts with watch functionality
- Version management through npm scripts
- TypeScript for type-safe JavaScript
- Browser compatibility targeting
- Development-specific tools and configurations

### Code Organization:
- Proper namespacing for plugin classes
- Modular include structure with specific responsibilities
- Object-oriented approach with clear class separation
- Dedicated Admin and Frontend classes
- Class files for activation and updates
- Singleton pattern for main plugin class
- Separate files for templates and views

### Asset Management:
- TypeScript for modern JavaScript development
- SCSS with separate admin and frontend files
- Webpack for bundling and minification
- Source maps for debugging in development
- Separate admin and frontend asset paths
- WordPress enqueue with version constants
- Browser compatibility targeting
- Automatic asset rebuilding in development

### Testing Approach:
- PHPUnit for unit testing
- WordPress-specific test helpers
- Mock objects for WordPress functions
- End-to-end testing with wp-browser
- Test coverage reporting
- Integration with GitHub Actions

### GitHub Repository Configuration:
- Comprehensive README with setup instructions
- Contribution guidelines and code of conduct
- Issue and pull request templates
- Branch protection rules
- GitHub Actions workflow configurations
- .gitignore for excluding development files

### Version Management:
- Automated version bumping via npm scripts
- Semantic versioning implementation
- Development suffix management (adding/removing -dev)
- Consistent version across all plugin files
- Version constants for internal reference
- Simple version increments (patch, minor, major)
- Automatic version validation

### Build Process:
- Node.js build scripts for production versions
- Asset compilation for production with webpack
- Automatic removal of development markers
- .distignore for excluding development files
- Development to production conversion
- Optional direct push to production repositories
- Clean production builds with only required files
- Preservation of WordPress plugin headers

### SatisPress Integration:
- Deployer for Git Pro configuration
- Separate production repository strategy
- Production repository monitoring
- Automated production repository updates
- WordPress update system integration
- Version availability management

### Versioning Strategy:
- Semantic versioning implementation (MAJOR.MINOR.PATCH)
- No 'v' prefix in WordPress plugin headers (1.0.0, not v1.0.0)
- Version synchronization across files
- Plugin header version requirements
- Readme.txt version management
- Changelog maintenance
- Git tag conventions (v1.0.0 for Git tags only)

### Update Management:
- Testing updates before release
- Database schema version control
- Data migration handling
- Backward compatibility considerations
- Deprecation notices for changing APIs
- Clear upgrade paths for users

### Multiple Version Management:
- Git branch strategies for version maintenance
- GitHub Actions configuration for variant builds
- Version-specific dependencies
- Conditional code for WordPress version compatibility
- Client-specific customization handling
- Release matrix for multiple targets

### Documentation Practices:
- Inline PHPDoc documentation
- GitHub wiki for developer documentation
- Readme.txt for WordPress repository format
- User documentation with examples
- Installation and upgrade guides
- API documentation for extensibility