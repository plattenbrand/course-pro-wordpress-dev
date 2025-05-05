<?php
namespace PluginNamespace;

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Updater Class
 * 
 * Handles plugin version updates and migrations
 */
class Updater
{
    /**
     * Current database schema version
     */
    const SCHEMA_VERSION = '1.0.0';
    
    /**
     * Update plugin to new version
     * 
     * @param string $old_version The previous version of the plugin
     * @param string $new_version The new version of the plugin
     * @return bool True if update was successful
     */
    public static function update($old_version, $new_version)
    {
        // Log the update attempt
        if (WP_DEBUG) {
            error_log(sprintf('Updating plugin from %s to %s', $old_version, $new_version));
        }
        
        // Run updates based on versions
        if (version_compare($old_version, '1.0.0', '<')) {
            self::update_to_1_0_0();
        }
        
        if (version_compare($old_version, '1.1.0', '<') && version_compare($new_version, '1.1.0', '>=')) {
            self::update_to_1_1_0();
        }
        
        // Add more version-specific update methods as needed
        
        // Maybe update database schema
        self::maybe_update_db_schema();
        
        // Update successful
        return true;
    }
    
    /**
     * Update to version 1.0.0
     */
    private static function update_to_1_0_0()
    {
        // Initial setup, nothing to migrate
        // This would normally handle the first proper release
        update_option('plugin_db_version', '1.0.0');
    }
    
    /**
     * Update to version 1.1.0
     */
    private static function update_to_1_1_0()
    {
        // Sample update for 1.1.0
        // Here you'd run any database migrations needed for 1.1.0
        
        // Example: Update existing settings to new format
        $settings = get_option('plugin_settings', []);
        
        // Example of migrating a setting
        if (isset($settings['old_setting'])) {
            $settings['new_setting'] = $settings['old_setting'];
            unset($settings['old_setting']);
            update_option('plugin_settings', $settings);
        }
        
        // Update DB version
        update_option('plugin_db_version', '1.1.0');
    }
    
    /**
     * Check and update database schema if needed
     */
    private static function maybe_update_db_schema()
    {
        $db_version = get_option('plugin_db_version', '0');
        
        // Skip if already at current version
        if (version_compare($db_version, self::SCHEMA_VERSION, '>=')) {
            return;
        }
        
        // Otherwise, run the database update
        global $wpdb;
        $charset_collate = $wpdb->get_charset_collate();
        
        // Example: Update existing table or create new one
        // $table_name = $wpdb->prefix . 'plugin_table';
        // 
        // $sql = "CREATE TABLE $table_name (
        //     id mediumint(9) NOT NULL AUTO_INCREMENT,
        //     time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
        //     name tinytext NOT NULL,
        //     text text NOT NULL,
        //     url varchar(100) DEFAULT '' NOT NULL,
        //     PRIMARY KEY  (id)
        // ) $charset_collate;";
        // 
        // require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        // dbDelta($sql);
        
        // Update the database version
        update_option('plugin_db_version', self::SCHEMA_VERSION);
    }
}