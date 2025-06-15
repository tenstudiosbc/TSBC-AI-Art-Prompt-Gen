// Progress tracking for form completion
export function initializeProgress() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    const debouncedUpdate = debounce(updateProgress, 250);
    
    formElements.forEach(element => {
        element.addEventListener('change', debouncedUpdate);
        element.addEventListener('input', debouncedUpdate);
    });
    
    // Initial progress calculation
    updateProgress();
}

function updateProgress() {
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    if (!progressFill || !progressText) return;

    // Use RequestAnimationFrame for smooth updates
    requestAnimationFrame(() => {
        const formElements = document.querySelectorAll('select, input[type="text"], textarea');
        const totalFields = formElements.length;
        const filledFields = Array.from(formElements).filter(el => el.value.trim()).length;
        const percentage = Math.round((filledFields / totalFields) * 100);
        
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% Complete`;
        
        // Update text color based on completion
        if (percentage === 100) {
            progressText.textContent = '🎉 All fields completed!';
            progressText.style.color = 'var(--success-color)';
        } else if (percentage >= 75) {
            progressText.textContent = `${percentage}% Complete - Almost there!`;
            progressText.style.color = 'var(--warning-color)';
        } else {
            progressText.style.color = 'var(--text-muted)';
        }
    });
}
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
