let isDrawing = false;

function createPixels(pixelCount) {
    const container = document.querySelector(".container");
    container.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (e.button === 0) {
            isDrawing = true;
        }
    })
    container.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            if (e.target.classList.contains("pixel")) {
                e.target.style.background = "black";
            }
        }
    })
    container.addEventListener("mouseup", (e) => {
        isDrawing = false;
    })


    for (let i = 0; i < pixelCount; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < pixelCount; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            // pixel.addEventListener("mouseenter", (e) => {
            //     if (isDrawing) {
            //         pixel.style.background = "black";
            //     }
            // })
            // pixel.addEventListener("mousedown", (e) => {
            //     if (e.button === 0) {
            //         pixel.style.background = "black";
            //     }
            // })
            row.appendChild(pixel);
        }
        container.appendChild(row);
    }
}

createPixels(50);

