const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');


let question = prompt('Choose the number of squares?');

while(question >= 100 || question == 1 || question < 1) {
    question = prompt('please choose a number between 2 and 100')
    if (question < 100) {
        question == question;
    }
}


function grid(){
    makeRows(question)
    makeColumns(question)
}

function makeRows (n) {
    for (let i = 0; i < n; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow';
    }
}

function makeColumns (cellNum) {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < cellNum; j++) {
            let newCell = document.createElement('div');
            newCell.style.width = (600/question) + 'px';
            newCell.style.height = (600/question) + 'px';
            rows[j].appendChild(newCell).className = 'cell';
        }
    }
}

grid()

Array.from(cells).forEach(cell => cell.addEventListener('mouseover', function(e){
    e.preventDefault();
    e.target.classList.add('colorChange');
    const btn = document.querySelector('#btn');
    btn.addEventListener('click', function(e){
        cell.classList.remove('colorChange')
    })
}))

