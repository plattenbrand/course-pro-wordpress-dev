/**
 * Type definitions for the plugin
 */

// Plugin Settings
export interface PluginSettings {
  setting_1: string;
  setting_2: string;
  [key: string]: any;
}

// Plugin Admin Data
export interface PluginAdminData {
  ajaxUrl: string;
  nonce: string;
}

// Plugin Frontend Data
export interface PluginFrontendData {
  ajaxUrl: string;
  nonce: string;
}

// Plugin Shortcode Instance Data
export interface PluginShortcodeData {
  id: number;
  option: string;
  [key: string]: any;
}

// Declare global window properties
declare global {
  interface Window {
    pluginAdminData?: PluginAdminData;
    pluginFrontendData?: PluginFrontendData;
    pluginShortcodeData?: {
      [id: number]: PluginShortcodeData
    };
  }
}
