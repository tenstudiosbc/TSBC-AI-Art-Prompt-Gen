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
    
    // Load core functionality
    loadOptions();
    initializeVisibilityControls();
    initializePromptGenerator();
    initializeClipboard();
    
    // Initialize new features
    initializeTabs();
    initializeTemplates();
    initializeHistory();
    initializeProgress();
    initializeToast();
    initializeAdvanced();
    
    console.log('✨ Application initialized successfully!');
    
    // Show welcome animation
    showWelcomeAnimation();
});

function showWelcomeAnimation() {
    const hero = document.querySelector('.hero-header');
    if (hero) {
        hero.style.transform = 'translateY(-20px)';
        hero.style.opacity = '0';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            hero.style.transform = 'translateY(0)';
            hero.style.opacity = '1';
        }, 100);
    }
}
