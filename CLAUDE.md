# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose
This repository contains scripts and materials for creating a video course on Professional WordPress Development. The primary purpose is educational content creation, with code examples for demonstration.

## Project Structure
- Course overview in "Professional WordPress Development - overview.md"
- Each module has a corresponding script file (Shot List & Script.md)
- Code examples will be created to demonstrate concepts from each module

## Script Editing Guidelines
- Maintain format with shot numbers, camera directions, and speaking text
- Preserve "Key Points for Memorization" sections
- Ensure technical accuracy in WordPress development concepts

## WordPress Development Standards (for demonstrations)
- Follow WordPress Coding Standards
- Use modern architecture with Bedrock directory structure
- Manage dependencies with Composer
  - `composer install` - Install dependencies
  - `composer require <package>` - Add new dependency
  - `composer update` - Update dependencies
- Theme development with Sage 11
  - `npm run build` - Build assets for production
  - `npm run dev` - Start development server with HMR
  - `npm run lint` - Run linting tools
- Use environment-specific configuration with .env files
- Follow GitFlow for version control
- Implement proper deployment strategies with Deployer

## Code Demo Guidelines
- Write clear, educational code with explanatory comments
- Follow PSR-4 for PHP autoloading and namespacing
- Use Blade templating for theme development
- Organize SCSS using component-based architecture
- Implement proper error handling and security practices
- Create practical examples that match script descriptions
- Focus on progressive education from basic to advanced concepts

## Useful References
- WordPress Coding Standards: https://developer.wordpress.org/coding-standards/
- Bedrock Documentation: https://roots.io/bedrock/docs/
- Sage Theme Documentation: https://roots.io/sage/docs/