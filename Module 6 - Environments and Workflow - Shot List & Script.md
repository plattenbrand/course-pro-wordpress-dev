Module 6: Environments and Workflow - Shot List & Script

  Shot 1: Introduction to Environment Strategy (Wide Shot at Desk)

  TEXT: "Welcome to Module 6 of our Professional WordPress Development course. Now that we have our local development environment set up with Bedrock and a modern Sage theme, it's time to establish a robust environment strategy and
  Git workflow. In this module, we'll explore how to set up multiple environments for development, staging, and production, and implement a Git-based workflow that ensures smooth collaboration and deployment. By the end, you'll have
   a complete strategy for managing WordPress projects across environments with confidence and reliability."

  Shot 2: The Three-Environment Model (Screen with Diagram)

  TEXT: "Professional WordPress development typically uses a three-environment model: development, staging, and production. Development is your local environment where you build and test features. Staging is a pre-production
  environment that mirrors production for final testing. And production is the live site that users interact with. This separation allows you to develop and test safely without affecting live users. Let's explore how these
  environments work together in a comprehensive workflow."

  Shot 3: Environment-Specific Configurations (Screen Recording of Code Editor)

  TEXT: "One of Bedrock's key features is environment-specific configuration through .env files and environment configuration files. Let's examine how the config/application.php file loads environment-specific settings from
  config/environments/, allowing different configurations for development, staging, and production. I'll show you which settings should be consistent across environments and which should vary, from database credentials to debug
  settings and security configurations."

  Shot 4: Introduction to GitFlow (Screen with Animation)

  TEXT: "For our Git workflow, we'll use GitFlow, a branching model designed for team collaboration. GitFlow defines specific branch types and roles, including main for production code, develop for development, feature branches for
  new features, release branches for preparing releases, and hotfix branches for urgent fixes. This structured approach helps teams collaborate effectively while maintaining stable production code. Let me walk you through the entire
   GitFlow lifecycle."

  Shot 5: Setting Up GitFlow (Screen Recording with Terminal)

  TEXT: "Now let's set up GitFlow in our project. We'll start by initializing GitFlow with the git flow init command, configuring our branch naming conventions and structure. I'll explain each configuration option and the
  recommended settings for WordPress projects. This setup establishes the framework for our entire Git workflow moving forward."

  Shot 6: Working with Feature Branches (Screen Recording with Terminal)

  TEXT: "Feature branches are where most development work happens. Let's create a new feature branch, make some changes to our theme, and complete the feature by merging it back to the develop branch. I'll demonstrate the complete
  feature branch lifecycle, from creation to development to testing and finally merging, highlighting best practices at each step. This pattern will be your day-to-day workflow for most development tasks."

  Shot 7: Creating a Custom Staging Branch (Screen Recording with Terminal)

  TEXT: "While GitFlow includes release branches for preparing code for production, in WordPress projects we often benefit from a persistent staging branch. Let's create a staging branch from our main branch, which will serve as the
   target for our staging environment deployments. This staging branch sits between develop and main, allowing for final testing before production deployment."

  Shot 8: Release Process with GitFlow (Screen Recording with Terminal)

  TEXT: "When we're ready to move code to production, we create a release branch from develop, make any final adjustments, then merge to both main and back to develop. Let me demonstrate this process, showing how to create a release
   branch, handle version bumps, resolve any final issues, and complete the release by merging to the appropriate branches. This ensures our production code is stable while keeping develop up to date."

  Shot 9: Handling Hotfixes (Screen Recording with Terminal)

  TEXT: "Sometimes critical issues require immediate fixes to production. For these situations, GitFlow provides hotfix branches that branch directly from main. Let's walk through creating a hotfix branch, implementing and testing
  the fix, and then merging it to both main and develop. I'll also show how to update the staging branch with these changes to maintain environment consistency."

  Shot 10: Git Workflow Best Practices (Talking Head with Slides)

  TEXT: "Let's discuss some Git workflow best practices specific to WordPress development. This includes commit message conventions, when to create new branches, how to handle plugin updates, and strategies for managing large media
  files. These practices will help your team maintain a clean, efficient Git history and avoid common pitfalls in WordPress version control."

  Shot 11: Managing Database Changes (Screen Recording)

  TEXT: "One challenge in WordPress development is managing database changes across environments. Unlike code, databases can't be directly version controlled. Let's explore strategies for handling database changes, including using
  migration plugins, documenting schema changes, and creating seed data for development. I'll also introduce our sync script, which we'll explore in detail in the next module."

  Shot 12: Environment-Specific Plugins and Themes (Screen Recording)

  TEXT: "Sometimes certain plugins or themes should only be active in specific environments. For example, debugging plugins in development or caching plugins in production. Let's look at how to manage environment-specific
  dependencies in Composer using require-dev for development-only packages and environment-specific activation through the wp-config.php and .env files."

  Shot 13: Continuous Integration Setup (Screen Recording)

  TEXT: "Continuous Integration (CI) helps validate your code before deployment. Let's set up a basic CI configuration using GitHub Actions, which will automatically test our code when we push to specific branches. We'll configure
  it to run PHP linting, theme asset compilation, and other checks to catch issues early. This adds another layer of quality assurance to our workflow."

  Shot 14: Pull Request Workflow (Screen Recording)

  TEXT: "For team collaboration, a pull request workflow is essential. Let's explore how to use pull requests effectively with our GitFlow setup. I'll demonstrate creating a pull request from a feature branch to develop, requesting
  reviews, handling feedback, and finally merging the approved changes. This process ensures code quality and knowledge sharing within your team."

  Shot 15: Automating Routine Tasks (Screen Recording with Terminal)

  TEXT: "To streamline our workflow, let's set up some automation for routine tasks. We'll create Git hooks for pre-commit linting and formatting, configure Composer scripts for common operations, and explore other automation
  opportunities. These small optimizations add up to significant time savings and consistency improvements in your daily workflow."

  Shot 16: Handling WordPress Core and Plugin Updates (Screen Recording)

  TEXT: "Managing WordPress core and plugin updates requires careful planning. Let's walk through a proper update workflow that maintains environment consistency. I'll show you how to test updates in development, promote them to
  staging for verification, and finally apply them to production. This structured approach minimizes the risk of updates breaking your live site."

  Shot 17: Conclusion and Next Steps (Wide Shot at Desk)

  TEXT: "Congratulations! You now have a solid understanding of environment strategy and Git workflow for professional WordPress development. This structured approach ensures code quality, team collaboration, and reliable
  deployments. In the next module, we'll dive into database and file synchronization between environments, addressing one of the most challenging aspects of WordPress development. See you there!"

  Key Points for Memorization

  • Three-Environment Model:
  - Development: Local environment for building features
  - Staging: Pre-production testing environment
  - Production: Live site for end users
  - Purpose: Separation of concerns and risk mitigation

  • Environment-Specific Configuration:
  - .env files for environment variables
  - Config/environments/ directory for specific settings
  - Different settings for debugging, security, performance
  - Consistent application logic across environments

  • GitFlow Branching Model:
  - main: Production-ready code
  - develop: Integration branch for development
  - feature/*: New features and changes
  - release/*: Preparing code for production
  - hotfix/*: Urgent production fixes
  - staging: Persistent pre-production branch

  • GitFlow Setup Process:
  - git flow init for initial configuration
  - Branch naming convention establishment
  - Setting default branches
  - Configuration for WordPress-specific needs

  • Feature Branch Workflow:
  - git flow feature start feature-name
  - Development and testing on feature branch
  - git flow feature finish feature-name
  - Merging back to develop
  - When to use git flow vs. direct commands

  • Staging Branch Management:
  - Creating from main branch
  - Receiving updates from develop
  - Final testing before production
  - Automation of deployments to staging environment

  • Release Process:
  - git flow release start 1.2.0
  - Final adjustments and version bumps
  - Testing on release branch
  - git flow release finish 1.2.0
  - Simultaneous merges to main and develop

  • Hotfix Handling:
  - git flow hotfix start critical-fix
  - Direct fixes to production issues
  - Testing and verification
  - git flow hotfix finish critical-fix
  - Updates to main, develop, and staging

  • Git Best Practices for WordPress:
  - Meaningful commit messages
  - When to create new branches
  - Plugin update strategies
  - Managing large media files
  - Avoiding common WordPress VCS pitfalls

  • Database Change Management:
  - Strategies for schema changes
  - Migration plugins and approaches
  - Seed data for development
  - Documentation requirements
  - Sync processes between environments

  • Environment-Specific Dependencies:
  - require-dev for development packages
  - Environment-based plugin activation
  - Configuration through wp-config.php
  - Managing environment differences

  • Continuous Integration:
  - GitHub Actions configuration
  - Automated tests and checks
  - Asset compilation verification
  - Quality assurance automation
  - Integration with deployment pipeline

  • Pull Request Collaboration:
  - Creating PRs from feature branches
  - Code review process
  - Handling feedback and revisions
  - Merging approved changes
  - Team communication best practices

  • Workflow Automation:
  - Git hooks for pre-commit actions
  - Composer scripts for common tasks
  - Build automation
  - Linting and formatting tools
  - Time-saving optimizations

  • WordPress Update Workflow:
  - Testing updates in development
  - Controlled promotion to staging
  - Production update process
  - Handling database updates
  - Rollback strategies