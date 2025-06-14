// Enhanced prompt generation logic
export function initializePromptGenerator() {
    const generateButton = document.getElementById("generate-prompt");
    const clearButton = document.getElementById("clear-prompt");
    
    generateButton.addEventListener("click", generatePrompt);
    clearButton.addEventListener("click", clearPrompt);
}

function generatePrompt() {
    // Add loading state
    const generateButton = document.getElementById("generate-prompt");
    generateButton.classList.add('btn-loading');
    generateButton.disabled = true;
    
    setTimeout(() => {
        try {
            const formData = getFormData();
            const prompt = buildPrompt(formData);
            const negativePrompt = formData.negativePrompt;
            
            displayPrompt(prompt, negativePrompt);
            updateCharacterCount(prompt);
            
            // Add to history
            if (window.addToHistory) {
                window.addToHistory(prompt, formData);
            }
            
            if (window.showToast) {
                window.showToast('Prompt generated successfully!', 'success');
            }
        } catch (error) {
            console.error('Error generating prompt:', error);
            if (window.showToast) {
                window.showToast('Error generating prompt', 'error');
            }
        } finally {
            // Remove loading state
            generateButton.classList.remove('btn-loading');
            generateButton.disabled = false;
        }
    }, 500); // Small delay for loading effect
}

function getFormData() {
    return {
        // Basic character data
        artStyle: document.getElementById("art-style").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        hairStyle: document.getElementById("hair-style").value,
        hairColor: document.getElementById("hair-color").value,
        eyeColor: document.getElementById("eye-color").value,
        bodyType: document.getElementById("body-type").value,
        
        // Appearance details
        background: document.getElementById("background").value,
        clothing: document.getElementById("clothing").value,
        clothingColor: document.getElementById("clothing-color").value,
        faceAccessories: document.getElementById("face-accessories").value,
        mood: document.getElementById("mood").value,
        
        // Technical details
        cameraAngle: document.getElementById("camera-angle").value,
        lighting: document.getElementById("lighting").value,
        effects: document.getElementById("effects").value,
        pose: document.getElementById("pose").value,

        // Conditional fields
        hairAccessory: document.getElementById("hair-accessory")?.value || "",
        gunPose: document.getElementById("gun-pose")?.value || "",

        // Advanced fields
        customPrefix: document.getElementById("custom-prefix")?.value || "",
        customSuffix: document.getElementById("custom-suffix")?.value || "",
        qualityTags: document.getElementById("quality-tags")?.value || "",
        negativePrompt: document.getElementById("negative-prompt")?.value || "",
        aspectRatio: document.getElementById("aspect-ratio")?.value || "",
        modelStyle: document.getElementById("model-style")?.value || "",
        // New advanced options
        customPose: document.getElementById("custom-pose")?.value || "",
        customBackground: document.getElementById("custom-background")?.value || "",
        customPersonality: document.getElementById("custom-personality")?.value || ""
    };
}

function buildPrompt(data) {
    let promptParts = [];
    
    // Add custom prefix if provided
    if (data.customPrefix) {
        promptParts.push(data.customPrefix);
    }
    
    // Add quality tags if provided
    if (data.qualityTags) {
        promptParts.push(data.qualityTags);
    }
    
    // Core character description
    let characterDesc = [];
    
    if (data.artStyle) characterDesc.push(`${data.artStyle} art style`);
    if (data.age && data.gender) {
        characterDesc.push(`${data.age} ${data.gender}`);
    } else if (data.age) {
        characterDesc.push(data.age);
    } else if (data.gender) {
        characterDesc.push(data.gender);
    }
    
    if (data.bodyType) characterDesc.push(`${data.bodyType} body`);
    
    // Hair description
    if (data.hairColor && data.hairStyle) {
        characterDesc.push(`${data.hairColor} ${data.hairStyle}`);
    } else if (data.hairStyle) {
        characterDesc.push(data.hairStyle);
    } else if (data.hairColor) {
        characterDesc.push(`${data.hairColor} hair`);
    }
    
    if (data.eyeColor) characterDesc.push(`${data.eyeColor} eyes`);
    
    // Add hair accessory if applicable
    if (data.hairAccessory && (data.gender === "Woman" || data.gender === "Feminine-presenting")) {
        characterDesc.push(`with ${data.hairAccessory}`);
    }
    
    if (characterDesc.length > 0) {
        promptParts.push(characterDesc.join(', '));
    }
    
    // Clothing
    if (data.clothing) {
        let clothingDesc = data.clothing;
        if (data.clothingColor) {
            clothingDesc = `${data.clothingColor} ${clothingDesc}`;
        }
        promptParts.push(`wearing ${clothingDesc}`);
    }
    
    // Face accessories
    if (data.faceAccessories) {
        promptParts.push(data.faceAccessories);
    }
    
    // Mood and expression
    if (data.customPersonality) {
        promptParts.push(`personality: ${data.customPersonality}`);
    } else if (data.mood) {
        promptParts.push(`expressing ${data.mood}`);
    }

    // Pose (custom pose takes priority, then gun pose, then pose)
    if (data.customPose && data.customPose.trim()) {
        promptParts.push(data.customPose);
    } else if (data.gunPose && data.pose === "With gun") {
        promptParts.push(data.gunPose);
    } else if (data.pose) {
        promptParts.push(data.pose);
    }

    // Technical specifications
    let technicalSpecs = [];
    if (data.cameraAngle) technicalSpecs.push(`captured in ${data.cameraAngle}`);
    if (data.lighting) technicalSpecs.push(`illuminated with ${data.lighting}`);
    if (data.effects) technicalSpecs.push(`featuring ${data.effects} effects`);
    // Custom background takes priority
    if (data.customBackground && data.customBackground.trim()) {
        technicalSpecs.push(`with background: ${data.customBackground}`);
    } else if (data.background) {
        technicalSpecs.push(`with ${data.background}`);
    }
    if (technicalSpecs.length > 0) {
        promptParts.push(technicalSpecs.join(', '));
    }
    
    // Add custom suffix if provided
    if (data.customSuffix) {
        promptParts.push(data.customSuffix);
    }
    
    // Add aspect ratio if provided
    if (data.aspectRatio) {
        promptParts.push(`--ar ${data.aspectRatio}`);
    }
    
    // Add model style if provided
    if (data.modelStyle) {
        promptParts.push(data.modelStyle);
    }
    
    return promptParts.join(', ');
}

function displayPrompt(prompt, negativePrompt = '') {
    const promptResult = document.getElementById("prompt-result");
    const negativeResult = document.getElementById("negative-result");
    const negativeDisplay = document.getElementById("negative-display");
    const copyNegativeBtn = document.getElementById("copy-negative");
    
    if (promptResult) {
        promptResult.textContent = prompt;
        
        // Add subtle animation
        promptResult.style.opacity = '0';
        promptResult.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            promptResult.style.transition = 'all 0.3s ease';
            promptResult.style.opacity = '1';
            promptResult.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Handle negative prompt display
    if (negativePrompt && negativePrompt.trim()) {
        if (negativeResult) {
            negativeResult.textContent = negativePrompt;
        }
        if (negativeDisplay) {
            negativeDisplay.style.display = 'block';
        }
        if (copyNegativeBtn) {
            copyNegativeBtn.style.display = 'flex';
        }
    } else {
        if (negativeDisplay) {
            negativeDisplay.style.display = 'none';
        }
        if (copyNegativeBtn) {
            copyNegativeBtn.style.display = 'none';
        }
    }
}

function clearPrompt() {
    const promptResult = document.getElementById("prompt-result");
    const negativeDisplay = document.getElementById("negative-display");
    const copyNegativeBtn = document.getElementById("copy-negative");
    
    if (promptResult) {
        promptResult.textContent = "Your customized AI art prompt will appear here...";
    }
    
    if (negativeDisplay) {
        negativeDisplay.style.display = 'none';
    }
    
    if (copyNegativeBtn) {
        copyNegativeBtn.style.display = 'none';
    }
    
    updateCharacterCount('');
    
    if (window.showToast) {
        window.showToast('Prompt cleared', 'info');
    }
}

function updateCharacterCount(text) {
    const charCount = document.getElementById('char-count');
    if (charCount) {
        const length = text ? text.length : 0;
        charCount.textContent = `${length} characters`;
        
        // Add color coding based on length
        if (length > 500) {
            charCount.style.color = 'var(--danger-color)';
        } else if (length > 300) {
            charCount.style.color = 'var(--warning-color)';
        } else {
            charCount.style.color = 'var(--text-muted)';
        }
    }
}