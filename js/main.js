// Main JavaScript - imports all modules
import { loadOptions } from './options.js';
import { initializeVisibilityControls } from './visibility.js';
import { initializeTemplates } from './templates.js';
import { initializeHistory } from './history.js';
import { initializeFavorites } from './favorites.js';
import { initializePromptGenerator } from './prompt-generator.js';
import { initializeAdvanced } from './advanced.js';

// Initialize tab navigation
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const activeContent = document.getElementById(`${tabId}-tab`);
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });
}

// Toast notification system
window.showToast = function(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    // Clear existing timeout
    if (window.toastTimeout) {
        clearTimeout(window.toastTimeout);
        toast.classList.remove('show');
    }
    
    toast.className = `toast ${type}`;
    toastMessage.textContent = message;
    
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });
    
    window.toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
};

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 TSBC AI Art Prompt Maker v2.0.0 - Initializing...');
    
    // Initialize core features
    loadOptions();
    initializeVisibilityControls();
    initializePromptGenerator();
    initializeTemplates();
    initializeHistory();
    initializeFavorites();
    initializeAdvanced();
    initializeTabs();
    
    console.log('✨ Application initialized successfully!');
    
    // Show welcome message after slight delay
    setTimeout(() => {
        window.showToast('Welcome to TSBC AI Art Prompt Maker v2.0!', 'info', 3000);
    }, 1000);
});
