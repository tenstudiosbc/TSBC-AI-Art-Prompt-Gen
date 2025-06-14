// Options data - reduced for better performance
export const optionsData = {
    artStyle: [
        "",
        "Painterly anime",
        "Semi-realistic anime",
        "Cyberpunk anime style",
        "Studio Ghibli-inspired",
        "Cel-shaded",
        "3D",
        "Photorealistic"
    ],
    
    age: [
        "",
        "Child",
        "Teen", 
        "Young adult",
        "Adult",
        "Middle-aged",
        "Elderly"
    ],
    
    gender: [
        "",
        "Woman",
        "Man",
        "Androgynous",
        "Non-binary",
        "Feminine-presenting",
        "Masculine-presenting"
    ],
    
    hairStyle: [
        "",
        "Long wavy hair",
        "Short spiky hair",
        "Medium-length layered hair",
        "Braided hair",
        "Pixie cut",
        "Tied ponytail",
        "Twin tails",
        "Messy bun",
        "Bob cut",
        "Undercut",
        "Loose Ponytail",
        "Short Hair"
    ],
    
    hairColor: [
        "",
        "Black",
        "Brown", 
        "Blonde",
        "Red",
        "Blue",
        "Green",
        "Pink",
        "Purple",
        "Silver",
        "White",
        "Lavender"
    ],
    
    eyeColor: [
        "",
        "Black",
        "Dark Brown",
        "Light Brown",
        "Hazel",
        "Green",
        "Blue",
        "Violet",
        "Silver",
        "Grey",
        "Heterochromia"
    ],
    
    bodyType: [
        "",
        "Slim",
        "Athletic",
        "Muscular",
        "Petite",
        "Curvy",
        "Average",
        "Tall",
        "Short",
        "Toned"
    ],
    
    mood: [
        "",
        "Happy",
        "Melancholic",
        "Mysterious",
        "Confident",
        "Dreamy",
        "Fierce",
        "Serene",
        "Playful",
        "Determined",
        "Flirty",
        "Sad",
        "Seductive"
    ],
    
    cameraAngle: [
        "",
        "Portrait shot",
        "Close-up",
        "Medium shot", 
        "Full body",
        "Low angle",
        "High angle",
        "Side profile",
        "Three-quarter view"
    ],
    
    lighting: [
        "",
        "Rim lighting",
        "Golden hour light",
        "Soft studio glow",
        "Neon cyberpunk glow",
        "Moonlit ambiance",
        "Fire-lit glow"
    ],
    
    background: [
        "",
        "Plain white background",
        "Cherry blossom trees",
        "Cyberpunk city",
        "Magical forest",
        "Futuristic skyline",
        "Ancient ruins",
        "Sunset beach",
        "Urban rooftop",
        "Enchanted garden",
        "Beachside House",
        "Downtown Streets",
        "Classroom",
        "Medival Town",
        "Castle Ballroom",
        "Boat",
        "Parking Lot",
        "Shop",
        "Boutique"
    ],
    
    clothing: [
        "",
        "Casual t-shirt",
        "Elegant dress",
        "Business suit",
        "Hoodie",
        "Kimono",
        "Leather jacket",
        "School uniform",
        "Cyberpunk outfit",
        "Streetwear",
        "Elegant Dress",
        "Tactical Uniform"
    ],
    
    clothingColor: [
        "",
        "Black",
        "White",
        "Red",
        "Blue",
        "Green",
        "Purple",
        "Pink",
        "Navy blue",
        "Golden",
        "Silver"
    ],
    
    faceAccessories: [
        "",
        "Glasses",
        "Sunglasses",
        "Eye patch",
        "Face mask",
        "Reading glasses",
        "Round glasses",
        "Cyberpunk visor"
    ],
    
    pose: [
        "",
        "Standing confidently",
        "Sitting casually",
        "Walking forward",
        "Arms crossed",
        "Hand on hip",
        "Fighting stance",
        "Dancing",
        "Looking over shoulder",
        "With gun"
    ],
    
    hairAccessory: [
        "",
        "Headband",
        "Hair clips",
        "Floral hairpiece",
        "Ribbons",
        "Tiara",
        "Cyberpunk hairpiece",
        "Bow"
    ],
    
    gunPose: [
        "",
        "Drawing a gun",
        "Aiming gun",
        "Holding gun at side",
        "Two-handed gun grip",
        "Dual wielding guns"
    ],
    
    effects: [
        "",
        "Soft blur",
        "Particle effects",
        "Depth of field",
        "Film grain",
        "Glitch effects",
        "Ethereal glow"
    ]
};

export function loadOptions() {
    Object.entries(optionsData).forEach(([key, options]) => {
        const sanitizedId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        const selectElement = document.getElementById(sanitizedId);
  
        if (selectElement) {
            // Debug: log found element ids
            console.log(`Found select element with id "${sanitizedId}"`);
            selectElement.innerHTML = '';
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option;
                optionElement.textContent = option;
                selectElement.appendChild(optionElement);
            });
        } else {
            console.warn(`No select element found with id "${sanitizedId}"`);
        }
    });
}
