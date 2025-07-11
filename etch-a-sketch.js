let isDrawing = false;
let isErasingTime = false;
let isRainbowTime = false;
let lastColoredPixel = null;

const colorPicker = document.querySelector("#color-picker");
let color = colorPicker.value;
const container = document.querySelector(".pixel-container");


function createPixels(pixelCount) {
    for (let i = 0; i < pixelCount; i++) {
        const row = document.createElement("div");
        row.classList.add("pixel-row");
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
    if (e.target.classList.contains("pixel")) {
        colorPixel(e.target);
    }
})
container.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        if (e.target.classList.contains("pixel")) {
            colorPixel(e.target);
        }
    }
})
container.addEventListener("mouseup", () => {
    isDrawing = false;
    lastColoredPixel = null;
})

const button = document.querySelector("#sizeBtn");
button.addEventListener("click", () => {
    const amountOfPixelsInput = document.querySelector("#canvas-size-input");
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

colorPicker.addEventListener("change", () => {
    color = colorPicker.value;
})

function colorPixel(pixel) {
    if (pixel !== lastColoredPixel) {
        if (isErasingTime) {
            pixel.style.background = "rgb(255, 255, 255)"
        } else if (isRainbowTime) {
            const randomRBGValue = () => {
                return Math.floor(Math.random() * 256);
            }
            const redValue = randomRBGValue()
            const greenValue = randomRBGValue();
            const blueValue = randomRBGValue();

            pixel.style.background = `rgb(${redValue}, ${greenValue}, ${blueValue}`;
        } else {
            pixel.style.background = color
        }
        lastColoredPixel = pixel;
    }
}

const rainbowBtn = document.querySelector("#rainbowBtn");
rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.toggle('has-star');
    isRainbowTime = rainbowBtn.classList.contains("has-star");
})

const eraserBtn = document.querySelector("#eraserBtn");
eraserBtn.addEventListener("click", () => {
    if (!isErasingTime) {
        isErasingTime = true;
        eraserBtn.style.opacity = "1";
    } else {
        eraserBtn.style.opacity = "0.5";
        isErasingTime = false;

    }
})
createPixels(16);

