// Varuables
const pixelTable = document.querySelector('#pixelCanvas');
const inputWidth = document.querySelector('#inputWidth');
const inputHeight = document.querySelector('#inputHeight');
const submitBtn = document.querySelector('#inputSubmit');


// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(r, c) {
    // Your code goes here!
    // console.log(inputWidth.value);
    console.log(r + " " + c);
    for (let i = 1; i <= r; i++) {
        let tableRow = document.createElement("tr");
        let tr = pixelTable.appendChild(tableRow);
        // console.log(i);
        for (let j = 1; j <= c; j++) {
            let tableCol = document.createElement("td");
            tr.appendChild(tableCol);
            // console.log(j);
        }
    }
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let r = inputWidth.value;
    let c = inputHeight.value;
    makeGrid(r, c);
});