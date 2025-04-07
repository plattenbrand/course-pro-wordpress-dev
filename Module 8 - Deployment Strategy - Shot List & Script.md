# Module 8: Deployment Strategy - Shot List & Script

## Shot 1: Introduction to Professional Deployment (Wide Shot at Desk)

**TEXT:** "Welcome to Module 8 of our Professional WordPress Development course. In this critical module, we'll explore deployment strategies for WordPress sites. Moving code from development to production reliably and safely is a
  cornerstone of professional web development. By the end of this module, you'll understand how to implement zero-downtime deployments using Deployer and automate your deployment pipeline with GitHub Actions, ensuring consistent and
   reliable releases without disrupting your users."

## Shot 2: Deployment Challenges in WordPress (Screen with Graphics)

**TEXT:** "Traditional WordPress deployments often involve manual FTP uploads or direct file edits, which introduce significant risks: human error, inconsistency between environments, site downtime during updates, and difficulty
  rolling back problematic changes. Professional deployment addresses these challenges by automating the process, ensuring all files are transferred consistently, maintaining site availability during updates, and providing
  mechanisms for quick rollbacks if issues arise."

## Shot 3: Zero-Downtime Deployment Overview (Animated Diagram)

**TEXT:** "At the heart of our deployment strategy is the concept of zero-downtime deployment. Rather than updating files in place, we deploy to a new directory, then switch to it when everything is ready. This approach, known as
  atomic deployment, ensures your site remains available throughout the process and provides an instant rollback mechanism. Let's look at how this works in practice and why it's superior to traditional methods."

## Shot 4: Introduction to Deployer (Screen Recording)

**TEXT:** "For our deployment tool, we'll use Deployer, a PHP-based deployment system that implements atomic deployments and integrates perfectly with our Composer-based WordPress stack. Deployer handles the complex tasks of cloning
  your repository, installing dependencies, creating the directory structure, and performing the atomic switch. Let's explore how Deployer works and why it's ideal for professional WordPress deployment."

## Shot 5: Setting Up Deployer in Your Project (Screen Recording with Terminal)

**TEXT:** "Let's set up Deployer in our Bedrock-based WordPress project. We'll install Deployer as a development dependency using Composer, then create our deploy.php configuration file. This file will define our deployment process,
  including server connections, shared files and directories, and deployment tasks. I'll walk through each step of the setup process, explaining the configuration options and their purposes."

## Shot 6: Deployer Configuration for WordPress (Close-up of Code Editor)

**TEXT:** "Now let's examine the deploy.php file in detail. This configuration defines how Deployer will deploy our WordPress site. It includes settings for repository access, server connections, shared resources between deployments,
  and the sequence of deployment tasks. We'll configure it for our development, staging, and production environments, with environment-specific settings for each. This configuration is the blueprint for our entire deployment
  process."

## Shot 7: Understanding Deployment Tasks (Screen Recording of Code Editor)

**TEXT:** "Deployer uses tasks to define the steps in the deployment process. Let's explore the key tasks in our deployment configuration, including preparing the deployment, cloning the repository, installing dependencies, setting up
   shared resources, and performing the atomic switch. I'll explain each task's purpose and how they work together to create a complete deployment flow. We'll also look at how to customize these tasks for WordPress-specific needs."

## Shot 8: Shared Files and Directories (Screen Recording of Code Editor)

**TEXT:** "In WordPress deployments, certain files and directories need to be shared between releases, including the uploads directory, .env file, and .htaccess. Let's configure Deployer's shared files and directories functionality to
   handle these resources properly. This ensures that user uploads, environment configurations, and server settings persist across deployments while allowing your code to update independently."

## Shot 9: Configuring Server Connections (Screen Recording of Code Editor)

**TEXT:** "Now let's set up the server connections for our environments. We'll configure host definitions for staging and production, including server addresses, authentication methods, deployment paths, and environment-specific
  settings like the branch to deploy. This configuration tells Deployer where and how to deploy your code for each environment, creating a clear path from your repository to your servers."

## Shot 10: Manual Deployment with Deployer (Screen Recording with Terminal)

**TEXT:** "Let's perform a manual deployment using Deployer to understand the process. I'll run the deploy command, targeting our staging environment, and walk through each step as Deployer executes the deployment. You'll see the
  connection to the server, repository cloning, dependency installation, shared resources setup, and finally the atomic switch. This demonstrates the complete deployment process from start to finish."

## Shot 11: Introduction to GitHub Actions for CI/CD (Screen with Diagram)

**TEXT:** "While manual deployments are useful, a professional workflow automates deployments through Continuous Integration and Continuous Deployment (CI/CD). Let's introduce GitHub Actions, a powerful CI/CD platform integrated
  directly with GitHub. GitHub Actions allows us to automate our deployment process, triggering deployments automatically when code is pushed to specific branches and adding validation steps to ensure code quality."

## Shot 12: Setting Up GitHub Actions Workflow (Screen Recording of Code Editor)

**TEXT:** "Now let's create our GitHub Actions workflow file, which will define our automated deployment process. This YAML configuration specifies when deployments should trigger, what environments to deploy to based on the branch,
  and the steps to execute during deployment. We'll set it up to deploy automatically to staging when the staging branch is updated and to production when the main branch is updated."

## Shot 13: GitHub Actions Configuration for WordPress (Close-up of Code Editor)

**TEXT:** "Let's examine the key components of our GitHub Actions workflow. We'll configure it to install PHP and Composer, set up authentication for private repositories, build assets for our Sage theme, and execute Deployer for the
  actual deployment. I'll explain each step and its purpose, showing how they work together to create a comprehensive automated deployment pipeline specifically tailored for WordPress."

## Shot 14: Secrets and Environment Variables (Screen Recording)

**TEXT:** "Secure deployment requires managing sensitive information like SSH keys and authentication tokens. Let's set up GitHub Secrets to store these securely and make them available to our workflow. I'll show you how to create and
   manage secrets for SSH keys, known hosts, and Composer authentication, ensuring your deployment is both automated and secure."

## Shot 15: Build Steps for Themes and Assets (Screen Recording of Code Editor)

**TEXT:** "Modern WordPress themes like Sage require asset compilation before deployment. Let's configure our GitHub Actions workflow to handle this, installing Node.js, running the build process for our theme, and ensuring the
  compiled assets are included in the deployment. This ensures that your production site receives fully optimized and compiled assets without requiring you to commit built files to your repository."

## Shot 16: Testing the Complete CI/CD Pipeline (Screen Recording)

**TEXT:** "Let's put our entire CI/CD pipeline to the test. I'll push a change to our staging branch, triggering the automated deployment workflow. We'll watch as GitHub Actions executes our workflow, building assets, running tests,
  and deploying to our staging environment. This demonstrates the complete automated process from code push to live deployment, showing the power and efficiency of professional CI/CD for WordPress."

## Shot 17: Rollback Strategies (Screen Recording with Terminal)

**TEXT:** "Even with thorough testing, occasionally you'll need to rollback a deployment. One advantage of Deployer's atomic deployment approach is that rollbacks are simple and immediate. Let's explore how to perform a rollback using
   Deployer's rollback command, which instantly reverts to the previous release without downtime. I'll also discuss strategies for database rollbacks, which require additional planning due to their stateful nature."

## Shot 18: Deployment Monitoring and Notifications (Screen Recording)

**TEXT:** "A professional deployment strategy includes monitoring and notifications to keep your team informed. Let's configure our GitHub Actions workflow to send notifications upon successful deployments or failures. We'll set up
  Slack notifications and email alerts, ensuring your team is always aware of deployment status and can respond quickly to any issues that arise."

## Shot 19: Conclusion and Next Steps (Wide Shot at Desk)

**TEXT:** "Congratulations! You now have a professional deployment strategy for WordPress using Deployer and GitHub Actions. This automated, zero-downtime approach ensures reliable, consistent deployments across environments while
  maintaining site availability and providing safety mechanisms like instant rollbacks. In our final module, we'll explore production-specific configurations and optimizations to complete your professional WordPress workflow. See
  you there!"

## Key Points for Memorization

### Traditional Deployment Problems:
- Manual FTP uploads prone to human error
- Inconsistency between environments
- Downtime during updates
- Difficult rollback process
- Version control challenges

### Zero-Downtime (Atomic) Deployment Benefits:
- Site remains available throughout updates
- Instant rollback capability
- Consistent deployment process
- Complete deployment or none at all
- Clear release history

### Deployer Key Features:
- PHP-based deployment tool
- Implements atomic deployments
- Integrates with Composer
- Supports multiple environments
- Customizable deployment tasks

### Deployer Setup Process:
- Install via Composer as dev dependency
- Create deploy.php configuration file
- Define hosts and deployment paths
- Configure shared resources
- Customize deployment tasks

### Deploy.php Configuration Components:
- Repository information
- Environment host definitions
- Shared files and directories
- Writable directories
- Deployment task sequence

### Critical Deployment Tasks:
- deploy:prepare (Create directory structure)
- deploy:update_code (Clone repository)
- deploy:vendors (Install dependencies)
- deploy:shared (Set up shared resources)
- deploy:symlink (Atomic switch)
- cleanup (Remove old releases)

### WordPress-Specific Shared Resources:
- Uploads directory
- .env configuration file
- .htaccess and web server configs
- Custom configuration files
- Logs and caches

### Server Connection Configuration:
- Hostname and SSH settings
- Remote user and authentication
- Deployment path definition
- Branch specification
- Environment-specific settings

### GitHub Actions Fundamentals:
- YAML configuration file format
- Workflow triggered by repository events
- Jobs and steps definition
- Environment and secret management
- Branch-specific execution

### GitHub Actions Workflow Components:
- Trigger definitions (on: push, etc.)
- Environment setup (PHP, Node.js, etc.)
- Authentication configuration
- Asset building steps
- Deployment execution

### Security in Automated Deployment:
- GitHub Secrets for sensitive data
- SSH key management
- Known hosts verification
- Composer authentication
- Limiting production deployment access

### Theme Asset Building in CI/CD:
- Node.js installation
- Dependency installation (npm/yarn)
- Running build scripts
- Handling multiple themes
- Optimizing build performance

### Rollback Strategies:
- Immediate code rollback with Deployer
- Database rollback considerations
- Backup creation before deployment
- Release tracking and management
- Emergency procedures

### Deployment Monitoring and Notifications:
- Slack integration for alerts
- Email notifications
- Status tracking in GitHub
- Logging deployment activities
- Error reporting and alerting