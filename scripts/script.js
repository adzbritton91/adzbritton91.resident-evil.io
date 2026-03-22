// Grab buttons and content once
const starsButton = document.querySelector("#starsButton");
const umbrellaButton = document.querySelector("#umbrellaButton");

const umbrellaContent = document.querySelector("#umbrellaContent");
const starsContent = document.querySelector("#starsContent");

// Function to switch modes
function switchMode(showStars) {
    if (showStars) {
        umbrellaContent.classList.add("hidden");
        starsContent.classList.remove("hidden");

        document.body.classList.add("stars");
        document.body.classList.remove("umbrella");
    } else {
        umbrellaContent.classList.remove("hidden");
        starsContent.classList.add("hidden");

        document.body.classList.add("umbrella");
        document.body.classList.remove("stars");
    }

    // Scroll to top so the change is visible
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Attach events
starsButton.addEventListener("click", () => switchMode(true));
umbrellaButton.addEventListener("click", () => switchMode(false));