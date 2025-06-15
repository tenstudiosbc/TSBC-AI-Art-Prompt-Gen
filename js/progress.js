// Progress tracking for form completion
export function initializeProgress() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    
    formElements.forEach(element => {
        element.addEventListener('change', updateProgress);
        element.addEventListener('input', updateProgress);
    });
    
    // Initial progress calculation
    updateProgress();
    
    // Make updateProgress globally available
    window.updateProgress = updateProgress;
}

function updateProgress() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    const totalFields = formElements.length;
    let filledFields = 0;
    
    formElements.forEach(element => {
        if (element.value && element.value.trim() !== '') {
            filledFields++;
        }
    });
    
    const percentage = Math.round((filledFields / totalFields) * 100);
    
    // Update progress bar
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${percentage}% Complete`;
        
        // Add completion message
        if (percentage === 100) {
            progressText.textContent = '🎉 All fields completed!';
            progressText.style.color = 'var(--success-color)';
        } else if (percentage >= 75) {
            progressText.textContent = `${percentage}% Complete - Almost there!`;
            progressText.style.color = 'var(--warning-color)';
        } else {
            progressText.style.color = 'var(--text-muted)';
        }
    }
    
    // Add visual feedback
    if (percentage === 100) {
        const progressBar = document.querySelector('.progress-bar');
        if (progressBar) {
            progressBar.style.boxShadow = '0 0 20px var(--success-color)';
            setTimeout(() => {
                progressBar.style.boxShadow = '';
            }, 2000);
        }
    }
}
