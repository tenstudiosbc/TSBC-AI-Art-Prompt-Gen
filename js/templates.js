// Template system for quick prompt generation
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
    },
    // --- New Templates Below ---
    {
        name: "Sci-Fi Mecha Pilot",
        description: "Futuristic pilot in a sci-fi mecha suit",
        settings: {
            "art-style": "3D",
            "clothing": "Futuristic pilot suit",
            "background": "Futuristic skyline",
            "lighting": "Neon cyberpunk glow",
            "pose": "Standing confidently",
            "mood": "Determined",
            "effects": "Hologram distortion"
        }
    },
    {
        name: "Magical Girl Transformation",
        description: "Sparkling magical girl in transformation sequence",
        settings: {
            "art-style": "Classic shoujo anime",
            "clothing": "Sailor uniform",
            "background": "Cherry blossom trees",
            "lighting": "Magic aura glow",
            "effects": "Aura rings",
            "mood": "Hopeful",
            "pose": "Floating"
        }
    },
    {
        name: "Noir Detective",
        description: "Moody noir detective scene",
        settings: {
            "art-style": "Noir comic style",
            "clothing": "Trench coat",
            "background": "Downtown streets",
            "lighting": "Harsh top light",
            "mood": "Stoic",
            "pose": "Leaning on wall",
            "effects": "Film grain"
        }
    },
    {
        name: "Steampunk Inventor",
        description: "Inventor in a steampunk workshop",
        settings: {
            "art-style": "Steampunk fantasy",
            "clothing": "Lab coat",
            "face-accessories": "Steampunk goggles",
            "background": "Factory",
            "lighting": "Interior lamp glow",
            "mood": "Energetic",
            "pose": "Hands in pockets"
        }
    },
    {
        name: "Beach Day",
        description: "Relaxed character enjoying a sunny beach day",
        settings: {
            "art-style": "Watercolor sketch",
            "clothing": "Bikini/swimsuit",
            "background": "Sunset beach",
            "lighting": "Sunset backlight",
            "mood": "Joyful",
            "pose": "Sitting casually",
            "effects": "Soft blur"
        }
    }
];

export function initializeTemplates() {
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

    // Clear advanced custom fields when applying a template
    const customPose = document.getElementById('custom-pose');
    const customBackground = document.getElementById('custom-background');
    const customPersonality = document.getElementById('custom-personality');
    if (customPose) customPose.value = '';
    if (customBackground) customBackground.value = '';
    if (customPersonality) customPersonality.value = '';

    // Show success message
    if (window.showToast) {
        window.showToast(`Applied template: ${template.name}`, 'success');
    }
    
    // Hide templates panel
    const templatesPanel = document.getElementById('templates-panel');
    if (templatesPanel) {
        templatesPanel.style.display = 'none';
    }
    
    // Update progress
    if (window.updateProgress) {
        window.updateProgress();
    }
}
