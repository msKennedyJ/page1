let grid = document.getElementById("grid");
for (let i = 0; i < 400; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.onclick = function() {
        pixel.classList.toggle("on");
    };
    grid.appendChild(pixel);
}
