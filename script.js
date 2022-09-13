const gridContainer = document.querySelector('.container')
function makeGrid(rows, columns) {
    for(let c = 0; c < rows * columns; c++){
        const cell = document.createElement('div')
        cell.style.border = '1px solid black'
        cell.innerText = `C${c + 1}`
        gridContainer.appendChild(cell)
    }
}

makeGrid(16, 16)