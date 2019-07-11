console.log('js ready')
let gameBoard;
const huPlayer = "X";
const aiPlayer = "O";
const cells = document.querySelectorAll('.cell');
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];


startGame();

function startGame() {
    gameBoard = Array.from(Array(9).keys());
    for (i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click', turnClick, false);
    }
}

function turnClick(square) {
    turn(square.target.id, huPlayer);
}

function turn(squareId, player) {
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
    let gameWon = checkWin(gameBoard, player);
    if(gameWon) gameOver(gameWon);
}

function checkWin(board, player){
    let currentPlay = board.reduce((a, e, i) => e === player ? a.concat(i) : a, []);
    let gameWon = null;
    for(let [index, win] of winCombos.entries()) {
        if (win.every(elem => currentPlay.indexOf(elem) > -1)) {
            gameWon = {index: index, player: player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for (let index of winCombos[gameWon.index]) {
        document.getElementById(index).style.backgroundColor =
        gameWon.player == huPlayer ? "blue" : "red";
    } console.log('blue')
    for (let i=0; i < cells.length; i++){
        cells[i].removeEventListener('click', turnClick, false);
    }
}