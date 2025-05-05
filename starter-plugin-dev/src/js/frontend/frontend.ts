/**
 * Frontend functionality
 */

import '../../scss/frontend/style.scss';
import { PluginFrontendData, PluginShortcodeData } from '../types';

class PluginFrontend {
  private data: PluginFrontendData;
  private shortcodeInstances: Map<number, PluginShortcodeInstance> = new Map();
  
  /**
   * Constructor
   */
  constructor() {
    // Get frontend data
    this.data = window.pluginFrontendData || {
      ajaxUrl: '',
      nonce: ''
    };
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => this.init());
  }
  
  /**
   * Initialize frontend functionality
   */
  private init(): void {
    // Initialize shortcode instances
    this.initShortcodeInstances();
    
    console.log('Plugin frontend initialized');
  }
  
  /**
   * Initialize shortcode instances
   */
  private initShortcodeInstances(): void {
    // Get all shortcode containers
    const containers = document.querySelectorAll('.plugin-shortcode-container');
    
    // Initialize each container
    containers.forEach(container => {
      const id = parseInt(container.getAttribute('data-id') || '0', 10);
      
      if (id && window.pluginShortcodeData && window.pluginShortcodeData[id]) {
        const instance = new PluginShortcodeInstance(container as HTMLElement, window.pluginShortcodeData[id]);
        this.shortcodeInstances.set(id, instance);
      }
    });
  }
}

/**
 * Shortcode instance class
 */
class PluginShortcodeInstance {
  private container: HTMLElement;
  private data: PluginShortcodeData;
  
  /**
   * Constructor
   */
  constructor(container: HTMLElement, data: PluginShortcodeData) {
    this.container = container;
    this.data = data;
    
    this.init();
  }
  
  /**
   * Initialize shortcode instance
   */
  private init(): void {
    // Add event listeners
    this.addEventListeners();
    
    console.log(`Shortcode instance initialized with ID: ${this.data.id}`);
  }
  
  /**
   * Add event listeners
   */
  private addEventListeners(): void {
    // Example: Add click handler to "Read More" links
    const readMoreLinks = this.container.querySelectorAll('.plugin-shortcode-link');
    
    readMoreLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Example: track analytics
        console.log(`Link clicked in shortcode ${this.data.id}`);
      });
    });
  }
  
  /**
   * Example method to load additional content via AJAX
   */
  private loadAdditionalContent(): void {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', window.pluginFrontendData?.ajaxUrl || '');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          
          if (response.success && response.data) {
            // Update content
            const contentDiv = this.container.querySelector('.plugin-shortcode-content');
            if (contentDiv) {
              contentDiv.innerHTML = response.data.html;
            }
          }
        } catch (e) {
          console.error('Error parsing AJAX response:', e);
        }
      }
    };
    
    xhr.onerror = () => {
      console.error('AJAX request failed');
    };
    
    // Prepare data
    const data = `action=plugin_load_content&nonce=${window.pluginFrontendData?.nonce || ''}&id=${this.data.id}`;
    
    // Send request
    xhr.send(data);
  }
}

// Initialize frontend
new PluginFrontend();
