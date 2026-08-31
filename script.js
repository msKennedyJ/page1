let grid = document.getElementById("grid");
let drawing = false;
let drawingOn = true;
for (let i = 0; i < 400; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.onmousedown = function() {
        drawing = true;
        drawingOn = !pixel.classList.contains("on");
        pixel.classList.toggle("on");
    };
    pixel.onmouseover = function() {
        if (drawing) {
            if (drawingOn) {
                pixel.classList.add("on");
            } else {
                pixel.classList.remove("on");
            }
        }
    };
    grid.appendChild(pixel);
}
document.onmouseup = function() {
    drawing = false;
};

