var gameBoard;
const huPlayer = "X";
const aiPlayer = "O";
const boxes = document.querySelectorAll('.box');

startGame();

function startGame() {
    gameBoard = Array.from(Array(9).keys());
    for (i = 0; i < boxes.length; i++) {
        boxes[i].innerText = '';
        boxes[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    turn(square.target.id, huPlayer);
}

function turn(squareID, player) {
    gameBoard[squareID] = player;
    document.getElementById(squareID).innerText = player;
}