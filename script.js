window.onload = () => {
    makeGrid(size)
}

let size = 20;

const divContainer = document.querySelector('.container')


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