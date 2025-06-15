// Advanced functionality - random generation, export, etc.
import { optionsData } from './options.js';

export function initializeAdvanced() {
    initializeRandomGeneration();
    initializeExportFunctionality();
    initializeClearAll();
    initializeFavorites();
}

function initializeRandomGeneration() {
    const randomGenerateBtn = document.getElementById('random-generate');
    const randomFillBtn = document.getElementById('random-fill');
    
    if (randomGenerateBtn) {
        randomGenerateBtn.addEventListener('click', () => {
            randomFillAllFields();
            // Auto-generate after filling
            setTimeout(() => {
                const generateBtn = document.getElementById('generate-prompt');
                if (generateBtn) {
                    generateBtn.click();
                }
            }, 500);
        });
    }
    
    if (randomFillBtn) {
        randomFillBtn.addEventListener('click', randomFillAllFields);
    }
}

function randomFillAllFields() {
    Object.entries(optionsData).forEach(([key, options]) => {
        const sanitizedId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const selectElement = document.getElementById(sanitizedId);
        
        if (selectElement && options.length > 1) {
            // Skip empty first option, pick random from rest
            const nonEmptyOptions = options.filter(option => option !== '');
            if (nonEmptyOptions.length > 0) {
                const randomOption = nonEmptyOptions[Math.floor(Math.random() * nonEmptyOptions.length)];
                selectElement.value = randomOption;
                selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    });
    
    // Fill custom fields with random values
    const customPrefix = document.getElementById('custom-prefix');
    const customSuffix = document.getElementById('custom-suffix');
    const qualityTags = document.getElementById('quality-tags');
    const aspectRatio = document.getElementById('aspect-ratio');
    
    if (customPrefix && Math.random() > 0.7) {
        const prefixes = [
            'highly detailed', 'ultra realistic', 'award winning', 'masterpiece',
            'concept art', 'digital painting', 'trending on artstation'
        ];
        customPrefix.value = prefixes[Math.floor(Math.random() * prefixes.length)];
    }
    
    if (customSuffix && Math.random() > 0.7) {
        const suffixes = [
            'professional photography', 'studio lighting', 'high resolution',
            'cinematic composition', 'artistic masterpiece'
        ];
        customSuffix.value = suffixes[Math.floor(Math.random() * suffixes.length)];
    }
    
    if (qualityTags && Math.random() > 0.5) {
        const qualities = ['masterpiece, best quality', 'masterpiece, best quality, ultra detailed', 'masterpiece, best quality, ultra detailed, 4k, 8k'];
        qualityTags.value = qualities[Math.floor(Math.random() * qualities.length)];
    }
    
    if (aspectRatio && Math.random() > 0.6) {
        const ratios = ['1:1', '4:3', '16:9', '9:16', '3:4'];
        aspectRatio.value = ratios[Math.floor(Math.random() * ratios.length)];
    }
    
    if (window.showToast) {
        window.showToast('Random values generated!', 'success');
    }
    
    if (window.updateProgress) {
        window.updateProgress();
    }
}

function initializeExportFunctionality() {
    const exportJsonBtn = document.getElementById('export-json');
    
    if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', exportSettings);
    }
}

function exportSettings() {
    const formData = getAllFormData();
    const promptResult = document.getElementById('prompt-result');
    const negativeResult = document.getElementById('negative-result');
    
    const exportData = {
        metadata: {
            generator: 'TSBC AI Art Prompt Maker v2.0',
            timestamp: new Date().toISOString(),
            version: '2.0.2'
        },
        settings: formData,
        generated: {
            prompt: promptResult ? promptResult.textContent : '',
            negativePrompt: negativeResult ? negativeResult.textContent : '',
            characterCount: promptResult ? promptResult.textContent.length : 0
        }
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `tsbc-prompt-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (window.showToast) {
        window.showToast('Settings exported successfully!', 'success');
    }
}

function getAllFormData() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    const data = {};
    
    formElements.forEach(element => {
        if (element.id && element.value) {
            data[element.id] = element.value;
        }
    });
    
    return data;
}

function initializeClearAll() {
    const clearAllBtn = document.getElementById('clear-all');
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all fields? This action cannot be undone.')) {
                clearAllFields();
            }
        });
    }
}

function clearAllFields() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    
    formElements.forEach(element => {
        element.value = '';
        element.dispatchEvent(new Event('change', { bubbles: true }));
    });
    
    // Clear output
    const promptResult = document.getElementById('prompt-result');
    const negativeResult = document.getElementById('negative-result');
    
    if (promptResult) {
        promptResult.textContent = 'Your customized AI art prompt will appear here...';
    }
    
    if (negativeResult) {
        negativeResult.textContent = '';
        document.getElementById('negative-display').style.display = 'none';
    }
    
    if (window.showToast) {
        window.showToast('All fields cleared', 'info');
    }
    
    if (window.updateProgress) {
        window.updateProgress();
    }
}

function initializeFavorites() {
    const saveFavoriteBtn = document.getElementById('save-favorite');
    
    if (saveFavoriteBtn) {
        saveFavoriteBtn.addEventListener('click', saveFavorite);
    }
}

function saveFavorite() {
    const promptResult = document.getElementById('prompt-result');
    if (!promptResult || !promptResult.textContent || promptResult.textContent === 'Your customized AI art prompt will appear here...') {
        if (window.showToast) {
            window.showToast('Generate a prompt first before saving to favorites', 'warning');
        }
        return;
    }
    
    const formData = getAllFormData();
    const favorite = {
        id: Date.now(),
        name: `Favorite ${new Date().toLocaleDateString()}`,
        prompt: promptResult.textContent,
        settings: formData,
        timestamp: new Date().toISOString()
    };
    
    let favorites = [];
    try {
        const stored = localStorage.getItem('tsbc-favorites');
        if (stored) {
            favorites = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading favorites:', error);
    }
    
    favorites.unshift(favorite);
    
    // Limit favorites to 50 items
    if (favorites.length > 50) {
        favorites = favorites.slice(0, 50);
    }
    
    try {
        localStorage.setItem('tsbc-favorites', JSON.stringify(favorites));
        if (window.showToast) {
            window.showToast('Added to favorites!', 'success');
        }
    } catch (error) {
        console.error('Error saving favorite:', error);
        if (window.showToast) {
            window.showToast('Error saving favorite', 'error');
        }
    }
}
