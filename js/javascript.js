const canvas = document.querySelector("section");
const btn = document.querySelector(".grid-reset");

function createCanvas(sides) {
    let proportion = 100 / sides;
    let totalSides = sides ** 2;

    removeCanvas();

    for(let i = 0; i < totalSides; i++) {
        const piece = document.createElement("div");
        piece.className = "piece";
        
        canvas.appendChild(piece);
    }

    document.documentElement.style.setProperty(`--proportion`, `${proportion}%`);
}

function removeCanvas() {
    const canvasPiece = document.querySelectorAll("div");
    
    canvasPiece.forEach((piece) => {
        canvas.removeChild(piece);
    });
}

function getRandomNum() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let r = getRandomNum();
    let g = getRandomNum();
    let b = getRandomNum();

    return `rgb(${r}, ${g}, ${b})`;
}

canvas.addEventListener("mouseenter", () => {
    const canvasPiece = document.querySelectorAll("div");

    canvasPiece.forEach((piece) => {
        piece.addEventListener("mouseenter", () => {
            piece.style.backgroundColor = getRandomColor();
        });
    }); 

    btn.classList.remove("invisible");
});

btn.addEventListener("mousedown", () => {
    let response = 0;
    do {
        response = +prompt("How many squares per side of the new grid would you like? We prefer less than or equal to 100.", 0);
    } while (response > 100 || response < 1 || Object.is(response, NaN));

    createCanvas(response);
});

createCanvas(16);