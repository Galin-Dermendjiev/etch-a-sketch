window.onload = () => {
    initialize(defaultSize)
}

const divContainer = document.querySelector('.container')
const scrollbar = document.querySelector('.scroll')
const textSize = document.querySelector('.textSize')
const colorBtn = document.querySelector('.colorBtn')
const rgbBtn = document.querySelector('.rgbBtn')
const eraserBtn = document.querySelector('.eraserBtn')
const clearBtn = document.querySelector('.clearBtn')
const colorPicker = document.querySelector('.colorPicker')

let defaultSize = scrollbar.value;
let color = colorPicker.value;
let mode = 'color'


scrollbar.onmousemove = () => changeSizeText(scrollbar.value)
scrollbar.onchange = () => initialize(scrollbar.value)
colorBtn.onclick = () => changeMode('color')
rgbBtn.onclick = () => changeMode('rgb')
eraserBtn.onclick = () => changeMode('eraser')
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
  changeMode(mode)
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
  if (mode == 'color') {
    if(e.type == 'mouseover' && mouseDown)
      e.target.style.backgroundColor = color
  }
  else if(mode == 'rgb'){
    if(e.type == 'mouseover' && mouseDown){
      const randR = Math.floor(Math.random() * 256)
      const randG = Math.floor(Math.random() * 256)
      const randB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`
    }
      
  }
  else if(mode == 'eraser'){
    if(e.type == 'mouseover' && mouseDown)
      e.target.style.backgroundColor = '#ffffff'
  }
  
}

function newColor(newColor) {
  color = newColor
}

function changeMode(newMode) { 
  deactivateButton(mode)
  mode = newMode
  activateButton(mode)
}

function activateButton(mode){
  switch (mode) {
    case 'color':
      colorBtn.classList.add('active')
      break;
    case 'rgb':
      rgbBtn.classList.add('active')
      break;
    case 'eraser':
      eraserBtn.classList.add('active')
      break;
  }
}

function deactivateButton(mode){
  switch (mode) {
    case 'color':
      colorBtn.classList.remove('active')
      break;
    case 'rgb':
      rgbBtn.classList.remove('active')
      break;
    case 'eraser':
      eraserBtn.classList.remove('active')
      break;
  }

}