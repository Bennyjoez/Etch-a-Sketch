const gridContainer = document.querySelector('.container')
function makeGrid(rows, columns) {
    for(let c = 0; c < rows * columns; c++){
        const cell = document.createElement('div')
        cell.style.border = '1px solid black'
        cell.classList.add('cell')
        gridContainer.appendChild(cell)
    }
}

makeGrid(16, 16)

function changeColor(e) {
    e.target.style.backgroundColor = "gray"
}
const cells = document.querySelectorAll('div.cell')
cells.forEach(cell => cell.addEventListener('mouseover', changeColor))