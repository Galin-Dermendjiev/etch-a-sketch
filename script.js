window.onload = () => {
    initialize(size)
}

let size = 20;

const divContainer = document.querySelector('.container')
const scrollbar = document.querySelector('.scroll')
const textSize = document.querySelector('.textSize')


scrollbar.onmousemove = () => changeSizeText(scrollbar.value)
scrollbar.onchange = (value) => initialize(scrollbar.value)

function changeSize(newValue) {
  size = newValue
}

function initialize(value) {
  clearGrid()
  changeSize(value)
  changeSizeText()
  makeGrid(scrollbar.value)
}

function changeSizeText(){
    textSize.innerHTML = size + ' x ' + size;
}

function makeGrid(size) {
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    divContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    for (let i = 0; i < size * size; i++) {
      const element = document.createElement('div');
      element.classList.add('box')
      element.classList.add('grid')      
      divContainer.appendChild(element);
    }
    
}

function clearGrid(){
    divContainer.innerHTML = ''
}