document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generate-btn");
    const outputImage = document.getElementById("output-image");
    const loadingOverlay = document.getElementById("loading-overlay");

    generateBtn.addEventListener("click", async () => {
        loadingOverlay.classList.add("show");
        outputImage.src = "/assets/placeholder.png"; // Reset to placeholder

        try {
            const response = await fetch("/api/generate");
            const data = await response.json();

            if (data.imageUrl) {
                outputImage.src = data.imageUrl;
            } else {
                console.error("Error: No image URL in response.");
                outputImage.src = "/assets/placeholder.png"; // Show placeholder on error
            }
        } catch (error) {
            console.error("Error fetching generated image:", error);
            outputImage.src = "/assets/placeholder.png"; // Show placeholder on error
        } finally {
            loadingOverlay.classList.remove("show");
        }
    });
});