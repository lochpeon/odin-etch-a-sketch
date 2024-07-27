const canvas = document.querySelector("main");
const btn = document.querySelector(".grid-reset");

for(let i = 0; i < 256; i++) {
    const piece = document.createElement("div");
    piece.className = "piece";
    
    canvas.appendChild(piece);
}

canvas.addEventListener("mouseenter", () => {
    const canvasPiece = document.querySelectorAll("div");

    canvasPiece.forEach((piece) => {
        piece.addEventListener("mouseenter", () => {
            piece.classList.add("hovered");
        });
    }); 

    btn.classList.remove("invisible");
});