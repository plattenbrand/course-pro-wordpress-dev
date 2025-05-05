/**
 * Admin functionality
 */

import '../../scss/admin/style.scss';
import { PluginAdminData, PluginSettings } from '../types';

class PluginAdmin {
  private data: PluginAdminData;
  private settings: PluginSettings;
  private mediaUploader: any = null;
  
  /**
   * Constructor
   */
  constructor() {
    // Get admin data
    this.data = window.pluginAdminData || {
      ajaxUrl: '',
      nonce: ''
    };
    
    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', () => this.init());
  }
  
  /**
   * Initialize admin functionality
   */
  private init(): void {
    // Initialize tab navigation
    this.initTabs();
    
    // Initialize media uploader
    this.initMediaUploader();
    
    console.log('Plugin admin initialized');
  }
  
  /**
   * Initialize tab navigation
   */
  private initTabs(): void {
    const tabs = document.querySelectorAll('.nav-tab');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target tab
        const targetId = (tab as HTMLAnchorElement).getAttribute('href');
        if (!targetId) return;
        
        // Remove active class from all tabs and add to clicked tab
        tabs.forEach(t => t.classList.remove('nav-tab-active'));
        tab.classList.add('nav-tab-active');
        
        // Hide all tab panes and show target pane
        const tabPanes = document.querySelectorAll('.tab-pane');
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        const targetPane = document.querySelector(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  }
  
  /**
   * Initialize media uploader
   */
  private initMediaUploader(): void {
    // Check if WordPress media uploader is available
    if (typeof wp === 'undefined' || !wp.media) {
      return;
    }
    
    // Get all media upload buttons
    const uploadButtons = document.querySelectorAll('.media-upload-button');
    
    uploadButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const target = e.currentTarget as HTMLElement;
        const fieldId = target.dataset.target;
        
        if (!fieldId) return;
        
        // Create media uploader instance
        this.mediaUploader = wp.media({
          title: 'Select or Upload Media',
          button: {
            text: 'Use this media'
          },
          multiple: false
        });
        
        // When media is selected
        this.mediaUploader.on('select', () => {
          const attachment = this.mediaUploader.state().get('selection').first().toJSON();
          
          // Set field value
          const field = document.getElementById(fieldId) as HTMLInputElement;
          if (field) {
            field.value = attachment.id;
          }
          
          // Update preview
          const preview = document.querySelector(`#${fieldId}-preview`) as HTMLImageElement;
          if (preview) {
            preview.src = attachment.url;
            preview.style.display = 'block';
          }
        });
        
        // Open media uploader
        this.mediaUploader.open();
      });
    });
    
    // Handle remove buttons
    const removeButtons = document.querySelectorAll('.media-remove-button');
    
    removeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const target = e.currentTarget as HTMLElement;
        const fieldId = target.dataset.target;
        
        if (!fieldId) return;
        
        // Clear field value
        const field = document.getElementById(fieldId) as HTMLInputElement;
        if (field) {
          field.value = '';
        }
        
        // Clear preview
        const preview = document.querySelector(`#${fieldId}-preview`) as HTMLImageElement;
        if (preview) {
          preview.src = '';
          preview.style.display = 'none';
        }
      });
    });
  }
}

// Initialize admin
new PluginAdmin();
