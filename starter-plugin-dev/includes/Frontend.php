<?php
namespace PluginNamespace;

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Frontend Class
 * 
 * Handles all frontend functionality, shortcodes, etc.
 */
class Frontend
{
    /**
     * Constructor
     */
    public function __construct()
    {
        // Frontend hooks
        add_action('wp_enqueue_scripts', [$this, 'enqueue_frontend_assets']);
        add_shortcode('plugin_shortcode', [$this, 'render_shortcode']);
    }

    /**
     * Enqueue frontend assets
     */
    public function enqueue_frontend_assets()
    {
        // Only enqueue when needed (optional)
        if (!is_singular() || !has_shortcode(get_post()->post_content, 'plugin_shortcode')) {
            return;
        }

        // Enqueue scripts
        wp_enqueue_script('plugin-frontend');
        
        // Enqueue styles
        wp_enqueue_style('plugin-frontend');
        
        // Localize script
        wp_localize_script('plugin-frontend', 'pluginFrontendData', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('plugin_frontend_nonce')
        ]);
    }

    /**
     * Render shortcode
     */
    public function render_shortcode($atts)
    {
        // Parse shortcode attributes
        $atts = shortcode_atts([
            'id' => 0,
            'option' => ''
        ], $atts);
        
        // Get settings
        $settings = get_option('plugin_settings', []);
        
        // Start output buffering
        ob_start();
        
        // Include template
        require PLUGIN_DIR . 'templates/frontend/shortcode-template.php';
        
        // Return buffered content
        return ob_get_clean();
    }
}