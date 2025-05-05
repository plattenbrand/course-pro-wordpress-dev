<?php
/**
 * Frontend shortcode template
 *
 * @package PluginNamespace
 */

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

// Get shortcode attributes
$id = absint($atts['id']);
$option = sanitize_text_field($atts['option']);

// Get plugin settings
$settings = get_option('plugin_settings', []);
?>

<div id="plugin-shortcode-container-<?php echo esc_attr($id); ?>" class="plugin-shortcode-container" data-id="<?php echo esc_attr($id); ?>">
    <div class="plugin-shortcode-header">
        <h2 class="plugin-shortcode-title"><?php esc_html_e('Plugin Shortcode Output', 'plugin-name'); ?></h2>
        <?php if (!empty($option)) : ?>
            <div class="plugin-shortcode-option">
                <?php echo esc_html(sprintf(__('Option: %s', 'plugin-name'), $option)); ?>
            </div>
        <?php endif; ?>
    </div>
    
    <div class="plugin-shortcode-content">
        <?php
        // Example content
        if ($id > 0) {
            // You could fetch a post or custom post type by ID
            $post = get_post($id);
            if ($post) {
                echo '<div class="plugin-shortcode-post">';
                echo '<h3>' . esc_html($post->post_title) . '</h3>';
                echo '<div class="plugin-shortcode-excerpt">';
                echo wp_kses_post(get_the_excerpt($post));
                echo '</div>';
                echo '<a href="' . esc_url(get_permalink($post)) . '" class="plugin-shortcode-link">';
                esc_html_e('Read More', 'plugin-name');
                echo '</a>';
                echo '</div>';
            } else {
                echo '<p class="plugin-shortcode-error">';
                esc_html_e('No content found with the specified ID.', 'plugin-name');
                echo '</p>';
            }
        } else {
            // Default content when no ID is provided
            echo '<div class="plugin-shortcode-default">';
            echo '<p>' . esc_html__('This is the default content for the plugin shortcode.', 'plugin-name') . '</p>';
            echo '<p>' . esc_html__('Customize this template to display your plugin content.', 'plugin-name') . '</p>';
            echo '</div>';
        }
        ?>
    </div>
    
    <div class="plugin-shortcode-footer">
        <?php
        // You can add pagination, additional controls, or other elements here
        ?>
        <div class="plugin-shortcode-info">
            <span class="plugin-shortcode-version">
                <?php echo esc_html(sprintf(__('Plugin Version: %s', 'plugin-name'), PLUGIN_VERSION)); ?>
            </span>
        </div>
    </div>
</div>

<!-- Data for JavaScript -->
<script type="text/javascript">
    // Optional: Add data for the JavaScript frontend to use
    window.pluginShortcodeData = window.pluginShortcodeData || {};
    window.pluginShortcodeData[<?php echo esc_js($id); ?>] = {
        id: <?php echo esc_js($id); ?>,
        option: <?php echo wp_json_encode($option); ?>,
        // Add any additional data your JavaScript might need
    };
</script>