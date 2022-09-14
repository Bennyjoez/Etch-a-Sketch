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
}

makeGrid(16, 16)

function changeColor() {
    this.style.backgroundColor = "gray";
}
const cells = document.querySelectorAll('div.cell');
cells.forEach(cell => cell.addEventListener('mouseover', changeColor)); 

const button = document.querySelector('button#numberOfSquares');
button.addEventListener('click', promptUser);

function promptUser() {
    gridContainer.innerHTML = '';
    const columns = prompt('How many Columns?', "");
    const rows = prompt('How many rows?', '')
    makeGrid(rows, columns);
}