# Module 5: Theme Development with Sage 11 - Shot List & Script

## Shot 1: Introduction to Modern Theme Development (Wide Shot at Desk)

**TEXT:** "Welcome to Module 5 of our Professional WordPress Development course. Now that we have our project structure set up and dependencies managed, it's time to focus on theme development. In this module, we'll explore Sage 11, a
   modern WordPress starter theme by Roots that brings advanced front-end tooling, a powerful templating engine, and object-oriented PHP to WordPress theme development. By the end of this module, you'll understand how to build
  professional, maintainable WordPress themes that integrate perfectly with our development workflow."

## Shot 2: Problems with Traditional WordPress Themes (Screen with Graphics)

**TEXT:** "Before we dive into Sage, let's understand the limitations of traditional WordPress themes. Conventional themes often mix PHP, HTML, CSS, and JavaScript in ways that are difficult to maintain. They lack modern build tools,
  have limited separation of concerns, and often include duplicate code. This creates technical debt over time, making themes harder to maintain, especially on larger projects or when working in teams. Sage solves these problems with
   a more structured, component-based approach."

## Shot 3: Introduction to Sage 11 (Screen with Diagram)

**TEXT:** "Sage 11 is a modern WordPress starter theme that brings professional development practices to theme development. It incorporates Blade templating from Laravel for cleaner views, Bud.js for modern asset compilation, an
  improved theme structure with proper separation of concerns, PSR-4 autoloading for PHP classes, and a component-based architecture. This approach transforms WordPress theme development from the often chaotic traditional methods to
  a structured, maintainable system."

## Shot 4: Installing Sage 11 (Screen Recording with Terminal)

**TEXT:** "Let's install Sage 11 in our Bedrock-based WordPress project. We'll use Composer to add the theme to our project, ensuring it's managed like any other dependency. I'll walk you through the installation process, including
  all the necessary configuration steps. This integrated approach ensures our theme is properly tracked in version control and can be consistently deployed across environments, just like the rest of our project."

## Shot 5: Exploring the Sage Directory Structure (Screen Recording)

**TEXT:** "Now that we have Sage installed, let's explore its directory structure, which differs significantly from traditional WordPress themes. We have app/ for PHP classes, resources/ for views and assets, config/ for theme
  configuration, and bud.config.js for build configuration. This organization creates a clean separation between logic, presentation, and configuration, making the theme more maintainable and easier to work with, especially in
  larger projects or teams."

## Shot 6: Sage Configuration (Screen Recording of Code Editor)

**TEXT:** "Sage is highly configurable through its config/ directory. Here we can set up theme features, post types, shortcodes, assets, and view locations. These configuration files give us a clean, centralized way to manage theme
  settings without digging through PHP files. Let's examine each configuration file and understand how to customize them for our projects, creating a foundation for our theme development."

## Shot 7: Introduction to Blade Templating (Screen Recording of Code Editor)

**TEXT:** "One of Sage's most powerful features is Blade templating, which replaces traditional PHP templates with a cleaner, more expressive syntax. Let's explore how Blade works, including its templates, layouts, partials, and
  components. I'll show you how Blade's syntax for conditionals, loops, includes, and components dramatically reduces template complexity while improving readability and maintainability."

## Shot 8: Converting a Traditional Template to Blade (Screen Recording of Code Editor)

**TEXT:** "Let's see Blade in action by converting a traditional WordPress template to Blade. We'll take a standard single.php file and transform it into a Blade template, implementing proper layouts, sections, and partials. You'll
  see how this approach reduces duplication, improves organization, and makes templates far easier to maintain. This transformation is key to understanding the benefits of modern WordPress theme development."

## Shot 9: Working with Blade Components (Screen Recording of Code Editor)

**TEXT:** "Blade components take template organization a step further, allowing us to create reusable UI elements with their own logic and presentation. Let's create several components like cards, buttons, and forms, showing how to
  pass data to components, handle component logic, and implement component slots. This component-based approach significantly improves code reuse and creates a more consistent UI across your WordPress site."

## Shot 10: Sage Controllers and View Composers (Screen Recording of Code Editor)

**TEXT:** "Sage's controller system separates PHP logic from templates, creating cleaner, more maintainable code. Let's explore how controllers and view composers work in Sage, allowing us to prepare data before it reaches templates.
   We'll create custom controllers for different template types, implement view composers for shared functionality, and see how this approach significantly improves organization compared to traditional WordPress themes."

## Shot 11: Introduction to Bud.js (Screen Recording)

**TEXT:** "Bud.js is Sage 11's asset compilation tool, replacing Webpack directly with a more streamlined API. Let's explore how Bud.js handles JavaScript, CSS, images, and fonts, creating optimized assets for production. I'll walk
  through the bud.config.js file, explaining how to configure entry points, optimization settings, and advanced options. This modern approach to asset management is essential for professional WordPress theme development."

## Shot 12: Working with SCSS in Sage (Screen Recording of Code Editor)

**TEXT:** "Sage uses SCSS for styles, providing powerful features beyond standard CSS. Let's explore how to structure SCSS files in Sage, implementing a component-based approach that mirrors our Blade components. We'll set up
  variables, mixins, and utilities, and organize styles logically across multiple files. This organization makes styles more maintainable and easier to collaborate on, especially in team environments."

## Shot 13: JavaScript in Sage 11 (Screen Recording of Code Editor)

**TEXT:** "Modern WordPress themes need robust JavaScript handling. Let's explore how Sage manages JavaScript, allowing us to use modern ES6+ syntax, modules, and npm packages. We'll set up several JS components, implement DOM-ready
  handlers, and see how Bud.js compiles and optimizes our JavaScript for production. This approach brings professional JavaScript practices to WordPress theme development."

## Shot 14: Integrating Advanced Custom Fields with Sage (Screen Recording)

**TEXT:** "Advanced Custom Fields is essential for professional WordPress development. Let's explore how to integrate ACF with Sage, using Blade templates and controllers to access and display custom fields. I'll demonstrate setting
  up field groups, accessing fields in controllers, and displaying them in templates. We'll also explore Sage's ACF Composer library, which allows us to define field groups directly in PHP code, bringing them under version control."

## Shot 15: Theme Development Workflow with Hot Module Replacement (Screen Recording)

**TEXT:** "Sage includes an optimized development workflow with Hot Module Replacement, dramatically speeding up theme development. Let's explore how to use the 'yarn dev' command to start the development server, enabling CSS and
  JavaScript changes to appear instantly without full page reloads. This workflow significantly improves development efficiency and makes iterative design much faster, especially for CSS and JavaScript heavy themes."

## Shot 16: Building for Production (Screen Recording with Terminal)

**TEXT:** "When we're ready to deploy our theme, we need to build it for production. Let's explore the 'yarn build' command, which creates optimized assets with minification, tree shaking, and other performance optimizations. I'll
  explain how this fits into our deployment pipeline, ensuring our assets are properly optimized for production environments, improving load times and overall performance."

## Shot 17: Extending Sage with Custom Functionality (Screen Recording of Code Editor)

**TEXT:** "Sage provides a solid foundation, but most projects require custom functionality. Let's explore how to extend Sage with custom post types, taxonomies, shortcodes, and theme features. We'll implement these using Sage's
  class-based approach and configuration files, maintaining the clean organization that makes Sage so powerful. This approach ensures custom functionality remains maintainable over time."

## Shot 18: Creating Custom Block Patterns and Block Templates (Screen Recording)

**TEXT:** "WordPress's Block Editor (Gutenberg) is now standard, and professional themes should support it well. Let's explore how to create custom block patterns and block templates in a Sage theme. We'll set up block patterns for
  common layouts, register block templates for post types, and ensure our theme works perfectly with the block editor, creating a seamless content editing experience."

## Shot 19: Debugging and Troubleshooting Sage Themes (Screen Recording)

**TEXT:** "Even with a well-structured theme, debugging is an essential skill. Let's explore Sage-specific debugging techniques, including Blade template debugging, asset compilation issues, and controller problems. I'll demonstrate
  common errors and their solutions, show how to use debugging tools effectively with Sage, and provide strategies for efficiently solving theme development challenges."

## Shot 20: Sage Theme Conclusion and Best Practices (Wide Shot at Desk)

**TEXT:** "Congratulations! You now understand how to develop professional WordPress themes using Sage 11. We've covered its modern architecture, Blade templating, component-based design, asset compilation, and integration with other
  WordPress tools. As you continue working with Sage, remember to maintain clear separation of concerns, use components for reusable elements, leverage controllers for logic, and follow the component-based approach for both templates
   and styles. In the next module, we'll explore environment strategies and Git workflow for professional WordPress development. See you there!"

## Key Points for Memorization

### Traditional Theme Limitations:
- Mixing of PHP, HTML, CSS, and JavaScript
- Limited separation of concerns
- Duplicate code across templates
- Difficult to maintain over time
- Lacks modern build tools
- Poor performance optimization

### Sage 11 Key Features:
- Blade templating engine
- Bud.js for asset compilation
- Controller-based logic separation
- PSR-4 autoloading for PHP classes
- Component-based architecture
- Modern JavaScript processing
- SCSS support
- Hot Module Replacement for development

### Sage Directory Structure:
- app/ - PHP classes and logic
- resources/ - Frontend assets and views
- resources/views/ - Blade templates
- resources/styles/ - SCSS files
- resources/scripts/ - JavaScript files
- config/ - Theme configuration
- bud.config.js - Build configuration

### Blade Templating Benefits:
- Cleaner syntax than PHP
- Layout inheritance with @extends
- Sections and slots with @section/@slot
- Includes with @include
- Components with @component
- Improved conditionals and loops
- Better organization of template parts
- Reduced duplication

### Controller System:
- Separates logic from templates
- Prepares data before view rendering
- Organized by template type
- Uses PHP namespaces and classes
- Makes views focus only on display
- Improves testability
- View composers for shared data

### Bud.js Features:
- Modern asset pipeline
- ES6+ JavaScript support
- SCSS compilation
- Image optimization
- Font processing
- Production builds with minification
- Development server with HMR
- Extensible plugin system

### SCSS Organization:
- Component-based structure
- Variables for theming
- Mixins for reusable styles
- Separation by component/feature
- Follows BEM or similar methodology
- Maps to Blade components

### Integration with ACF:
- Field access through controllers
- Display in Blade templates
- Option pages handling
- Flexible content support
- ACF Composer for field definitions
- Version control for field groups

### Development Workflow:
- 'yarn dev' for development server
- Hot Module Replacement
- Browser sync capabilities
- 'yarn build' for production assets
- Source maps for debugging
- Fast rebuild times

### Production Optimization:
- JavaScript and CSS minification
- Tree shaking for unused code
- Asset bundling
- Cache busting with file hashing
- Critical CSS extraction
- Proper source map handling

### Extending Sage:
- Custom post type registration
- Taxonomy creation
- Shortcode implementation
- Theme feature registration
- API integration
- WP REST API customization

### Block Editor Integration:
- Custom block patterns
- Block templates for post types
- Block style variations
- Editor-specific stylesheets
- Theme.json configuration
- Full-site editing support

### Debugging Techniques:
- Blade template inspection
- Controller data dumping
- Asset compilation troubleshooting
- PHP error handling
- JavaScript debugging
- Browser developer tools

### Best Practices:
- Component-based design
- Clear separation of concerns
- Consistent naming conventions
- Documentation standards
- Code reuse through components
- Performance optimization