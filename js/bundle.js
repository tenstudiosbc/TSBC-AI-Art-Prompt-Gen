// TSBC AI Art Prompt Maker v2.0 - GitHub Pages Compatible Bundle
// All modules combined for static hosting compatibility

// Options Data
const optionsData = {
    artStyle: [
        "",
        "Painterly anime", "Semi-realistic anime", "Cyberpunk anime style", "Studio Ghibli-inspired", "Cel-shaded", "3D", "Photorealistic",
        "Watercolor sketch", "Vintage manga", "Noir comic style", "Western cartoon", "Flat vector", "Ink and brush", "Lo-fi art style", "Pop art",
        "Pixel art", "Realistic oil painting", "High-contrast chiaroscuro", "Graffiti street art", "Steampunk fantasy", "Minimalist line art",
        "Classic shoujo anime", "Classic shounen anime", "Brush pen illustration", "Dark fantasy manga", "Visual novel style", "Retro 80s anime",
        "Fantasy RPG cover style", "Children's book illustration"
    ],

    age: [
        "",
        "Infant", "Toddler", "Young child", "Child", "Tween", "Early teen", "Teen", "Late teen", "Young adult", "20s", "Late 20s", "Early 30s",
        "30s", "Late 30s", "Adult", "Mid 40s", "Middle-aged", "Early 50s", "Late 50s", "Senior", "Elderly", "Ancient-looking", "Immortal youthful",
        "Ageless appearance", "Preteen", "Old but agile", "Teen-looking android", "Mature warrior", "Youthful mage"
    ],

    gender: [
        "",
        "Woman", "Man", "Androgynous", "Non-binary", "Feminine-presenting", "Masculine-presenting", "Genderfluid", "Agender", "Demiboy", "Demigirl",
        "Transgender woman", "Transgender man", "Cross-dressed", "Drag queen", "Drag king", "Alien gender", "AI-presenting", "Shape-shifting gender",
        "Magical girl form", "Masquerading gender", "Dual-gendered", "Ambiguous gender", "Fae gender", "Cursed form", "Reincarnated gender",
        "Cybernetic androgyny", "Princess-knight fusion", "Witch form", "Goddess form"
    ],

    personality: [
        "", "Friendly", "Shy", "Outgoing", "Introverted", "Extroverted", "Sarcastic", "Optimistic", "Pessimistic", "Adventurous",

    ],

    hairStyle: [
        "",
        "Long wavy hair", "Short spiky hair", "Medium-length layered hair", "Braided hair", "Pixie cut", "Tied ponytail", "Twin tails", "Messy bun",
        "Bob cut", "Undercut", "Loose Ponytail", "Short Hair", "Side-swept bangs", "Afro", "Mohawk", "Straight long hair", "Shaggy hair", "Half-up bun",
        "Curly bob", "Asymmetrical cut", "Side braid", "Fishtail braid", "Dreadlocks", "Space buns", "Wind-swept hair", "Wolf cut", "Fluffy perm",
        "Pompadour", "Elegant updo", "Elegant Ponytail"
    ],

    hairColor: [
        "",
        "Black", "Brown", "Blonde", "Red", "Blue", "Green", "Pink", "Purple", "Silver", "White", "Lavender", "Auburn", "Orange", "Turquoise",
        "Rose gold", "Mint green", "Pastel pink", "Pastel purple", "Peach", "Grey", "Charcoal", "Multicolor", "Rainbow", "Neon green", "Ice blue",
        "Dark teal", "Platinum blonde", "Jet black", "Holographic", "Brunette", "Green-Tea", "Rosy"
    ],

    eyeColor: [
        "",
        "Black", "Dark Brown", "Light Brown", "Hazel", "Green", "Blue", "Violet", "Silver", "Grey", "Heterochromia", "Amber", "Turquoise", "Pink",
        "Red", "White", "Glowing Blue", "Glowing Red", "Golden", "Ice Blue", "Crimson", "Dark Green", "Soft Lavender", "Sunset Orange", "Neon Yellow",
        "Amethyst", "Sky Blue", "Milky white (blind)", "Cat eyes", "Reptilian slit"
    ],

    bodyType: [
        "",
        "Slim", "Athletic", "Muscular", "Petite", "Curvy", "Average", "Tall", "Short", "Toned", "Plus-size", "Chubby", "Lean", "Stocky", "Hourglass",
        "Pear-shaped", "Apple-shaped", "Broad-shouldered", "Lanky", "Thin", "Voluptuous", "Compact", "Delicate", "Robust", "Graceful", "Sturdy",
        "Slender", "Thickset", "Dancer's build", "Fantasy warrior physique", "Model's Build"
    ],

    mood: [
        "",
        "Happy", "Melancholic", "Mysterious", "Confident", "Dreamy", "Fierce", "Serene", "Playful", "Determined", "Flirty", "Sad", "Seductive",
        "Angry", "Calm", "Bashful", "Joyful", "Stoic", "Grumpy", "Smug", "Cold-hearted", "Energetic", "Lonely", "Fearful", "Hopeful", "Proud",
        "Surprised", "Sassy", "Mischievous", "Tranquil", "Timid", "Shy", "Goofy", "Yandere", "Remorseful", "Crying", "Satisfied"
    ],

    cameraAngle: [
        "",
        "Portrait shot", "Close-up", "Medium shot", "Full body", "Low angle", "High angle", "Side profile", "Three-quarter view", "Over the shoulder",
        "Top-down view", "Bottom-up view", "Dutch tilt", "Extreme close-up", "Worm's eye view", "Bird's eye view", "Front-on shot", "Back view",
        "Wide angle", "Tilted profile", "Tracking shot angle", "Zoomed-in on eyes", "Tilt-up angle", "Tilt-down angle", "Centered angle",
        "Cinematic crop", "Bokeh focus close-up", "Face-focused frame", "Dynamic perspective", "Overhead diagonal", "Hero angle"
    ],

    lighting: [
        "",
        "Rim lighting", "Golden hour light", "Soft studio glow", "Neon cyberpunk glow", "Moonlit ambiance", "Fire-lit glow", "Sunset backlight",
        "Overcast natural light", "Soft bounce light", "Spotlight focus", "Harsh top light", "Side lighting", "Color splash lighting", "Twilight lighting",
        "Interior lamp glow", "Candlelit glow", "Underlight (horror)", "Bioluminescent glow", "Northern lights", "Disco lights", "UV blacklight",
        "Magic aura glow", "Stormy flash light", "City night reflections", "Dim fluorescent", "Fairy light sparkle", "Natural daylight filter",
        "Strobe lighting", "Dream haze lighting", "Rain-soaked"
    ],

    background: [
        "",
        "Plain white background", "Cherry blossom trees", "Cyberpunk city", "Magical forest", "Futuristic skyline", "Ancient ruins", "Sunset beach",
        "Urban rooftop", "Enchanted garden", "Beachside house", "Downtown streets", "Classroom", "Medieval town", "Castle ballroom", "Boat",
        "Parking lot", "Shop", "Boutique", "Graveyard", "Snowy mountain", "Train station", "Library interior", "Abandoned warehouse", "Moon surface",
        "Space station", "Jungle ruins", "Volcanic terrain", "Café", "Aquarium tunnel", "Royal throne room", "Newsroom", "News Studio", "SSIA HQ",
        "Interrogation Room", "Apartment Living room", "bedroom", "kitchen", "Ruins", "Green Background"
    ],

    clothing: [
        "",
        "Casual t-shirt", "Elegant dress", "Business suit", "Hoodie", "Kimono", "Leather jacket", "School uniform", "Cyberpunk outfit", "Streetwear",
        "Tactical uniform", "Fantasy armor", "Sportswear", "Military uniform", "Ballgown", "Cloak and tunic", "Gothic lolita dress", "Trench coat",
        "Tank top and jeans", "Overalls", "Traditional hanbok", "Lab coat", "Bikini/swimsuit", "Battle robe", "Wedding dress", "Sailor uniform",
        "Mage cloak", "Futuristic pilot suit", "Pajamas", "Detective coat", "Designer Dress"
    ],

    clothingColor: [
        "",
        "Black", "White", "Red", "Blue", "Green", "Purple", "Pink", "Navy blue", "Golden", "Silver", "Turquoise", "Lavender", "Brown", "Dark grey",
        "Light grey", "Beige", "Coral", "Maroon", "Pastel blue", "Pastel pink", "Olive green", "Orange", "Crimson", "Sky blue", "Teal", "Neon yellow",
        "Ivory", "Emerald", "Midnight purple"
    ],

    faceAccessories: [
        "",
        "Glasses", "Sunglasses", "Eye patch", "Face mask", "Reading glasses", "Round glasses", "Cyberpunk visor", "Monocle", "Bandage across nose",
        "Transparent mask", "VR goggles", "High-tech scouter", "Face tattoo", "Decorative gems", "Tribal face paint", "Makeup tear streak",
        "Steampunk goggles", "Breathing apparatus", "AR glasses", "Crystal eyepiece", "Glowing contact lens", "Golden mask", "Half-face mask",
        "Futuristic faceplate", "Face barcode", "Ear-to-ear headset", "Dragon mark", "Forehead gem", "Visor with UI", "Ear Comms", "Face shield",
        "Fake beard"
    ],

    pose: [
        "",
        "Standing confidently", "Sitting casually", "Walking forward", "Arms crossed", "Hand on hip", "Fighting stance", "Dancing", "Looking over shoulder",
        "With gun", "Kneeling", "Leaning on wall", "Running", "Jumping", "Lying down", "Peace sign", "Holding object", "Hands in pockets",
        "Casting spell", "Floating", "Back turned", "Kicking", "Stretching", "Singing", "Holding hands out", "Protective stance", "Hugging something",
        "Martial arts stance", "Crouching", "Pointing", "Eating", "Sleeping", "Sitting cross-legged", "Reaching out", "Holding chin thoughtfully",
    ],

    hairAccessory: [
        "",
        "Headband", "Hair clips", "Floral hairpiece", "Ribbons", "Tiara", "Cyberpunk hairpiece", "Bow", "Cat ears", "Devil horns", "Halo",
        "Butterfly clip", "Gemstone pin", "Feather decoration", "Star clip", "Mini top hat", "Scrunchie", "Pearl string", "Golden barrette",
        "Spiked accessory", "Braided beads", "Traditional pin", "Leaf crown", "Moon ornament", "Dragon pin", "Music note clip", "Candy-shaped clip",
        "Spiderweb clip", "Rainbow hair clip", "Skull hairpin", "Little SSIA Insignia", "Mage Hat", "Flower crown", "Hairband with bells",
        "Hairband with charms", "Hairband with feathers", "Hairband with pearls", "Insignia hairpin", "Hairband with gems", "Hairband with ribbons"
    ],

    gunPose: [
        "",
        "Drawing a gun", "Aiming gun", "Holding gun at side", "Two-handed gun grip", "Dual wielding guns", "Gun over shoulder", "Gun in holster",
        "Reloading", "Gun pointed at viewer", "Shooting mid-jump", "Gun at hip", "Sniper aim pose", "Kneeling with rifle", "Holding gun behind back",
        "Crossed arms with guns", "Gun in both hands forward", "Firing sideways", "Hiding gun", "Gun held to chest", "Silenced gun pose",
        "Assassin-style draw", "Underarm aim", "Tactical lean pose", "Quick draw pose", "Gun pointed downward", "Futuristic gun stance",
        "Backflip shoot", "Empty gun expression", "Spinning gun trick"
    ],

    effects: [
        "",
        "Soft blur", "Particle effects", "Depth of field", "Film grain", "Glitch effects", "Ethereal glow", "Smoke trails", "Magic aura", "Rain droplets",
        "Fire sparks", "Ice shards", "Electric sparks", "Floating leaves", "Cherry blossom petals", "Snowfall", "Motion blur", "Blood splatter",
        "Lens flare", "Dust particles", "Time distortion", "Wind swirl", "Fireflies", "Shadow tendrils", "Hologram distortion", "Shattered glass effect",
        "Aura rings", "Light beams", "Energy ripple", "Neon outline", "Kaleidoscope", "Hazy Effects"
    ]
};

// Templates Data
const templates = [
    {
        name: "Anime Portrait",
        description: "Classic anime-style character portrait",
        settings: {
            "art-style": "Painterly anime",
            "age": "Young adult",
            "camera-angle": "Portrait shot",
            "lighting": "Soft studio glow",
            "background": "Plain white background",
            "mood": "Confident"
        }
    },
    {
        name: "Cyberpunk Character",
        description: "Futuristic cyberpunk aesthetic",
        settings: {
            "art-style": "Cyberpunk anime style",
            "lighting": "Neon cyberpunk glow",
            "background": "Cyberpunk city",
            "clothing": "Cyberpunk outfit",
            "face-accessories": "Cyberpunk visor",
            "effects": "Glitch effects"
        }
    },
    {
        name: "Fantasy Warrior",
        description: "Epic fantasy character design",
        settings: {
            "art-style": "Dark fantasy manga",
            "clothing": "Fantasy armor",
            "pose": "Fighting stance",
            "background": "Ancient ruins",
            "lighting": "Fire-lit glow",
            "mood": "Fierce"
        }
    },
    {
        name: "Studio Ghibli Style",
        description: "Whimsical Ghibli-inspired character",
        settings: {
            "art-style": "Studio Ghibli-inspired",
            "mood": "Dreamy",
            "background": "Magical forest",
            "lighting": "Golden hour light",
            "effects": "Floating leaves"
        }
    },
    {
        name: "Realistic Portrait",
        description: "Photorealistic character study",
        settings: {
            "art-style": "Photorealistic",
            "camera-angle": "Portrait shot",
            "lighting": "Soft bounce light",
            "background": "Plain white background",
            "mood": "Serene"
        }
    },
    {
        name: "Gothic Lolita",
        description: "Elegant gothic fashion style",
        settings: {
            "art-style": "Semi-realistic anime",
            "clothing": "Gothic lolita dress",
            "clothing-color": "Black",
            "mood": "Mysterious",
            "lighting": "Moonlit ambiance",
            "background": "Gothic architecture"
        }
    }
];

// Global variables
let promptHistory = [];
let toastTimeout = null;
const MAX_HISTORY_ITEMS = 20;

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 TSBC AI Art Prompt Maker v2.0.0 - Initializing...');
    
    // Load core functionality
    loadOptions();
    initializeVisibilityControls();
    initializePromptGenerator();
    initializeClipboard();
    
    // Initialize new features
    initializeTabs();
    initializeTemplates();
    initializeHistory();
    initializeProgress();
    initializeToast();
    initializeAdvanced();
    initializeThemeSettings(); // <-- Add this line
    
    console.log('✨ Application initialized successfully!');
    
    // Show welcome animation
    showWelcomeAnimation();
});

// Load options into dropdowns
function loadOptions() {
    Object.entries(optionsData).forEach(([key, options]) => {
        const sanitizedId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const selectElement = document.getElementById(sanitizedId);

        if (selectElement) {
            selectElement.innerHTML = '';
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectElement.appendChild(optionElement);
            });
        }
    });
}

// Visibility controls for conditional fields
function initializeVisibilityControls() {
    const genderSelect = document.getElementById("gender");
    const poseSelect = document.getElementById("pose");
    const hairAccessoryContainer = document.getElementById("hair-accessory-container");
    const gunPoseContainer = document.getElementById("gun-pose-container");

    if (genderSelect && hairAccessoryContainer) {
        genderSelect.addEventListener("change", function() {
            if (this.value === "Woman" || this.value === "Feminine-presenting") {
                hairAccessoryContainer.classList.add("show");
            } else {
                hairAccessoryContainer.classList.remove("show");
            }
        });
    }

    if (poseSelect && gunPoseContainer) {
        poseSelect.addEventListener("change", function() {
            if (this.value === "With gun") {
                gunPoseContainer.classList.add("show");
            } else {
                gunPoseContainer.classList.remove("show");
            }
        });
    }
}

// Tab navigation functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.dataset.tab;
            switchTab(targetTab, tabButtons, tabContents);
        });
    });

    // Theme tab: ensure correct tab is shown on load if needed
    // (optional: can be omitted if not needed)
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
    
    // Add: scroll to top of form on tab switch for better UX
    if (activeContent) {
        // ...existing code...
        setTimeout(() => {
            // ...existing code...
            // Scroll to top of form container if present
            if (activeContent.closest('.form-container')) {
                activeContent.closest('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    }
}

// Enhanced prompt generation logic
function initializePromptGenerator() {
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
            addToHistory(prompt, formData);
            
            showToast('Prompt generated successfully!', 'success');
        } catch (error) {
            console.error('Error generating prompt:', error);
            showToast('Error generating prompt', 'error');
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
        modelStyle: document.getElementById("model-style")?.value || ""
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
    if (data.mood) {
        promptParts.push(`expressing ${data.mood}`);
    }
    
    // Pose (gun pose takes priority if available)
    if (data.gunPose && data.pose === "With gun") {
        promptParts.push(data.gunPose);
    } else if (data.pose) {
        promptParts.push(data.pose);
    }
    
    // Technical specifications
    let technicalSpecs = [];
    
    if (data.cameraAngle) technicalSpecs.push(`captured in ${data.cameraAngle}`);
    if (data.lighting) technicalSpecs.push(`illuminated with ${data.lighting}`);
    if (data.effects) technicalSpecs.push(`featuring ${data.effects} effects`);
    if (data.background) technicalSpecs.push(`with ${data.background}`);
    
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
    showToast('Prompt cleared', 'info');
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

// Enhanced clipboard functionality
function initializeClipboard() {
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
            showToast("Generate a prompt first before copying!", "warning");
            return;
        }
        textToCopy = promptText;
        successMessage = "Prompt copied to clipboard!";
    } else if (type === 'negative') {
        const negativeText = document.getElementById("negative-result")?.textContent || '';
        if (!negativeText.trim()) {
            showToast("No negative prompt to copy!", "warning");
            return;
        }
        textToCopy = negativeText;
        successMessage = "Negative prompt copied to clipboard!";
    }
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(successMessage, "success");
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
        if (successful) {
            showToast(successMessage, "success");
        } else {
            showToast("Failed to copy prompt", "error");
        }
    } catch (err) {
        showToast("Failed to copy prompt", "error");
    }
    
    document.body.removeChild(textArea);
}

// Templates functionality
function initializeTemplates() {
    const templatesBtn = document.getElementById('templates-btn');
    const templatesPanel = document.getElementById('templates-panel');
    const templatesGrid = document.getElementById('templates-grid');
    
    if (templatesBtn && templatesPanel) {
        templatesBtn.addEventListener('click', toggleTemplatesPanel);
        populateTemplates(templatesGrid);
    }
}

function toggleTemplatesPanel() {
    const templatesPanel = document.getElementById('templates-panel');
    const historyPanel = document.getElementById('history-panel');
    
    // Hide history panel if open
    if (historyPanel) {
        historyPanel.style.display = 'none';
    }
    
    if (templatesPanel) {
        const isVisible = templatesPanel.style.display !== 'none';
        templatesPanel.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            templatesPanel.style.opacity = '0';
            templatesPanel.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                templatesPanel.style.transition = 'all 0.3s ease';
                templatesPanel.style.opacity = '1';
                templatesPanel.style.transform = 'translateY(0)';
            }, 50);
        }
    }
}

function populateTemplates(container) {
    if (!container) return;
    
    container.innerHTML = '';
    
    templates.forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.innerHTML = `
            <h4>${template.name}</h4>
            <p>${template.description}</p>
        `;
        
        templateCard.addEventListener('click', () => {
            applyTemplate(template);
        });
        
        container.appendChild(templateCard);
    });
}

function applyTemplate(template) {
    Object.entries(template.settings).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field && value) {
            field.value = value;
            
            // Trigger change event to update visibility controls
            field.dispatchEvent(new Event('change', { bubbles: true }));
        }
    });
    
    showToast(`Applied template: ${template.name}`, 'success');
    
    // Hide templates panel
    const templatesPanel = document.getElementById('templates-panel');
    if (templatesPanel) {
        templatesPanel.style.display = 'none';
    }
    
    // Update progress
    updateProgress();
}

// History management
function initializeHistory() {
    loadHistoryFromStorage();
    
    const historyBtn = document.getElementById('history-btn');
    if (historyBtn) {
        historyBtn.addEventListener('click', toggleHistoryPanel);
    }
    
    populateHistoryList();
}

function addToHistory(prompt, settings = {}) {
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
        
        showToast('Prompt loaded from history', 'success');
        
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
            showToast('Prompt copied to clipboard', 'success');
        });
    }
};

window.deleteHistoryItem = function(id) {
    promptHistory = promptHistory.filter(h => h.id !== id);
    saveHistoryToStorage();
    populateHistoryList();
    showToast('History item deleted', 'info');
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

// Progress tracking
function initializeProgress() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    
    formElements.forEach(element => {
        element.addEventListener('change', updateProgress);
        element.addEventListener('input', updateProgress);
    });
    
    // Initial progress calculation
    updateProgress();
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

// Toast notification system
function initializeToast() {
    // Test toast on load (optional)
    setTimeout(() => {
        showToast('Welcome to TSBC AI Art Prompt Maker v2.0!', 'info');
    }, 1000);
}

function showToast(message, type = 'success', duration = 3000) {
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

// Advanced functionality
function initializeAdvanced() {
    initializeRandomGeneration();
    initializeExportFunctionality();
    initializeClearAll();
    initializeFavorites();
}

function initializeRandomGeneration() {
    const randomGenerateBtn = document.getElementById('random-generate');
    const randomFillBtn = document.getElementById('random-fill');
    
    if (randomGenerateBtn) {
        randomGenerateBtn.addEventListener('click', () => {
            randomFillAllFields();
            // Auto-generate after filling
            setTimeout(() => {
                const generateBtn = document.getElementById('generate-prompt');
                if (generateBtn) {
                    generateBtn.click();
                }
            }, 500);
        });
    }
    
    if (randomFillBtn) {
        randomFillBtn.addEventListener('click', randomFillAllFields);
    }
}

function randomFillAllFields() {
    Object.entries(optionsData).forEach(([key, options]) => {
        const sanitizedId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const selectElement = document.getElementById(sanitizedId);
        
        if (selectElement && options.length > 1) {
            // Skip empty first option, pick random from rest
            const nonEmptyOptions = options.filter(option => option !== '');
            if (nonEmptyOptions.length > 0) {
                const randomOption = nonEmptyOptions[Math.floor(Math.random() * nonEmptyOptions.length)];
                selectElement.value = randomOption;
                selectElement.dispatchEvent(new Event('change', { bubbles: true }));
            }
        }
    });
    
    // Fill custom fields with random values
    const customPrefix = document.getElementById('custom-prefix');
    const customSuffix = document.getElementById('custom-suffix');
    const qualityTags = document.getElementById('quality-tags');
    const aspectRatio = document.getElementById('aspect-ratio');
    
    if (customPrefix && Math.random() > 0.7) {
        const prefixes = [
            'highly detailed', 'ultra realistic', 'award winning', 'masterpiece',
            'concept art', 'digital painting', 'trending on artstation'
        ];
        customPrefix.value = prefixes[Math.floor(Math.random() * prefixes.length)];
    }
    
    if (customSuffix && Math.random() > 0.7) {
        const suffixes = [
            'professional photography', 'studio lighting', 'high resolution',
            'cinematic composition', 'artistic masterpiece'
        ];
        customSuffix.value = suffixes[Math.floor(Math.random() * suffixes.length)];
    }
    
    if (qualityTags && Math.random() > 0.5) {
        const qualities = ['masterpiece, best quality', 'masterpiece, best quality, ultra detailed', 'masterpiece, best quality, ultra detailed, 4k, 8k'];
        qualityTags.value = qualities[Math.floor(Math.random() * qualities.length)];
    }
    
    if (aspectRatio && Math.random() > 0.6) {
        const ratios = ['1:1', '4:3', '16:9', '9:16', '3:4'];
        aspectRatio.value = ratios[Math.floor(Math.random() * ratios.length)];
    }
    
    showToast('Random values generated!', 'success');
    updateProgress();
}

function initializeExportFunctionality() {
    const exportJsonBtn = document.getElementById('export-json');
    
    if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', exportSettings);
    }
}

function exportSettings() {
    const formData = getAllFormData();
    const promptResult = document.getElementById('prompt-result');
    const negativeResult = document.getElementById('negative-result');
    
    const exportData = {
        metadata: {
            generator: 'TSBC AI Art Prompt Maker v2.0',
            timestamp: new Date().toISOString(),
            version: '2.0.0'
        },
        settings: formData,
        generated: {
            prompt: promptResult ? promptResult.textContent : '',
            negativePrompt: negativeResult ? negativeResult.textContent : '',
            characterCount: promptResult ? promptResult.textContent.length : 0
        }
    };
    
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `tsbc-prompt-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('Settings exported successfully!', 'success');
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

function initializeClearAll() {
    const clearAllBtn = document.getElementById('clear-all');
    
    if (clearAllBtn) {
        clearAllBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear all fields? This action cannot be undone.')) {
                clearAllFields();
            }
        });
    }
}

function clearAllFields() {
    const formElements = document.querySelectorAll('select, input[type="text"], textarea');
    
    formElements.forEach(element => {
        element.value = '';
        element.dispatchEvent(new Event('change', { bubbles: true }));
    });
    
    // Clear output
    const promptResult = document.getElementById('prompt-result');
    const negativeResult = document.getElementById('negative-result');
    
    if (promptResult) {
        promptResult.textContent = 'Your customized AI art prompt will appear here...';
    }
    
    if (negativeResult) {
        negativeResult.textContent = '';
        document.getElementById('negative-display').style.display = 'none';
    }
    
    showToast('All fields cleared', 'info');
    updateProgress();
}

function initializeFavorites() {
    const saveFavoriteBtn = document.getElementById('save-favorite');
    
    if (saveFavoriteBtn) {
        saveFavoriteBtn.addEventListener('click', saveFavorite);
    }
}

function saveFavorite() {
    const promptResult = document.getElementById('prompt-result');
    if (!promptResult || !promptResult.textContent || promptResult.textContent === 'Your customized AI art prompt will appear here...') {
        showToast('Generate a prompt first before saving to favorites', 'warning');
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
    
    let favorites = [];
    try {
        const stored = localStorage.getItem('tsbc-favorites');
        if (stored) {
            favorites = JSON.parse(stored);
        }
    } catch (error) {
        console.error('Error loading favorites:', error);
    }
    
    favorites.unshift(favorite);
    
    // Limit favorites to 50 items
    if (favorites.length > 50) {
        favorites = favorites.slice(0, 50);
    }
    
    try {
        localStorage.setItem('tsbc-favorites', JSON.stringify(favorites));
        showToast('Added to favorites!', 'success');
    } catch (error) {
        console.error('Error saving favorite:', error);
        showToast('Error saving favorite', 'error');
    }
}

// Welcome animation
function showWelcomeAnimation() {
    const hero = document.querySelector('.hero-header');
    if (hero) {
        hero.style.transform = 'translateY(-20px)';
        hero.style.opacity = '0';
        
        setTimeout(() => {
            hero.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            hero.style.transform = 'translateY(0)';
            hero.style.opacity = '1';
        }, 100);
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

// Theme switching functionality
function initializeThemeSettings() {
    const themeSelect = document.getElementById('theme-select');
    if (!themeSelect) return;

    // Load saved theme or default
    const savedTheme = localStorage.getItem('tsbc-theme') || 'default';
    setTheme(savedTheme);
    themeSelect.value = savedTheme;

    themeSelect.addEventListener('change', function() {
        setTheme(this.value);
        localStorage.setItem('tsbc-theme', this.value);
    });
}

function setTheme(theme) {
    const root = document.documentElement;
    // Remove all theme classes
    root.classList.remove('theme-dark', 'theme-sunset', 'theme-light', 'theme-green-tea');
    switch (theme) {
        case 'light':
            root.classList.add('theme-light');
            break;
        case 'dark':
            root.classList.add('theme-dark');
            break;
        case 'sunset':
            root.classList.add('theme-sunset');
            break;
        case 'green-tea':
            root.classList.add('theme-green-tea');
            break;
        default:
            root.classList.add('theme-light'); // Set light as default
            break;
    }
}

// Update theme styles
(function injectThemeStyles() {
    if (document.getElementById('tsbc-theme-styles')) return;
    const style = document.createElement('style');
    style.id = 'tsbc-theme-styles';
    style.textContent = `
    /* Light Theme (Default) */
    :root, .theme-light {
        --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        --bg-card: #ffffff;
        --bg-card-hover: #f8fafc;
        --bg-secondary: #f1f5f9;
        --bg-glass: rgba(255, 255, 255, 0.9);
        --text-primary: #1e293b;
        --text-secondary: #334155;
        --text-muted: #64748b;
        --primary-color: #4f8cff;
        --secondary-color: #6366f1;
        --border-primary: #e2e8f0;
        --border-secondary: #f1f5f9;
        --shadow-glow: 0 0 16px #4f8cff22;
        --shadow-xl: 0 4px 32px #0001;
    }

    /* Dark Theme */
    .theme-dark {
        --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        --bg-card: #1e293b;
        --bg-card-hover: #334155;
        --bg-secondary: #0f172a;
        --bg-glass: rgba(15, 23, 42, 0.9);
        --text-primary: #f8fafc;
        --text-secondary: #e2e8f0;
        --text-muted: #94a3b8;
    }

    /* Sunset Theme */
    .theme-sunset {
        --bg-gradient: linear-gradient(135deg, #fef2f2 0%, #fff7ed 100%);
        --bg-card: #fff7f0;
        --bg-card-hover: #ffe0c7;
        --bg-secondary: #ffe6d5;
        --bg-glass: rgba(255, 247, 237, 0.9);
        --text-primary: #431407;
        --text-secondary: #7c2d12;
        --text-muted: #9a3412;
        --primary-color: #f97316;
        --secondary-color: #fb923c;
        --border-primary: #fed7aa;
        --border-secondary: #ffedd5;
        --shadow-glow: 0 0 16px #f9731622;
    }

    /* Green Tea Theme */
    .theme-green-tea {
        --bg-gradient: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        --bg-card: #ffffff;
        --bg-card-hover: #f0fdf4;
        --bg-secondary: #dcfce7;
        --bg-glass: rgba(240, 253, 244, 0.9);
        --text-primary: #14532d;
        --text-secondary: #166534;
        --text-muted: #15803d;
        --primary-color: #22c55e;
        --secondary-color: #4ade80;
        --border-primary: #bbf7d0;
        --border-secondary: #dcfce7;
        --shadow-glow: 0 0 16px #22c55e22;
    }

    /* Common progress bar styles - not affected by theme */
    .progress-bar {
        background: rgba(0, 0, 0, 0.1) !important;
        border: 1px solid rgba(0, 0, 0, 0.2) !important;
    }

    .progress-fill {
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color)) !important;
    }

    /* Apply background gradient to body based on theme */
    body {
        background: var(--bg-gradient);
    }
    `;
    document.head.appendChild(style);
})();