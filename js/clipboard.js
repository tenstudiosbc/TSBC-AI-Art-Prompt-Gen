// Clipboard functionality
export function initializeClipboard() {
    const copyButton = document.getElementById("copy-prompt");
    copyButton.addEventListener("click", copyToClipboard);
}

async function copyToClipboard() {
    const promptText = document.getElementById("prompt-result").textContent;
    
    if (promptText === "Your prompt will appear here...") {
        showNotification("Generate a prompt first before copying!", "warning");
        return;
    }
    
    try {
        await navigator.clipboard.writeText(promptText);
        showNotification("Prompt copied to clipboard!", "success");
    } catch (err) {
        console.error("Failed to copy: ", err);
        // Fallback for older browsers
        fallbackCopyToClipboard(promptText);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showNotification("Prompt copied to clipboard!", "success");
    } catch (err) {
        showNotification("Failed to copy prompt", "error");
    }
    
    document.body.removeChild(textArea);
}

function showNotification(message, type = "info") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: "fixed",
        top: "20px",
        right: "20px",
        padding: "12px 20px",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        zIndex: "10000",
        transition: "all 0.3s ease"
    });
    
    // Set background color based on type
    const colors = {
        success: "#4CAF50",
        warning: "#FF9800", 
        error: "#F44336",
        info: "#2196F3"
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(100%)";
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}