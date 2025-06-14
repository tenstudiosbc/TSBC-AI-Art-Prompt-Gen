// Visibility control for conditional elements
export function initializeVisibilityControls() {
    const genderSelect = document.getElementById("gender");
    const poseSelect = document.getElementById("pose");
    
    // Initialize visibility on page load
    toggleHairAccessory();
    toggleGunPose();
    
    // Add event listeners
    genderSelect.addEventListener("change", toggleHairAccessory);
    poseSelect.addEventListener("change", toggleGunPose);
}

function toggleHairAccessory() {
    const gender = document.getElementById("gender").value;
    const hairAccessoryContainer = document.getElementById("hair-accessory-container");
    
    if (gender === "Woman" || gender === "Feminine-presenting") {
        hairAccessoryContainer.classList.add("show");
    } else {
        hairAccessoryContainer.classList.remove("show");
    }
}

function toggleGunPose() {
    const pose = document.getElementById("pose").value;
    const gunPoseContainer = document.getElementById("gun-pose-container");
    
    if (pose === "With gun") {
        gunPoseContainer.classList.add("show");
    } else {
        gunPoseContainer.classList.remove("show");
    }
}