let grid = document.getElementById("grid");
for (let i = 0; i < 400; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.onmousedown = function() {
        pixel.classList.add("on");
    };
    pixel.onmouseover = function() {
        if (event.buttons === 1) {
            pixel.classList.add("on");
        }
    };
    grid.appendChild(pixel);
}

