Module 5: Theme Development with Sage 11 - Shot List & Script

  Shot 1: Introduction to Modern Theme Development (Wide Shot at Desk)

  TEXT: "Welcome to Module 5 of our Professional WordPress Development course. Now that we have our project structure set up and dependencies managed, it's time to focus on theme development. In this module, we'll explore Sage 11, a
   modern WordPress starter theme by Roots that brings advanced front-end tooling, a powerful templating engine, and object-oriented PHP to WordPress theme development. By the end of this module, you'll understand how to build
  professional, maintainable WordPress themes that integrate perfectly with our development workflow."

  Shot 2: Problems with Traditional WordPress Themes (Screen with Graphics)

  TEXT: "Before we dive into Sage, let's understand why traditional WordPress theme development can be problematic for professional projects. Most WordPress themes mix PHP and HTML in template files, lack proper asset management,
  don't use modern JavaScript tooling, and have limited support for component-based development. This leads to themes that are difficult to maintain, extend, and integrate with modern development workflows. Sage solves these
  problems by bringing professional development patterns to WordPress themes."

  Shot 3: Sage 11 Overview and Architecture (Screen with Diagram)

  TEXT: "Sage 11 is a modern WordPress starter theme that incorporates several professional development tools and patterns. At its core, Sage uses Laravel's Blade templating engine through Acorn, providing a clean separation of
  logic and presentation. For front-end assets, it uses Bud.js, a webpack-based build tool tailored for WordPress. Sage also incorporates modern PHP practices with namespacing and autoloading. This architecture creates a more
  maintainable and modular theme structure."

  Shot 4: Installing Sage 11 (Screen Recording with Terminal)

  TEXT: "Let's install Sage 11 in our Bedrock-based WordPress project. We'll use Composer to require the sage package, then run the installation command to create a new theme. This process will scaffold the entire theme structure,
  including all the configuration files, templates, and directories needed for a complete Sage theme. I'll walk through the installation options and explain the choices that best fit our professional workflow."

  Shot 5: Exploring the Sage Directory Structure (Screen Recording)

  TEXT: "Now that Sage is installed, let's explore its directory structure. Unlike traditional WordPress themes, Sage has a highly organized structure that separates concerns. The app directory contains your PHP classes and
  functions; resources contains templates, styles, and scripts; public holds compiled assets; and vendor contains dependencies. This organization is key to understanding how Sage works and how to effectively develop with it."

  Shot 6: The Blade Templating Engine (Screen Recording of Code Editor)

  TEXT: "One of Sage's most powerful features is the Blade templating engine. Blade separates PHP logic from HTML presentation, making your templates cleaner and more maintainable. Let's look at some examples of Blade syntax,
  including directives, components, and inheritance. I'll show you how to create layouts that extend base templates, include partial components, and pass data between templates, all with much cleaner code than traditional
  WordPress."

  Shot 7: Theme Configuration and Theme.json (Close-up of Code Editor)

  TEXT: "Sage uses a combination of theme.json for WordPress and app/setup.php for theme configuration. Theme.json is part of the WordPress Block Editor system and controls layout, colors, typography, and other theme settings. In
  app/setup.php, we register theme features, menus, sidebars, and other WordPress-specific functionality. Let me show you how to configure these files for a professional theme setup."

  Shot 8: Asset Compilation with Bud.js (Screen Recording)

  TEXT: "Front-end asset management in Sage is handled by Bud.js, a webpack-based build tool. Bud compiles your SCSS, JavaScript, and other assets into optimized files for production. Let's explore the bud.config.js file, set up
  entry points for styles and scripts, and run the build process. I'll show you how to use Bud for both development with hot reloading and production builds with optimization."

  Shot 9: Working with SCSS in Sage (Screen Recording of Code Editor)

  TEXT: "Sage uses SCSS for stylesheet organization and preprocessing. Let's look at the SCSS structure in Sage, including the main.scss file, component organization, and utility imports. I'll demonstrate best practices for
  organizing your styles, using variables and mixins, and integrating with WordPress styles. We'll also discuss approaches like BEM methodology or utility-first CSS that work well in this environment."

  Shot 10: JavaScript Organization (Screen Recording of Code Editor)

  TEXT: "Modern WordPress themes need structured JavaScript. Sage provides a clean JavaScript organization with main.js as the entry point. I'll show you how to organize your JavaScript modules, import dependencies, and integrate
  with WordPress's wp-scripts. We'll also cover how to work with external libraries, enqueue scripts properly, and handle WordPress-specific JavaScript like the Block Editor."

  Shot 11: Working with Controllers (Screen Recording of Code Editor)

  TEXT: "Sage uses a controller pattern to pass data to your templates. Controllers are PHP classes that correspond to specific templates and provide data before rendering. This creates a clean separation between data gathering and
  presentation. Let me show you how to create and modify controllers, pass data to templates, and use controller inheritance to share common functionality across templates."

  Shot 12: Block Editor Integration (Screen Recording)

  TEXT: "Modern WordPress themes need to integrate well with the Block Editor. Sage 11 includes theme.json support for the Block Editor, but we can go further with custom blocks and editor styles. I'll show you how to configure Sage
   for optimal Block Editor support, including setting up editor styles, customizing block patterns, and ensuring your theme looks great in both the editor and the frontend."

  Shot 13: Working with ACF in Sage (Screen Recording)

  TEXT: "Advanced Custom Fields is a powerful tool for extending WordPress content, and it integrates perfectly with Sage. I'll demonstrate how to set up ACF fields, use them in your Blade templates, and work with ACF Blocks for
  custom Block Editor content. We'll look at how to organize your field groups and use them effectively with Sage's template and controller structure."

  Shot 14: Creating Reusable Components (Screen Recording of Code Editor)

  TEXT: "One of the great advantages of Sage is the ability to create reusable components. Using Blade components, we can create modular, reusable parts of our theme that encapsulate both markup and logic. I'll show you how to
  create components for common elements like cards, buttons, and headers, pass data to components, and reuse them throughout your theme for consistent design and maintainable code."

  Shot 15: Theme Development Workflow (Screen Recording with Multiple Panes)

  TEXT: "Let's put it all together with a complete theme development workflow. I'll demonstrate the development process from start to finish: running the development server, making changes to templates and styles, seeing live
  updates with browser sync, and building for production. This workflow combines all the aspects of Sage we've discussed into a smooth, efficient development experience."

  Shot 16: Theme Optimization and Production Builds (Screen Recording)

  TEXT: "Before deploying your theme, it's important to optimize it for production. Sage includes built-in tools for this through Bud.js. I'll show you how to create optimized production builds with minified assets, proper cache
  busting through file hashing, and image optimization. We'll also discuss additional optimization techniques specific to WordPress themes."

  Shot 17: Conclusion and Next Steps (Wide Shot at Desk)

  TEXT: "Congratulations! You now understand how to develop professional WordPress themes using Sage 11. This modern approach gives you cleaner templates, better organization, and powerful development tools that integrate perfectly
  with our Bedrock-based WordPress setup. In the next module, we'll explore environments and workflow, building on everything we've learned so far to create a seamless development process from local to production. See you there!"

  Key Points for Memorization

  • Traditional Theme Issues:
  - Mixing of PHP and HTML in templates
  - Lack of proper asset management
  - Limited front-end tooling
  - Difficult component reuse
  - Poor separation of concerns
  - Challenging maintenance and extension

  • Sage 11 Core Features:
  - Blade templating engine through Acorn
  - Bud.js for asset compilation (webpack-based)
  - Modern PHP practices (namespacing, autoloading)
  - Controller pattern for data handling
  - Component-based architecture
  - Block Editor integration

  • Sage Directory Structure:
  - app/ - PHP classes and functions
  - resources/ - Templates, styles, scripts
  - public/ - Compiled assets
  - vendor/ - Composer dependencies
  - config/ - Theme configuration

  • Blade Templating Advantages:
  - Clean separation of logic and presentation
  - Template inheritance (@extends, @section)
  - Component inclusion (@include, @component)
  - Control structures (@if, @foreach, etc.)
  - Escaping and raw output ({{}}, {!! !!})
  - Cleaner, more readable templates

  • Theme Configuration:
  - theme.json for Block Editor settings
  - app/setup.php for WordPress features
  - Registration of menus, sidebars, etc.
  - Theme supports configuration
  - Asset loading and handling

  • Asset Management with Bud.js:
  - SCSS compilation
  - JavaScript bundling
  - File hashing for cache busting
  - Development server with hot reloading
  - Production optimizations
  - Image processing

  • SCSS Organization:
  - Main entry point (main.scss)
  - Component-based organization
  - Variables and mixins
  - Best practices (BEM, utility-first, etc.)
  - WordPress-specific styling

  • JavaScript Structure:
  - Main entry point (main.js)
  - Module-based organization
  - Dependency management
  - WordPress integration
  - DOM-ready handling

  • Controller Pattern:
  - Data provision to templates
  - Template-specific controllers
  - Controller inheritance
  - Separating data and presentation
  - Passing dynamic data to views

  • Block Editor Integration:
  - theme.json configuration
  - Editor styles
  - Custom blocks
  - Block patterns
  - Content width settings

  • ACF Integration:
  - Field group setup
  - Using ACF in Blade templates
  - ACF Blocks creation
  - Options pages
  - Flexible content handling

  • Component Creation:
  - Blade components
  - Data passing to components
  - Slots and component composition
  - Reusable UI elements
  - Maintaining design consistency

  • Development Workflow:
  - Running development server
  - Working with hot reloading
  - Template modifications
  - Style and script changes
  - Building for production

  • Optimization Techniques:
  - Asset minification
  - Image optimization
  - Cache busting
  - Code splitting
  - Performance considerations