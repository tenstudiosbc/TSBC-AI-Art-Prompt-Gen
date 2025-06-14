// History management for generated prompts
let promptHistory = [];
const MAX_HISTORY_ITEMS = 20;

export function initializeHistory() {
    loadHistoryFromStorage();
    
    const historyBtn = document.getElementById('history-btn');
    if (historyBtn) {
        historyBtn.addEventListener('click', toggleHistoryPanel);
    }
    
    populateHistoryList();
    
    // Make addToHistory globally available
    window.addToHistory = addToHistory;
}

export function addToHistory(prompt, settings = {}) {
    const historyItem = {
        id: Date.now(),
        prompt: prompt,
        settings: settings,
        timestamp: new Date().toISOString(),
        preview: prompt.substring(0, 100) + (prompt.length > 100 ? '...' : '')
    };
    
    // Remove duplicates
    promptHistory = promptHistory.filter(item => item.prompt !== prompt);
    
    // Add to beginning
    promptHistory.unshift(historyItem);
    
    // Limit history size
    if (promptHistory.length > MAX_HISTORY_ITEMS) {
        promptHistory = promptHistory.slice(0, MAX_HISTORY_ITEMS);
    }
    
    saveHistoryToStorage();
    populateHistoryList();
}

function toggleHistoryPanel() {
    const historyPanel = document.getElementById('history-panel');
    const templatesPanel = document.getElementById('templates-panel');
    
    // Hide templates panel if open
    if (templatesPanel) {
        templatesPanel.style.display = 'none';
    }
    
    if (historyPanel) {
        const isVisible = historyPanel.style.display !== 'none';
        historyPanel.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            historyPanel.style.opacity = '0';
            historyPanel.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                historyPanel.style.transition = 'all 0.3s ease';
                historyPanel.style.opacity = '1';
                historyPanel.style.transform = 'translateY(0)';
            }, 50);
        }
    }
}

function populateHistoryList() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    
    historyList.innerHTML = '';
    
    if (promptHistory.length === 0) {
        historyList.innerHTML = `
            <div class="history-item" style="text-align: center; opacity: 0.6;">
                <i class="fas fa-history" style="font-size: 2rem; margin-bottom: 1rem; display: block;"></i>
                No prompts generated yet. Create your first prompt to see it here!
            </div>
        `;
        return;
    }
    
    promptHistory.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        const date = new Date(item.timestamp).toLocaleDateString();
        const time = new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        historyItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <span style="font-weight: 500; color: var(--text-primary);">Generated Prompt</span>
                <span style="font-size: 0.75rem; color: var(--text-muted);">${date} ${time}</span>
            </div>
            <div style="color: var(--text-secondary); line-height: 1.4;">${item.preview}</div>
            <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem;">
                <button class="history-action-btn" onclick="loadHistoryItem(${item.id})">
                    <i class="fas fa-upload"></i> Load
                </button>
                <button class="history-action-btn" onclick="copyHistoryItem(${item.id})">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="history-action-btn danger" onclick="deleteHistoryItem(${item.id})">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
        
        historyList.appendChild(historyItem);
    });
}

// Global functions for history actions
window.loadHistoryItem = function(id) {
    const item = promptHistory.find(h => h.id === id);
    if (item && item.settings) {
        // Load settings into form
        Object.entries(item.settings).forEach(([fieldId, value]) => {
            const field = document.getElementById(fieldId);
            if (field && value) {
                field.value = value;
                field.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        
        // Display the prompt
        const promptResult = document.getElementById('prompt-result');
        if (promptResult) {
            promptResult.textContent = item.prompt;
            updateCharacterCount(item.prompt);
        }
        
        if (window.showToast) {
            window.showToast('Prompt loaded from history', 'success');
        }
        
        // Hide history panel
        const historyPanel = document.getElementById('history-panel');
        if (historyPanel) {
            historyPanel.style.display = 'none';
        }
    }
};

window.copyHistoryItem = function(id) {
    const item = promptHistory.find(h => h.id === id);
    if (item) {
        navigator.clipboard.writeText(item.prompt).then(() => {
            if (window.showToast) {
                window.showToast('Prompt copied to clipboard', 'success');
            }
        });
    }
};

window.deleteHistoryItem = function(id) {
    promptHistory = promptHistory.filter(h => h.id !== id);
    saveHistoryToStorage();
    populateHistoryList();
    
    if (window.showToast) {
        window.showToast('History item deleted', 'info');
    }
};

function loadHistoryFromStorage() {
    try {
        const stored = localStorage.getItem('tsbc-prompt-history');
        if (stored) {
            promptHistory = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading history:', error);
        promptHistory = [];
    }
}

function saveHistoryToStorage() {
    try {
        localStorage.setItem('tsbc-prompt-history', JSON.stringify(promptHistory));
    } catch (error) {
        console.error('Error saving history:', error);
    }
}

function updateCharacterCount(text) {
    const charCount = document.getElementById('char-count');
    if (charCount) {
        charCount.textContent = `${text.length} characters`;
    }
}

// Add CSS for history action buttons
const style = document.createElement('style');
style.textContent = `
    .history-action-btn {
        background: var(--bg-glass);
        border: 1px solid var(--border-primary);
        color: var(--text-muted);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius-sm);
        font-size: 0.75rem;
        cursor: pointer;
        transition: all var(--transition-fast);
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }
    
    .history-action-btn:hover {
        background: var(--bg-card);
        color: var(--text-primary);
        border-color: var(--primary-color);
    }
    
    .history-action-btn.danger:hover {
        background: rgba(239, 68, 68, 0.1);
        color: var(--danger-color);
        border-color: var(--danger-color);
    }
`;
document.head.appendChild(style);
