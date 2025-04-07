Module 4: Dependency Management with Composer - Shot List & Script

  Shot 1: Introduction to Dependency Management (Wide Shot at Desk)

  TEXT: "Welcome to Module 4 of our Professional WordPress Development course. In this module, we're diving deep into dependency management with Composer, which is the cornerstone of our professional WordPress workflow. By the end
  of this session, you'll understand how to use Composer to manage all your WordPress project dependencies, from core WordPress to plugins and themes, in a controlled, version-specific way that ensures consistency across
  environments and team members."

  Shot 2: Composer Fundamentals (Screen with Graphics)

  TEXT: "Before we get into WordPress-specific usage, let's make sure we understand what Composer is and why it's so powerful. Composer is a dependency manager for PHP that allows you to declare the libraries your project depends on
   and manages them for you. Unlike traditional WordPress plugin installation through the admin dashboard, Composer lets us define exact versions, automatically handle updates, and keep our dependencies under version control without
   committing the actual code. This is a game-changer for professional development."

  Shot 3: Understanding composer.json Structure (Screen Recording of Code Editor)

  TEXT: "The heart of Composer is the composer.json file, which defines your project's requirements and configuration. Let's look at the structure of a typical Bedrock composer.json file. Here we have metadata about the project,
  repository sources, required packages, development dependencies, and autoloading configuration. I'll explain each section in detail, focusing on the parts most relevant to WordPress development."

  Shot 4: Repository Configuration (Close-up of Code Editor)

  TEXT: "One of the first things to understand is how to configure package repositories. By default, Composer uses Packagist, but for WordPress we need additional sources. Here you can see we've configured WPackagist for free
  plugins and themes, our SatisPress repository for premium plugins, and specific repositories for packages like Advanced Custom Fields Pro. This configuration tells Composer where to look for the packages we require."

  Shot 5: Managing WordPress Core (Screen Recording)

  TEXT: "Let's start with managing WordPress core itself. In traditional WordPress setups, core files are part of your codebase. With Bedrock, WordPress core is managed as a Composer dependency through 'roots/wordpress'. This allows
   us to precisely control the WordPress version and update it through Composer. Let me show you how to specify the WordPress version, update it, and handle major version upgrades safely."

  Shot 6: Open Source Plugin Management (Screen Recording)

  TEXT: "Now let's look at managing open-source plugins from the WordPress repository. WPackagist makes this incredibly easy by mirroring the entire WordPress plugin repository as Composer packages. We can require plugins using the
  'wpackagist-plugin/' prefix followed by the plugin slug. I'll demonstrate adding popular plugins like Yoast SEO and Advanced Custom Fields, specifying version constraints, and updating them with Composer."

  Shot 7: Premium Plugin Management (Screen Recording)

  TEXT: "Managing premium plugins follows the same pattern, but using our SatisPress repository. Remember in Module 2 we set up SatisPress to host our premium plugins? Now we'll use that to require plugins like Elementor Pro or WP
  All Import Pro through Composer. Let me show you the syntax for requiring these plugins, including proper version constraints, and how to authenticate with our private repository."

  Shot 8: Theme Management (Screen Recording)

  TEXT: "Themes can also be managed through Composer, both from the WordPress repository and custom sources. For themes from the WordPress repository, we use the 'wpackagist-theme/' prefix. For custom themes, we can either include
  them directly in our project repository or host them in a private repository. I'll demonstrate both approaches and explain when each is appropriate."

  Shot 9: Version Constraints Best Practices (Talking Head with Slides)

  TEXT: "Version constraints are crucial in Composer. They determine exactly which versions of packages can be installed, affecting stability and security. Let's explore the different ways to specify version constraints, from exact
  versions to ranges and semantic versioning. I'll share best practices for each dependency type, explaining when to lock to specific versions and when to allow for updates within safe boundaries."

  Shot 10: Composer Scripts (Screen Recording of Code Editor)

  TEXT: "Composer scripts allow us to define custom commands that can be run via Composer. These are incredibly useful for automating common tasks in your workflow. Here in our composer.json, we've defined scripts for running tests,
   post-install actions, and other routine operations. Let me show you how to create and use these scripts, and how they can streamline your development process."

  Shot 11: composer.lock and Dependency Resolution (Screen Recording)

  TEXT: "Let's talk about composer.lock and how Composer resolves dependencies. The lock file records the exact versions of all installed packages, ensuring that everyone on your team gets identical dependencies. I'll explain how
  Composer resolves dependency conflicts, what happens during 'composer install' versus 'composer update', and how to troubleshoot common dependency issues."

  Shot 12: Autoloading Configuration (Close-up of Code Editor)

  TEXT: "Another powerful feature of Composer is autoloading, which automatically loads PHP classes without requiring explicit include or require statements. In our composer.json file, we configure autoloading for both our own code
  and third-party packages. I'll show you how to set up PSR-4 autoloading for your custom code, and how this integrates with WordPress and Bedrock to create a more organized codebase."

  Shot 13: Handling Custom Plugins and Packages (Screen Recording)

  TEXT: "Sometimes you'll need to include custom plugins or packages that aren't available through public repositories. Let's look at strategies for managing these, from including them directly in your project repository to creating
   private Composer packages. I'll demonstrate best practices for each approach and explain how to choose the right strategy for different situations."

  Shot 14: Real-World Composer Workflow (Screen Recording with Terminal)

  TEXT: "Now let's see a complete real-world workflow in action. I'll walk through the process of setting up a new project, adding dependencies, updating packages, and handling typical scenarios you'll encounter in professional
  development. You'll see how Composer makes these operations efficient and reliable, even in complex WordPress projects with many dependencies."

  Shot 15: Troubleshooting Common Issues (Talking Head with Slides)

  TEXT: "Before we wrap up, let's address common Composer issues you might encounter in WordPress development. These include authentication problems, memory limit errors, timeout issues, and dependency conflicts. I'll show you how
  to diagnose these problems and apply the right solutions, saving you time and frustration in your development work."

  Shot 16: Conclusion and Next Steps (Wide Shot at Desk)

  TEXT: "Congratulations! You now have a solid understanding of how to use Composer for professional WordPress dependency management. This approach gives you precise control over your project's components, ensures consistency across
   environments, and integrates perfectly with version control. In the next module, we'll dive into theme development with Sage 11, building on the foundation we've established with Bedrock and Composer. See you there!"

  Key Points for Memorization

  • Composer Fundamentals:
  - PHP dependency manager
  - Declares and manages project libraries
  - Allows version control without committing vendor code
  - Enables exact version control
  - Automates dependency updates
  - Ensures consistency across environments and team members

  • composer.json Structure:
  - Project metadata (name, type, license, description)
  - Repository sources configuration
  - Required packages with version constraints
  - Development dependencies
  - Autoloading configuration
  - Scripts for automated tasks
  - Configuration options

  • Repository Configuration:
  - Packagist (default PHP packages)
  - WPackagist (WordPress plugins/themes)
  - SatisPress (private premium plugins)
  - Custom repositories (ACF Pro, etc.)
  - Private repository authentication

  • WordPress Core Management:
  - Using roots/wordpress package
  - Version specification and constraints
  - Update process
  - Handling major version upgrades

  • Plugin Management Types:
  - Open source via WPackagist (wpackagist-plugin/plugin-name)
  - Premium plugins via SatisPress (vendor/plugin-name)
  - Custom plugins (direct inclusion or private repositories)
  - Must-use plugins configuration

  • Theme Management:
  - WordPress repository themes (wpackagist-theme/theme-name)
  - Custom themes (direct inclusion or private repositories)
  - Parent-child theme relationships
  - Theme asset compilation integration

  • Version Constraints Best Practices:
  - Exact version (1.2.3)
  - Range (>=1.2.3 <2.0.0)
  - Semantic versioning (^1.2.3, ~1.2.3)
  - When to lock versions vs. allow updates
  - Security considerations

  • Composer Scripts:
  - Defining custom commands
  - Automating routine tasks
  - Post-install and post-update actions
  - Integration with build processes
  - Testing and validation scripts

  • composer.lock and Dependency Resolution:
  - Lock file purpose and importance
  - Difference between install and update
  - Dependency conflict resolution
  - Troubleshooting resolution problems

  • Autoloading Configuration:
  - PSR-4 autoloading for custom code
  - Classmap autoloading
  - Files autoloading
  - Integration with WordPress
  - Performance considerations

  • Custom Package Strategies:
  - Direct inclusion in project repository
  - Private Composer packages
  - Monorepo approaches
  - When to use each strategy
  - Versioning considerations

  • Common Workflow Commands:
  - composer install (initial setup)
  - composer update (updating dependencies)
  - composer require (adding new packages)
  - composer remove (removing packages)
  - composer validate (checking configuration)

  • Troubleshooting Issues:
  - Authentication problems
  - Memory limit errors
  - Timeout issues
  - Dependency conflicts
  - Repository connectivity problems