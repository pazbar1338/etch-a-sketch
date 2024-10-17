const sketchContainer = document.querySelector('#sketch-container');

const setDefaultColor = () => {
    const rows = document.querySelectorAll('.row');
    rows.forEach(function (row) {
    row.addEventListener('mouseover', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        row.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
})};

const pencilBtn = document.querySelector('#pencil-btn');

const setPencilStyle = () => {

    resetGrid();
    const rows = document.querySelectorAll('.row');
    rows.forEach(function (row) {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = "black";
        //row.style.opacity
        
    });
})};

pencilBtn.addEventListener("click", setPencilStyle);

const createDefaultGrid = function () {

    for (let i = 0; i < 16; i++) {
        let column = document.createElement("div");
        sketchContainer.appendChild(column);
        column.classList.add("column");

        for (let j = 0; j < 16; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }
    }
    setDefaultColor();
}
createDefaultGrid();


const sizeBtn = document.querySelector('#grid-size-btn'); //create userGrid
sizeBtn.addEventListener("click", () => { 

    let userCol = +prompt(`How many COLUMNS do you want the grid to have?`, 50);
    while ((isNaN(userCol)) || (userCol > 100)) {
        userCol = +prompt(`[COLUMNS] Please, introduce a number smaller than 100`, 50);
    };

    let userRow = +prompt(`How many ROWS do you want the grid to have?`, 50);
    while ((isNaN(userRow)) || (userRow > 100)) {
        userRow = +prompt(`[ROWS] Please, introduce a number smaller than 100`, 50);
    };  

    const createUserGrid = function () {

        deleteGrid();

        for (let i = 0; i < userCol; i++) {
            let column = document.createElement("div");
            column.classList.add("column");
            sketchContainer.appendChild(column);

            for (let j = 0; j < userRow; j++) {
                let row = document.createElement("div");
                row.classList.add("row");
                column.appendChild(row);
            }
        }
        setDefaultColor(); 
    }
    createUserGrid();
});

const deleteGrid = () => {
    const columns = document.querySelectorAll('.column');
    columns.forEach(function (column) {
        column.remove();
    });
};

const resetGrid = function () {
    const rows = document.querySelectorAll('.row');
    rows.forEach(function (row) {
        row.style.backgroundColor = "";
        // row.classList.remove("colored");
    });
};

const resetBtn = document.querySelector('#grid-reset-btn');
resetBtn.addEventListener("click", resetGrid);
    
