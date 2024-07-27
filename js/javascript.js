const canvas = document.querySelector("main");

for(let i = 0; i < 256; i++) {
    const piece = document.createElement("div");
    piece.className = "piece";
    
    canvas.appendChild(piece);
}

canvas.addEventListener("mouseenter", () => {
    const canvasPiece = document.querySelectorAll("div");

    canvasPiece.forEach((piece) => {
        piece.addEventListener("mouseenter", () => {
            console.log("hovered");
            piece.classList.add("hovered");
        });
    }); 
});