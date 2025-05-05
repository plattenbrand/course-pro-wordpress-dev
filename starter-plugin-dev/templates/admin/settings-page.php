<?php
/**
 * Admin settings page template
 *
 * @package PluginNamespace
 */

// Prevent direct file access
if (!defined('ABSPATH')) {
    exit;
}

// Get plugin settings
$plugin_settings = get_option('plugin_settings', []);
?>

<div class="wrap plugin-settings-wrap">
    <h1><?php echo esc_html(get_admin_page_title()); ?></h1>
    
    <div class="plugin-settings-tabs">
        <nav class="nav-tab-wrapper">
            <a href="#general-settings" class="nav-tab nav-tab-active"><?php esc_html_e('General Settings', 'plugin-name'); ?></a>
            <a href="#advanced-settings" class="nav-tab"><?php esc_html_e('Advanced Settings', 'plugin-name'); ?></a>
            <a href="#support" class="nav-tab"><?php esc_html_e('Support', 'plugin-name'); ?></a>
        </nav>
        
        <div class="tab-content">
            <div id="general-settings" class="tab-pane active">
                <form method="post" action="options.php">
                    <?php
                    settings_fields('plugin_settings');
                    do_settings_sections('plugin_settings');
                    submit_button();
                    ?>
                </form>
            </div>
            
            <div id="advanced-settings" class="tab-pane">
                <h2><?php esc_html_e('Advanced Settings', 'plugin-name'); ?></h2>
                <p><?php esc_html_e('Configure advanced settings for the plugin.', 'plugin-name'); ?></p>
                
                <!-- Add advanced settings form here -->
                <form method="post" action="options.php">
                    <table class="form-table">
                        <tr>
                            <th scope="row">
                                <label for="plugin_advanced_setting"><?php esc_html_e('Advanced Setting', 'plugin-name'); ?></label>
                            </th>
                            <td>
                                <input type="text" id="plugin_advanced_setting" name="plugin_advanced_settings[advanced_setting]" 
                                    value="<?php echo esc_attr(isset($plugin_settings['advanced_setting']) ? $plugin_settings['advanced_setting'] : ''); ?>" 
                                    class="regular-text">
                                <p class="description"><?php esc_html_e('Description of this advanced setting.', 'plugin-name'); ?></p>
                            </td>
                        </tr>
                    </table>
                    
                    <p class="submit">
                        <input type="submit" name="submit" id="submit" class="button button-primary" value="<?php esc_attr_e('Save Advanced Settings', 'plugin-name'); ?>">
                    </p>
                </form>
            </div>
            
            <div id="support" class="tab-pane">
                <h2><?php esc_html_e('Support', 'plugin-name'); ?></h2>
                <p><?php esc_html_e('If you need help with this plugin, here are some resources:', 'plugin-name'); ?></p>
                
                <ul>
                    <li>
                        <a href="https://example.com/docs" target="_blank">
                            <?php esc_html_e('Documentation', 'plugin-name'); ?>
                        </a>
                    </li>
                    <li>
                        <a href="https://example.com/support" target="_blank">
                            <?php esc_html_e('Support Forum', 'plugin-name'); ?>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:support@example.com">
                            <?php esc_html_e('Contact Support', 'plugin-name'); ?>
                        </a>
                    </li>
                </ul>
                
                <h3><?php esc_html_e('System Information', 'plugin-name'); ?></h3>
                <textarea readonly="readonly" class="system-info" style="width: 100%; height: 200px; font-family: monospace;">
WordPress Version: <?php echo esc_html(get_bloginfo('version')); ?>

Plugin Version: <?php echo esc_html(PLUGIN_VERSION); ?>

PHP Version: <?php echo esc_html(phpversion()); ?>

Server Software: <?php echo esc_html($_SERVER['SERVER_SOFTWARE']); ?>

User Agent: <?php echo esc_html($_SERVER['HTTP_USER_AGENT']); ?>
                </textarea>
            </div>
        </div>
    </div>
</div>

<script>
(function($) {
    // Tab navigation
    $('.plugin-settings-tabs .nav-tab').on('click', function(e) {
        e.preventDefault();
        
        // Get target tab
        var target = $(this).attr('href');
        
        // Remove active class from all tabs and add to clicked tab
        $('.plugin-settings-tabs .nav-tab').removeClass('nav-tab-active');
        $(this).addClass('nav-tab-active');
        
        // Hide all tab panes and show target pane
        $('.plugin-settings-tabs .tab-pane').removeClass('active');
        $(target).addClass('active');
    });
})(jQuery);
</script>

<style>
.plugin-settings-wrap {
    margin: 20px 0;
}

.plugin-settings-tabs .tab-content {
    margin-top: 20px;
}

.plugin-settings-tabs .tab-pane {
    display: none;
}

.plugin-settings-tabs .tab-pane.active {
    display: block;
}

.system-info {
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 10px;
}
</style>