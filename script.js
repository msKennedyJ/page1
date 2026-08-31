// Find the grid
let grid = document.getElementById("grid");

// Make 400 pixels
for (let i = 0; i < 400; i++) {

    // Create a pixel
    let pixel = document.createElement("div");

    // Give the pixel a class
    pixel.className = "pixel";

    // When the pixel is clicked
    pixel.onclick = function() {

        // Turn it on or off
        pixel.classList.toggle("on");
    };

    // Add the pixel to the grid
    grid.appendChild(pixel);
}
