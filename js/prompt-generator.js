// Prompt generation logic
export function initializePromptGenerator() {
    const generateButton = document.getElementById("generate-prompt");
    const clearButton = document.getElementById("clear-prompt");
    
    generateButton.addEventListener("click", generatePrompt);
    clearButton.addEventListener("click", clearPrompt);
}

function generatePrompt() {
    const formData = getFormData();
    const prompt = buildPrompt(formData);
    displayPrompt(prompt);
}

function getFormData() {
    return {
        artStyle: document.getElementById("art-style").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        hairStyle: document.getElementById("hair-style").value,
        hairColor: document.getElementById("hair-color").value,
        eyeColor: document.getElementById("eye-color").value,
        bodyType: document.getElementById("body-type").value,
        background: document.getElementById("background").value,
        clothing: document.getElementById("clothing").value,
        clothingColor: document.getElementById("clothing-color").value,
        faceAccessories: document.getElementById("face-accessories").value,
        mood: document.getElementById("mood").value,
        cameraAngle: document.getElementById("camera-angle").value,
        lighting: document.getElementById("lighting").value,
        effects: document.getElementById("effects").value,
        pose: document.getElementById("pose").value,
        hairAccessory: document.getElementById("hair-accessory")?.value || "",
        gunPose: document.getElementById("gun-pose")?.value || ""
    };
}

function buildPrompt(data) {
    let prompt = `${data.artStyle} art style, ${data.age} ${data.gender}, ${data.bodyType} body, ${data.hairColor} ${data.hairStyle}, ${data.eyeColor} eyes`;
    
    // Add hair accessory if applicable
    if (data.hairAccessory && (data.gender === "Woman" || data.gender === "Feminine-presenting")) {
        prompt += ` with ${data.hairAccessory}`;
    }
    
    // Add clothing
    prompt += `, wearing ${data.clothingColor} ${data.clothing}`;
    
    // Add face accessories
    if (data.faceAccessories) {
        prompt += `, ${data.faceAccessories}`;
    }
    
    // Add mood
    prompt += `, expressing ${data.mood}`;
    
    // Add pose (gun pose takes priority if available)
    if (data.gunPose && data.pose === "With gun") {
        prompt += `, ${data.gunPose}`;
    } else {
        prompt += `, ${data.pose}`;
    }
    
    // Add technical details
    prompt += `, captured in ${data.cameraAngle}, illuminated with ${data.lighting}, featuring ${data.effects} effects, with ${data.background}.`;
    
    return prompt;
}

function displayPrompt(prompt) {
    document.getElementById("prompt-result").textContent = prompt;
}

function clearPrompt() {
    document.getElementById("prompt-result").textContent = "Your prompt will appear here...";
}