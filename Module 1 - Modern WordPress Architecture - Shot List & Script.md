Module 1: Modern WordPress Architecture - Shot List & Script

  Shot 1: Introduction at Desk (Wide Shot)

  TEXT: "Welcome to Module 1 of our Professional WordPress Development course. I'm going to walk you through the modern WordPress architecture we'll be using throughout this course - specifically the Bedrock approach by Roots.io.
  This foundation will set us up for success in all the following modules."

  Shot 2: Split Screen Comparison (Screen Recording)

  TEXT: "Let's start by comparing traditional WordPress setups with modern approaches. On the left, you can see the typical WordPress installation where WordPress core files, themes, plugins, and uploads all live together in one
  directory. This works, but it creates challenges for version control, deployment, and team collaboration. On the right is the Bedrock structure we'll be using, with a cleaner separation of concerns, better security, and improved
  organization."

  Shot 3: Bedrock Directory Structure (Screen Recording)

  TEXT: "Bedrock improves on vanilla WordPress in several key ways. First, it uses a modern directory structure that separates WordPress core from your custom code. The web folder contains the public-facing files, with WordPress
  core isolated in a web/wp directory, while your application code lives in web/app. Configuration files are separate from the codebase in the config directory, and third-party dependencies are managed with Composer in the vendor
  directory."

  Shot 4: Environment Configuration (Close-up of Code Editor)

  TEXT: "One of Bedrock's biggest advantages is environment-specific configuration. Instead of hardcoding database credentials and other settings, we use environment variables through .env files, allowing different configurations
  for development, staging, and production environments without changing code. Here's what that looks like in the config/application.php file."

  Shot 5: Composer Configuration (Screen Recording)

  TEXT: "Dependency management is handled through Composer, which brings modern PHP development practices to WordPress. In composer.json, we define our project's requirements, including WordPress core, plugins, and themes. This
  allows us to precisely control versions, update dependencies efficiently, and avoid committing third-party code to our repository."

  Shot 6: Multisite Configuration (Screen Recording)

  TEXT: "Bedrock also handles WordPress multisite setup elegantly. As you can see in this application.php file, multisite configuration is controlled through environment variables, making it easy to enable or disable multisite
  features across different environments."

  Shot 7: Security Benefits (Talking Head with Bullet Points)

  TEXT: "The Bedrock structure provides important security benefits. WordPress core files are kept separate from your custom code. Configuration files with sensitive information are kept outside the web root. The web server only
  needs access to the web directory, not the entire project. And we can use environment variables to keep sensitive data out of our codebase."

  Shot 8: Live Project Structure (Screen Recording)

  TEXT: "Let's look at a real Bedrock project structure in action. Here you can see the complete directory layout of our project. Notice the separation between WordPress core, themes, plugins, and configuration. This organization
  makes it much easier to manage complex WordPress projects, especially when working in teams."

  Shot 9: Benefits Summary (Talking Head with Graphics)

  TEXT: "To summarize the key benefits of this architecture: It provides better organization and separation of concerns. It enables reliable deployments across different environments. It improves security by protecting sensitive
  configuration. It uses modern PHP practices like dependency management. And it makes collaboration within development teams much smoother."

  Shot 10: Conclusion and Next Steps (Wide Shot)

  TEXT: "This modern WordPress architecture will be the foundation for everything else we build in this course. In the next module, we'll set up SatisPress to manage premium plugins via Composer, further enhancing our professional
  development workflow. Now that you understand the structure, we're ready to start building."

  Key Points for Memorization

  • Traditional vs. Modern WordPress:
  - Traditional: Everything mixed together, challenging for version control
  - Modern (Bedrock): Separation of concerns, better organization

  • Bedrock's Directory Structure:
  - /web - Public-facing files (docroot)
	- /web/wp - WordPress core (managed by Composer)
	- /web/app - Themes, plugins, uploads (your code)
  - /config - Configuration files
  - /vendor - Composer dependencies

  • Environment Configuration:
  - Uses .env files for environment variables
  - Different configs for dev/staging/production
  - Sensitive data kept out of code repository

  • Composer Benefits:
  - Manages WordPress core as a dependency
  - Manages plugins and themes
  - Version locking and updates
  - No third-party code in repository

  • Security Improvements:
  - WordPress core separated from custom code
  - Configuration outside web root
  - Limited web server access
  - Secrets in environment variables

  • Multisite Configuration:
  - Controlled via environment variables
  - Easy to enable/disable across environments

  • Key Benefits Summary:
  1. Better organization and code separation
  2. Reliable cross-environment deployments
  3. Improved security practices
  4. Modern PHP dependency management
  5. Better team collaboration

  • Real-world Application:
  - Multiple themes in one installation
  - Environment-specific configurations
  - Consistent development to production flow