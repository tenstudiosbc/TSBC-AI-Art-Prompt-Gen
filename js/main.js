// Main JavaScript - imports all modules
import { initializeVisibilityControls } from './visibility.js';
import { initializePromptGenerator } from './prompt-generator.js';
import { initializeClipboard } from './clipboard.js';
import { loadOptions } from './options.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadOptions();
    initializeVisibilityControls();
    initializePromptGenerator();
    initializeClipboard();
});