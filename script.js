let squareNumber = 160*160;
let squareDiv;
const containerDiv = document.querySelector("div.container");
const containerDimension = 900;
const res = 160;
let allSquares;



for (let i =0; i<squareNumber; i++) {
    squareDiv = document.createElement('div');
    squareDiv.classList.add('square'); 
    squareDiv.style.cssText = `height: ${containerDimension/res}px; width: ${containerDimension/res}px`;
    containerDiv.appendChild(squareDiv);
}

containerDiv.style.cssText = `height: ${containerDimension}px; width: ${containerDimension}px`;

containerDiv.addEventListener("mouseover", function( event ) {
    event.target.classList.add('blue')})

const resetButton = document.querySelector("button")

resetButton.addEventListener("click", () => {
    allSquares = document.querySelectorAll("div.square")
    allSquares.forEach(square => {
        square.classList.remove('blue')
    });
})