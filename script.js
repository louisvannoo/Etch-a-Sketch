let squareDiv;
const containerDiv = document.querySelector("div.container");
const containerDimension = 900;
const rangeRes = document.querySelector("input#res");
let res = 50;
let squareNumber = res*res;
let allSquares;


function genGrid() {
    for (let i =0; i<squareNumber; i++) {
    squareDiv = document.createElement('div');
    squareDiv.classList.add('square'); 
    squareDiv.style.cssText = `height: ${containerDimension/res}px; width: ${containerDimension/res}px`;
    containerDiv.appendChild(squareDiv);
}
}

genGrid();

containerDiv.style.cssText = `height: ${containerDimension}px; width: ${containerDimension}px`;

containerDiv.addEventListener("mouseover", function( event ) {
    event.target.classList.add('blue')})

const resetButton = document.querySelector("button")

resetButton.addEventListener("click", () => {
    res = rangeRes.value;
    console.log(res)
    squareNumber = res*res;
    allSquares = document.querySelectorAll("div.square");
    allSquares.forEach(square => {
        containerDiv.removeChild(square)
    });
    genGrid();
})