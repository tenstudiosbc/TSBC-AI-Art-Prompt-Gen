// Tab navigation functionality
export function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            switchTab(targetTab, tabButtons, tabContents);
        });
    });
}

function switchTab(targetTab, tabButtons, tabContents) {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
    const activeContent = document.getElementById(`${targetTab}-tab`);
    
    if (activeButton && activeContent) {
        activeButton.classList.add('active');
        activeContent.classList.add('active');
        
        // Animate the transition
        activeContent.style.opacity = '0';
        activeContent.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            activeContent.style.transition = 'all 0.3s ease';
            activeContent.style.opacity = '1';
            activeContent.style.transform = 'translateY(0)';
        }, 50);
    }
}
