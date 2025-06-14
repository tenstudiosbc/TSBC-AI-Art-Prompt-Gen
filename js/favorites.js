export function initializeFavorites() {
    loadFavoritesFromStorage();
    displayFavorites();
    
    const saveFavoriteBtn = document.getElementById('save-favorite');
    if (saveFavoriteBtn) {
        saveFavoriteBtn.addEventListener('click', saveFavorite);
    }
}

function saveFavorite() {
    const promptResult = document.getElementById('prompt-result');
    if (!promptResult || promptResult.textContent === 'Your customized AI art prompt will appear here...') {
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

    let favorites = getFavorites();
    favorites.unshift(favorite);
    saveFavoritesToStorage(favorites);
    displayFavorites();
    
    if (window.showToast) {
        window.showToast('Added to favorites!', 'success');
    }
}

function displayFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    if (!favoritesList) return;

    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-heart-broken"></i>
                <p>No favorites saved yet. Generate a prompt and click the heart icon to save it!</p>
            </div>
        `;
        return;
    }

    favoritesList.innerHTML = favorites.map(fav => `
        <div class="favorite-item" data-id="${fav.id}">
            <div class="favorite-header">
                <h4>${fav.name}</h4>
                <span class="favorite-date">${new Date(fav.timestamp).toLocaleDateString()}</span>
            </div>
            <div class="favorite-preview">${fav.prompt.substring(0, 100)}...</div>
            <div class="favorite-actions">
                <button onclick="window.loadFavorite(${fav.id})" class="action-btn">
                    <i class="fas fa-upload"></i> Load
                </button>
                <button onclick="window.deleteFavorite(${fav.id})" class="action-btn danger">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
}

window.loadFavorite = function(id) {
    const favorites = getFavorites();
    const favorite = favorites.find(f => f.id === id);
    
    if (favorite && favorite.settings) {
        Object.entries(favorite.settings).forEach(([fieldId, value]) => {
            const field = document.getElementById(fieldId);
            if (field && value) {
                field.value = value;
                field.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
        
        if (window.showToast) {
            window.showToast('Favorite loaded successfully!', 'success');
        }
    }
};

window.deleteFavorite = function(id) {
    let favorites = getFavorites();
    favorites = favorites.filter(f => f.id !== id);
    saveFavoritesToStorage(favorites);
    displayFavorites();
    
    if (window.showToast) {
        window.showToast('Favorite deleted', 'info');
    }
};

function getFavorites() {
    try {
        const stored = localStorage.getItem('tsbc-favorites');
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.error('Error loading favorites:', error);
        return [];
    }
}

function saveFavoritesToStorage(favorites) {
    try {
        localStorage.setItem('tsbc-favorites', JSON.stringify(favorites));
    } catch (error) {
        console.error('Error saving favorites:', error);
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
