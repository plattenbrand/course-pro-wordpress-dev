<?php
namespace PluginNamespace;

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Activator Class
 * 
 * Handles activation hooks and initialization
 */
class Activator
{
    /**
     * Plugin activation
     * 
     * Creates necessary database tables and sets default options
     */
    public static function activate()
    {
        // Create tables if needed
        self::create_tables();
        
        // Set default options if they don't exist
        self::set_default_options();
    }
    
    /**
     * Create database tables
     */
    private static function create_tables()
    {
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();
        
        // Example table creation
        // $table_name = $wpdb->prefix . 'plugin_table';
        // 
        // $sql = "CREATE TABLE $table_name (
        //     id mediumint(9) NOT NULL AUTO_INCREMENT,
        //     time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
        //     name tinytext NOT NULL,
        //     text text NOT NULL,
        //     PRIMARY KEY  (id)
        // ) $charset_collate;";
        // 
        // require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        // dbDelta($sql);
    }
    
    /**
     * Set default options
     */
    private static function set_default_options()
    {
        // Only set default options if they don't exist
        if (get_option('plugin_settings') === false) {
            $default_settings = [
                'setting_1' => 'default_value_1',
                'setting_2' => 'default_value_2'
            ];
            
            update_option('plugin_settings', $default_settings);
        }
        
        // Store initial version for future update reference
        if (get_option('plugin_version') === false) {
            update_option('plugin_version', PLUGIN_VERSION);
        }
    }
}