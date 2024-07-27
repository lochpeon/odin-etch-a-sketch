const canvas = document.querySelector("main");

for(let i = 0; i < 256; i++) {
    const canvasPiece = document.createElement("div");
    canvasPiece.className = "piece";
    
    canvas.appendChild(canvasPiece);
}