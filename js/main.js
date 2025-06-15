// Main JavaScript - imports all modules
import { initializeVisibilityControls } from './visibility.js';
import { initializePromptGenerator } from './prompt-generator.js';
import { initializeClipboard } from './clipboard.js';
import { loadOptions } from './options.js';

// New imports for enhanced functionality
import { initializeTabs } from './tabs.js';
import { initializeTemplates } from './templates.js';
import { initializeHistory } from './history.js';
import { initializeProgress } from './progress.js';
import { initializeToast } from './toast.js';
import { initializeAdvanced } from './advanced.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 TSBC AI Art Prompt Maker v2.0.0 - Initializing...');
    
    // Cache frequently accessed DOM elements
    const domElements = {
        hero: document.querySelector('.hero-header'),
        form: document.querySelector('.form-container'),
        output: document.querySelector('.output-container'),
        panels: {
            templates: document.getElementById('templates-panel'),
            history: document.getElementById('history-panel'),
            settings: document.getElementById('settings-panel')
        }
    };
    
    // Load core functionality with cached elements
    loadOptions();
    initializeVisibilityControls();
    initializePromptGenerator();
    initializeClipboard();
    
    // Initialize new features with cached elements
    initializeTabs();
    initializeTemplates(domElements.panels.templates);
    initializeHistory(domElements.panels.history);
    initializeProgress();
    initializeToast();
    initializeAdvanced();
    
    console.log('✨ Application initialized successfully!');
    
    // Show welcome animation using cached element
    showWelcomeAnimation(domElements.hero);
});

// Debounce utility function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize welcome animation
function showWelcomeAnimation(hero) {
    if (!hero) return;
    
    requestAnimationFrame(() => {
        hero.style.transform = 'translateY(-20px)';
        hero.style.opacity = '0';
        
        requestAnimationFrame(() => {
            hero.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            hero.style.transform = 'translateY(0)';
            hero.style.opacity = '1';
        });
    });
}
