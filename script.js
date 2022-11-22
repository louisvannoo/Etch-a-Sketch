let squareNumber = 16*16;
let squareDiv;
const containerDiv = document.querySelector("div.container");
const containerDimension = 900;
const res = 16;



for (let i =0; i<squareNumber; i++) {
    squareDiv = document.createElement('div');
    squareDiv.classList.add('square'); 
    squareDiv.style.cssText = `height: ${containerDimension/res}px; width: ${containerDimension/res}px`;
    containerDiv.appendChild(squareDiv);
}

containerDiv.style.cssText = `height: ${containerDimension}px; width: ${containerDimension}px`;

containerDiv.addEventListener("mouseover", function( event ) {
    event.target.classList.add('blue')})
