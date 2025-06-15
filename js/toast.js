// Toast notification system
let toastTimeout = null;

export function initializeToast() {
    // Make showToast globally available
    window.showToast = showToast;
    
    // Test toast on load (optional)
    setTimeout(() => {
        showToast('Welcome to TSBC AI Art Image Prompt Generator 2.0.1', 'info');
    }, 1000);
}

export function showToast(message, type = 'success', duration = 3000) {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    // Clear existing timeout
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    // Set message and type
    toastMessage.textContent = message;
    
    // Remove existing type classes
    toast.classList.remove('success', 'error', 'warning', 'info');
    toast.classList.add(type);
    
    // Set appropriate icon
    const icon = toast.querySelector('i');
    if (icon) {
        icon.className = getToastIcon(type);
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Auto hide after duration
    toastTimeout = setTimeout(() => {
        hideToast();
    }, duration);
    
    // Allow manual dismiss by clicking
    toast.onclick = hideToast;
}

function hideToast() {
    const toast = document.getElementById('toast-notification');
    if (toast) {
        toast.classList.remove('show');
    }
    
    if (toastTimeout) {
        clearTimeout(toastTimeout);
        toastTimeout = null;
    }
}

function getToastIcon(type) {
    switch (type) {
        case 'success':
            return 'fas fa-check-circle';
        case 'error':
            return 'fas fa-exclamation-circle';
        case 'warning':
            return 'fas fa-exclamation-triangle';
        case 'info':
            return 'fas fa-info-circle';
        default:
            return 'fas fa-check-circle';
    }
}

// Add additional toast styles
const style = document.createElement('style');
style.textContent = `
    .toast.success {
        background: var(--success-color);
    }
    
    .toast.error {
        background: var(--danger-color);
    }
    
    .toast.warning {
        background: var(--warning-color);
    }
    
    .toast.info {
        background: var(--primary-color);
    }
    
    .toast {
        cursor: pointer;
        user-select: none;
    }
    
    .toast:hover {
        transform: translateX(-5px);
        box-shadow: var(--shadow-xl);
    }
`;
document.head.appendChild(style);
