// Enhanced clipboard functionality
export function initializeClipboard() {
    const copyButton = document.getElementById("copy-prompt");
    const copyNegativeButton = document.getElementById("copy-negative");
    
    if (copyButton) {
        copyButton.addEventListener("click", () => copyToClipboard('prompt'));
    }
    
    if (copyNegativeButton) {
        copyNegativeButton.addEventListener("click", () => copyToClipboard('negative'));
    }
}

async function copyToClipboard(type = 'prompt') {
    let textToCopy = '';
    let successMessage = '';
    
    if (type === 'prompt') {
        const promptText = document.getElementById("prompt-result").textContent;
        if (promptText === "Your customized AI art prompt will appear here...") {
            if (window.showToast) {
                window.showToast("Generate a prompt first before copying!", "warning");
            }
            return;
        }
        textToCopy = promptText;
        successMessage = "Prompt copied to clipboard!";
    } else if (type === 'negative') {
        const negativeText = document.getElementById("negative-result")?.textContent || '';
        if (!negativeText.trim()) {
            if (window.showToast) {
                window.showToast("No negative prompt to copy!", "warning");
            }
            return;
        }
        textToCopy = negativeText;
        successMessage = "Negative prompt copied to clipboard!";
    }
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        if (window.showToast) {
            window.showToast(successMessage, "success");
        }
    } catch (err) {
        console.error("Failed to copy: ", err);
        // Fallback for older browsers
        fallbackCopyToClipboard(textToCopy, successMessage);
    }
}

function fallbackCopyToClipboard(text, successMessage) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful && window.showToast) {
            window.showToast(successMessage, "success");
        } else if (window.showToast) {
            window.showToast("Failed to copy prompt", "error");
        }
    } catch (err) {
        if (window.showToast) {
            window.showToast("Failed to copy prompt", "error");
        }
    }
    
    document.body.removeChild(textArea);
}