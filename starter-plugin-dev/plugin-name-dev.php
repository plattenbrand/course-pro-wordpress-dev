<?php
/**
 * Plugin Name: Plugin Name - dev
 * Plugin URI: https://your-website.com/plugin-uri
 * Description: A descriptive summary of what this plugin does.
 * Version: 1.0.0-dev
 * Author: Your Name
 * Author URI: https://your-website.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: plugin-name
 * Domain Path: /languages
 * Requires PHP: 7.4
 */

namespace PluginNamespace;

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

// Plugin constants
define('PLUGIN_VERSION', '1.0.0-dev');
define('PLUGIN_DIR', plugin_dir_path(__FILE__));
define('PLUGIN_URL', plugin_dir_url(__FILE__));
define('PLUGIN_FILE', __FILE__);

// Debug log
if (WP_DEBUG) {
    error_log('Plugin directory: ' . PLUGIN_DIR);
}

// Manual class loading
$class_files = [
    'Admin' => PLUGIN_DIR . 'includes/Admin.php',
    'Frontend' => PLUGIN_DIR . 'includes/Frontend.php',
    'Activator' => PLUGIN_DIR . 'includes/Activator.php',
    'Updater' => PLUGIN_DIR . 'includes/Updater.php',
];

// Load each class file if it exists
foreach ($class_files as $class => $file) {
    if (file_exists($file)) {
        require_once $file;
        if (WP_DEBUG) {
            error_log('Loaded class file: ' . $file);
        }
    } else {
        if (WP_DEBUG) {
            error_log('Class file not found: ' . $file);
        }
    }
}

// Composer autoloader if needed
if (file_exists(dirname(__FILE__) . '/vendor/autoload.php')) {
    require_once dirname(__FILE__) . '/vendor/autoload.php';
}

/**
 * Main Plugin Class
 */
class Plugin
{
    private static $instance = null;

    /**
     * Get the singleton instance
     */
    public static function get_instance()
    {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * Constructor
     */
    private function __construct()
    {
        // Register hooks
        add_action('plugins_loaded', [$this, 'init']);
        add_action('init', [$this, 'register_assets']);
        register_activation_hook(PLUGIN_FILE, [$this, 'activate']);
        register_deactivation_hook(PLUGIN_FILE, [$this, 'deactivate']);
        add_filter('plugin_action_links_' . plugin_basename(PLUGIN_FILE), [$this, 'add_settings_link']);
    }

    /**
     * Initialize the plugin
     */
    public function init()
    {
        // Load text domain for translations
        load_plugin_textdomain('plugin-name', false, dirname(plugin_basename(PLUGIN_FILE)) . '/languages');

        // Initialize admin and frontend classes
        if (class_exists('PluginNamespace\\Admin')) {
            new Admin();
        }

        if (class_exists('PluginNamespace\\Frontend')) {
            new Frontend();
        }

        // Check for updates
        $this->check_updates();
    }

    /**
     * Plugin activation
     */
    public function activate()
    {
        // Check minimum PHP version
        if (version_compare(PHP_VERSION, '7.4', '<')) {
            wp_die(
                esc_html__('This plugin requires PHP 7.4 or higher.', 'plugin-name'),
                'Plugin Activation Error',
                ['back_link' => true]
            );
        }

        // Run activation tasks
        if (class_exists('PluginNamespace\\Activator')) {
            Activator::activate();
        }

        flush_rewrite_rules();
    }

    /**
     * Plugin deactivation
     */
    public function deactivate()
    {
        flush_rewrite_rules();
    }

    /**
     * Version update checks
     */
    public function check_updates()
    {
        $current_version = get_option('plugin_version', '0');
        if (version_compare($current_version, PLUGIN_VERSION, '<')) {
            if (class_exists('PluginNamespace\\Updater')) {
                Updater::update($current_version, PLUGIN_VERSION);
            }
            update_option('plugin_version', PLUGIN_VERSION);
        }
    }

    /**
     * Register scripts and styles
     */
    public function register_assets()
    {
        // Admin scripts and styles
        if (is_admin()) {
            wp_register_script(
                'plugin-admin',
                PLUGIN_URL . 'dist/js/admin/admin.js',
                ['jquery'],
                PLUGIN_VERSION,
                true
            );

            wp_register_style(
                'plugin-admin',
                PLUGIN_URL . 'dist/css/admin/style.css',
                [],
                PLUGIN_VERSION
            );
        }
        
        // Frontend scripts and styles
        wp_register_script(
            'plugin-frontend',
            PLUGIN_URL . 'dist/js/frontend/frontend.js',
            ['jquery'],
            PLUGIN_VERSION,
            true
        );

        wp_register_style(
            'plugin-frontend',
            PLUGIN_URL . 'dist/css/frontend/style.css',
            [],
            PLUGIN_VERSION
        );
    }

    /**
     * Add settings link to plugin listing
     */
    public function add_settings_link($links)
    {
        $settings_link = sprintf(
            '<a href="%s">%s</a>',
            admin_url('options-general.php?page=plugin-settings'),
            esc_html__('Settings', 'plugin-name')
        );
        array_unshift($links, $settings_link);
        return $links;
    }
}

// Initialize plugin
Plugin::get_instance();