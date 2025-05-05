<?php
namespace PluginNamespace;

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin Class
 * 
 * Handles all admin functionality, settings pages, metaboxes, etc.
 */
class Admin
{
    /**
     * Constructor
     */
    public function __construct()
    {
        // Admin hooks
        add_action('admin_menu', [$this, 'add_menu_pages']);
        add_action('admin_init', [$this, 'register_settings']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_scripts']);
    }

    /**
     * Register admin scripts and styles
     */
    public function enqueue_admin_scripts($hook)
    {
        // Only load on plugin admin pages
        if (strpos($hook, 'plugin-settings') === false) {
            return;
        }

        wp_enqueue_script('plugin-admin');
        wp_enqueue_style('plugin-admin');
        
        // Add localized data for JavaScript
        wp_localize_script('plugin-admin', 'pluginAdminData', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('plugin_admin_nonce')
        ]);
    }

    /**
     * Register plugin settings
     */
    public function register_settings()
    {
        register_setting(
            'plugin_settings',
            'plugin_settings',
            [
                'type' => 'array',
                'sanitize_callback' => [$this, 'sanitize_settings'],
                'default' => [
                    'setting_1' => '',
                    'setting_2' => ''
                ]
            ]
        );

        // Add settings section
        add_settings_section(
            'plugin_general_section',
            __('General Settings', 'plugin-name'),
            function () {
                echo '<p>' . __('Configure the general settings for the plugin.', 'plugin-name') . '</p>';
            },
            'plugin_settings'
        );
        
        // Add settings field
        add_settings_field(
            'setting_1',
            __('Setting 1', 'plugin-name'),
            function () {
                $options = get_option('plugin_settings', []);
                $value = isset($options['setting_1']) ? $options['setting_1'] : '';
                ?>
                <input type="text" name="plugin_settings[setting_1]" value="<?php echo esc_attr($value); ?>" class="regular-text">
                <?php
            },
            'plugin_settings',
            'plugin_general_section'
        );
    }

    /**
     * Sanitize settings
     */
    public function sanitize_settings($settings)
    {
        if (!is_array($settings)) {
            return [];
        }

        $sanitized = [];

        if (isset($settings['setting_1'])) {
            $sanitized['setting_1'] = sanitize_text_field($settings['setting_1']);
        }

        if (isset($settings['setting_2'])) {
            $sanitized['setting_2'] = sanitize_text_field($settings['setting_2']);
        }

        return $sanitized;
    }

    /**
     * Add admin menu pages
     */
    public function add_menu_pages()
    {
        add_options_page(
            __('Plugin Settings', 'plugin-name'),
            __('Plugin Settings', 'plugin-name'),
            'manage_options',
            'plugin-settings',
            [$this, 'render_settings_page']
        );
    }

    /**
     * Render settings page
     */
    public function render_settings_page()
    {
        require_once PLUGIN_DIR . 'templates/admin/settings-page.php';
    }
}