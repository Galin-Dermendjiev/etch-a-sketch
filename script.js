window.onload = () => {
    initialize(defaultSize)
}

const divContainer = document.querySelector('.container')
const scrollbar = document.querySelector('.scroll')
const textSize = document.querySelector('.textSize')
const clearBtn = document.querySelector('.clearBtn')
const colorPicker = document.querySelector('.colorPicker')

let defaultSize = scrollbar.value;
let color = colorPicker.value;


scrollbar.onmousemove = () => changeSizeText(scrollbar.value)
scrollbar.onchange = () => initialize(scrollbar.value)
clearBtn.onclick = () => initialize(scrollbar.value)
colorPicker.onchange = () => newColor(colorPicker.value)

function changeSize(newValue) {
  defaultSize = newValue
}

// initializing grid
function initialize(value) {
  clearGrid()
  changeSize(value)
  changeSizeText(value)
  makeGrid(value)
}

function changeSizeText(size){
    textSize.innerHTML = size + ' x ' + size;
}

function makeGrid(size) {
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i = 0; i < size * size; i++) {
      const element = document.createElement('div');
      element.classList.add('grid')   
      element.addEventListener('mouseover', changeColor)
      element.addEventListener('click', changeColor)   
      divContainer.appendChild(element);
    }
    
}

function clearGrid(){
    divContainer.innerHTML = ''
}

//color changing
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true}
document.body.onmouseup = () => {mouseDown = false}

function changeColor(e) {
  if(e.type == 'mouseover' && mouseDown)
    e.target.style.backgroundColor = color
  
}

function newColor(newColor) {
  color = newColor
}