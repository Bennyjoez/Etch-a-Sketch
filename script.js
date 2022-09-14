const gridContainer = document.querySelector('.container')

function makeGrid(rows, columns) {
    gridContainer.style.setProperty('--grid-rows', rows)
    gridContainer.style.setProperty('--grid-columns', columns)
    for(let c = 0; c < (rows * columns); c++){
        const cell = document.createElement('div');
        cell.style.border = '1px solid black';
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
    const cells = document.querySelectorAll('div.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor)); 
}

makeGrid(16, 16)

function changeColor() {
    this.style.backgroundColor = "gray";
}

const button = document.querySelector('button#numberOfSquares');
button.addEventListener('click', promptUser);

function promptUser() {
    const removed = Array.from(gridContainer.children)
    for(let i = 0; i < removed.length; i++) {
        gridContainer.removeChild(removed[i])
    }

    const columns = prompt('How many Rows/Columns?', "");
    const rows = columns
    makeGrid(rows, columns);
}