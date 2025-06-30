let isDrawing = false;
const colorPicker = document.querySelector("#favcolor");
let color = colorPicker.value;
const container = document.querySelector(".container");


function createPixels(pixelCount) {
    for (let i = 0; i < pixelCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < pixelCount; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    if (e.button === 0) {
        isDrawing = true;
    }
})
container.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        if (e.target.classList.contains("pixel")) {
            e.target.style.background = color;
        }
    }
})
container.addEventListener("mouseup", (e) => {
    isDrawing = false;
})

const button = document.querySelector("#sizeBtn");
button.addEventListener("click", (e) => {
    const amountOfPixelsInput = document.querySelector("#canvas-size");
    const amountOfPixels = parseInt(amountOfPixelsInput.value);
    if (amountOfPixels > 100 || amountOfPixels < 0) {
        alert("Size should be between 1 and 100");
    } else {
        reset();
        createPixels(amountOfPixels)
    }
})

function reset() {
    container.innerHTML = "";
}

colorPicker.addEventListener("change", (e) => {
    color = colorPicker.value;
})

createPixels(16);

