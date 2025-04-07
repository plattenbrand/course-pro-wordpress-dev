# Module 3: Local Development Environment - Shot List & Script

## Shot 1: Introduction to Local Development (Wide Shot at Desk)

**TEXT:** "Welcome to Module 3 of our Professional WordPress Development course. Now that we understand modern WordPress architecture and have our SatisPress repository set up, it's time to create our local development environment. A
  proper local setup is the foundation of professional development, allowing you to work efficiently, test changes safely, and maintain consistency across your team. By the end of this module, you'll have a fully functioning local
  WordPress environment ready for professional development."

## Shot 2: Local Development Requirements (Screen with Graphics)

**TEXT:** "Before we dive in, let's review what makes an ideal local WordPress development environment. We need a fast, reliable setup that closely mirrors our production environment. It should be easy to set up and maintain, work
  well with version control, support multiple projects simultaneously, and integrate with our modern workflow tools like Composer and WP-CLI. Most importantly, it should be consistent across team members to avoid the dreaded 'works
  on my machine' problem."

## Shot 3: Development Tools Overview (Screen with Logos)

**TEXT:** "For our professional setup, we'll be using these key tools: PHP 8.0 or higher for running WordPress; Composer for dependency management; MySQL or MariaDB for our database; Node.js and NPM for frontend asset compilation;
  Laravel Valet for our local server environment on macOS; and WP-CLI for command-line WordPress management. If you're on Windows or Linux, I'll mention alternative approaches, but the core workflow remains the same regardless of
  your operating system."

## Shot 4: Installing Prerequisites (Screen Recording)

**TEXT:** "Let's start by installing the prerequisite software. If you already have some of these components installed, you can skip ahead, but I recommend ensuring you have the latest compatible versions. I'll walk through installing
   PHP, MySQL, Composer, Node.js, and WP-CLI. These form the backbone of our development environment and will be used throughout the rest of this course."

## Shot 5: Setting Up Laravel Valet (Screen Recording)

**TEXT:** "For our local server environment on macOS, we'll use Laravel Valet. Valet is lightweight, fast, and perfect for WordPress development. It runs on your local machine without the overhead of virtual machines, while still
  providing the features we need. Let me show you how to install and configure Valet, including setting up SSL certificates for local https sites, which is important for testing certain WordPress features."

## Shot 6: Alternative Local Environments (Talking Head with Slides)

**TEXT:** "If you're not on macOS, there are excellent alternatives available. For Windows users, Local by Flywheel or WAMP are solid choices. Linux users might prefer LAMP or Docker-based solutions. Regardless of which tool you
  choose, the key is having a stable local environment that supports our workflow. The specific commands might differ, but the principles and process remain the same."

## Shot 7: Creating a New Bedrock Project (Screen Recording)

**TEXT:** "Now let's create our first Bedrock-based WordPress project. We'll use Composer to create a new project based on the Bedrock template. This single command will set up the entire directory structure we discussed in Module 1,
  including WordPress core. After running it, we'll have a clean Bedrock installation ready for customization. Let's go through this process step by step."

## Shot 8: Configuring Environment Variables (Screen Recording of Code Editor)

**TEXT:** "Next, we need to configure our environment variables. Bedrock uses a `.env` file to manage environment-specific settings like database credentials and WordPress URLs. Let's copy the example file, then configure it for our
  local environment. I'll explain each setting, including database configuration, WordPress URLs, and multisite settings. These environment variables are crucial since they control how WordPress operates in different environments."

## Shot 9: Setting Up Local Domain (Screen Recording)

**TEXT:** "Now we'll set up our local domain. With Valet, this is as simple as running a single command in our project directory. We'll create a domain like 'project-name.test' that will automatically resolve on our local machine. For
   multisite setups, we'll need to configure additional domains or subdomains. I'll also show you how to set up SSL for local development, which is increasingly important for modern WordPress sites."

## Shot 10: Database Setup (Screen Recording)

**TEXT:** "Let's set up our local database. We can use a database management tool like TablePlus or Sequel Pro, or simply use the MySQL command line. We'll create a new database for our project and make sure the credentials match what
   we specified in our `.env` file. I'll also explain how to handle database configuration for WordPress multisite installations, which requires some additional settings."

## Shot 11: Initializing WordPress (Screen Recording)

**TEXT:** "With our environment configured, let's initialize WordPress using WP-CLI. This will set up the WordPress database tables and create the initial admin user. For multisite installations, we'll need some additional commands to
  configure the network. I'll show you the entire process from start to finish, resulting in a fully functional WordPress installation accessible at our local domain."

## Shot 12: Creating an Initialization Script (Screen Recording of Code Editor)

**TEXT:** "To streamline future setups and ensure consistency across team members, let's create an initialization script. This bash script will automate the steps we just performed, including setting up the local domain, configuring
  SSL, and initializing the database. This will be especially valuable for multisite setups, where configuration can be more complex. Here's what our `init-valet.sh` script looks like and how to use it."

## Shot 13: Connecting to SatisPress (Screen Recording)

**TEXT:** "Remember our SatisPress repository from the previous module? Now let's connect our local project to it. We'll update our `composer.json` file to include the SatisPress repository and create an `auth.json` file with our
  credentials. This allows us to install premium plugins locally using Composer. Let me show you how to test this connection by installing a premium plugin from our repository."

## Shot 14: Git Initialization and Ignores (Screen Recording)

**TEXT:** "Before we finish setting up our local environment, let's initialize Git for version control. We'll create a new Git repository, set up our `.gitignore` file to exclude environment-specific files and directories, and make our
   initial commit. Proper Git configuration from the start is crucial for a professional workflow, especially when working in teams."

## Shot 15: Testing the Complete Setup (Screen Recording)

**TEXT:** "Let's verify that our entire local setup is working correctly. We'll navigate to our local site, log into the WordPress admin, make some test changes, and ensure everything is functioning as expected. For multisite
  installations, we'll check each site in the network to make sure our domain configuration is correct. This comprehensive testing confirms that our local development environment is ready for use."

## Shot 16: Conclusion and Next Steps (Wide Shot at Desk)

**TEXT:** "Congratulations! You've now set up a professional local WordPress development environment based on Bedrock. This modern setup will serve as the foundation for all our future development work. In the next module, we'll dive
  deeper into dependency management with Composer, exploring how to efficiently manage plugins, themes, and other dependencies in our WordPress projects. See you there!"

## Key Points for Memorization

### Ideal Local Environment Characteristics:
- Fast and reliable
- Mirrors production environment
- Easy to set up and maintain
- Works well with version control
- Supports multiple projects
- Integrates with modern workflow tools
- Consistent across team members

### Essential Development Tools:
- PHP 8.0+ (runtime)
- Composer (dependency management)
- MySQL/MariaDB (database)
- Node.js & NPM (frontend tooling)
- Laravel Valet (macOS) or alternatives
- WP-CLI (WordPress management)
- Git (version control)

### Laravel Valet Benefits (macOS):
- Lightweight, no virtual machines
- Fast DNS resolution (.test domains)
- Easy SSL certificate generation
- Simple site switching
- Minimal configuration required

### Alternative Local Environments:
- Windows: Local by Flywheel, WAMP
- Linux: LAMP, Docker-based solutions
- Cross-platform: Docker, Lando, Trellis

### Creating Bedrock Project:
- Using `composer create-project` command
- Directory structure automatically created
- WordPress core installed as dependency
- Configuration separated from core files

### Environment Configuration:
- `.env` file for environment variables
- Database connection settings
- WordPress URLs and site configuration
- Multisite enablement settings
- Development-specific configurations

### Local Domain Setup:
- Configuring 'project-name.test' domains
- Setting up SSL certificates
- Special considerations for multisite
- Subdomain vs. subdirectory configurations

### Database Configuration:
- Creating local database
- Setting user permissions
- Importing starter data (if applicable)
- Multisite database considerations

### WordPress Initialization:
- Using WP-CLI for setup
- Creating admin user
- Configuring multisite network
- Setting up initial sites

### Automation Script Creation:
- `init-valet.sh` for consistent setup
- Automating domain configuration
- Streamlining team onboarding
- Handling multisite complexity

### Connecting to SatisPress:
- Updating `composer.json` with repository
- Creating `auth.json` with credentials
- Testing premium plugin installation
- Keeping authentication tokens secure

### Git Configuration:
- Repository initialization
- `.gitignore` setup for WordPress
- Excluding environment-specific files
- Making initial commit

### Final Testing:
- Verifying site functionality
- Testing WordPress admin access
- Checking multisite network (if applicable)
- Validating Composer workflow