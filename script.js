var cells = document.querySelectorAll('.cell'),
    X_or_O = 0;
var turn = document.getElementById("turn");

turn.innerHTML = 'Play with a friend';

playGame();

function getWinner() {
    if (c1.innerHTML !== "" && c1.innerHTML === c2.innerHTML && c1.innerHTML === c3.innerHTML)
        selectWinnerCells(c1, c2, c3);
    if (c1.innerHTML !== "" && c1.innerHTML === c4.innerHTML && c1.innerHTML === c7.innerHTML)
        selectWinnerCells(c1, c4, c7);        
    if (c1.innerHTML !== "" && c1.innerHTML === c5.innerHTML && c1.innerHTML === c9.innerHTML)
        selectWinnerCells(c1, c5, c9);
    if (c2.innerHTML !== "" && c2.innerHTML === c5.innerHTML && c2.innerHTML === c8.innerHTML)
        selectWinnerCells(c2, c5, c8);
    if (c3.innerHTML !== "" && c3.innerHTML === c6.innerHTML && c3.innerHTML === c9.innerHTML)
        selectWinnerCells(c3, c6, c9);
    if (c3.innerHTML !== "" && c3.innerHTML === c5.innerHTML && c3.innerHTML === c7.innerHTML)
        selectWinnerCells(c3, c5, c7);
    if (c4.innerHTML !== "" && c4.innerHTML === c5.innerHTML && c4.innerHTML === c6.innerHTML)
        selectWinnerCells(c1, c4, c7);
    if (c7.innerHTML !== "" && c7.innerHTML === c8.innerHTML && c7.innerHTML === c9.innerHTML)
        selectWinnerCells(c7, c8, c9);
}

function playGame() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = function () {
            if (this.innerHTML !== "X" && this.innerHTML !== "O") {
                if (X_or_O % 2 === 0) {
                    this.innerHTML = "X";
                    turn.innerHTML = "Your turn : O";
                    getWinner();
                    X_or_O += 1;
                } else {
                    this.innerHTML = "O";
                    turn.innerHTML = "Your turn : X";
                    getWinner();
                    X_or_O += 1;
                }
            }
        }
    };
}

function selectWinnerCells(winCell1, winCell2, winCell3) {
    winCell1.classList.add("win");
    winCell2.classList.add("win");
    winCell3.classList.add("win");
    turn.innerHTML = winCell1.innerHTML + " player won";
    turn.style.fontWeight = "bold";
    for (var i = 0; i < cells.length; i++) {
        this.cells[i].onclick = null;
    }
}

function replay() {
    for (i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        turn.innerHTML = 'Play with a friend';
        turn.style.fontWeight = "normal";
        cells[i].classList.remove('win');
        playGame();
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');
    var c4 = document.getElementById('c4');
    var c5 = document.getElementById('c5');
    var c6 = document.getElementById('c6');
    var c7 = document.getElementById('c7');
    var c8 = document.getElementById('c8');
    var c9 = document.getElementById('c9');

    var turn = document.getElementById("turn");
});