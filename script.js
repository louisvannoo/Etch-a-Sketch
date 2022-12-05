const CONTAINER_DIM = 800;

const containerDiv = document.querySelector("div.container");
const inputResolution = document.querySelector("input#res");
const resetButton = document.querySelector("button#reset");
const colorSelector = document.querySelector("input#colorSelector");
const multicolorCheckbox = document.querySelector("input#multicolor")

let randomR;
let randomG;
let randomB;
let mouseDown = false;
let color = colorSelector.value;

document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
containerDiv.addEventListener("mouseover", changeColor);
containerDiv.addEventListener("mouseover", changeColor);
resetButton.addEventListener("click", resetGrid);

function genGrid(resolution) {
    for (let i =0; i<resolution*resolution; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square'); 
    squareDiv.style.cssText = `height: ${CONTAINER_DIM/resolution}px; width: ${CONTAINER_DIM/resolution}px`;
    containerDiv.appendChild(squareDiv);
    }
}

function cleanGrid(){
    containerDiv.innerHTML = '';
}

function changeColor(e){
    if (e.type === 'mouseover' && mouseDown && e.target != containerDiv) {
        if (multicolorCheckbox.checked) {
            randomR = Math.round(Math.random() * 256);
            randomG = Math.round(Math.random() * 256);
            randomB = Math.round(Math.random() * 256);
            color = `rgb(${randomR}, ${randomG}, ${randomB})`
        }
        else {color = colorSelector.value}
        e.target.style.backgroundColor = color;
    }
}

function resetGrid(){
    cleanGrid();
    genGrid(inputResolution.value);
}


window.onload = () => {
    containerDiv.style.cssText = `height: ${CONTAINER_DIM}px; width: ${CONTAINER_DIM}px`;
    genGrid(inputResolution.value)
}