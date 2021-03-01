/*-----------------------------------Tic-Tac-Toe Game logic------------------------------------------------------*/

let currentPlayer = 'X';

let display = document.getElementById('status2');
function fill(number) {
    let board = document.getElementById('game-cell' + number);

    if (board.innerHTML == "") {
        board.innerHTML = currentPlayer;
        checkPlayer();

    }

    else {

        if (tie()) {
            display.innerHTML = "Tie/Game ended";
            reset();
        }

    }

}

function checkPlayer() {

    if (currentPlayer == 'X') {

        if (winner()) {
            display.innerHTML = "Winner is " + currentPlayer;
            reset();
        }
        else {
            currentPlayer = 'O';
            display.innerHTML = "Next turn: Player " + currentPlayer;
        }
    }
    else {
        if (winner()) {
            display.innerHTML = "Winner is Player " + currentPlayer;
            reset();
        }
        else {
            currentPlayer = 'X';
            display.innerHTML = "Next turn: Player " + currentPlayer;
        }
    }
}

function reset() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game-cell' + i).innerHTML = "";
    }
}

function restart() {
    for (var i = 0; i < 9; i++) {
        document.getElementById('game-cell' + i).innerHTML = "";
    }

    currentPlayer = 'X';
    display.innerHTML = "Let's Play";
}

function getDiv(num) {
    return document.getElementById('game-cell' + num).innerHTML;
}

function checkDivs(a, b, c, m) {
    if (getDiv(a) == m && getDiv(b) == m && getDiv(c) == m) {
        return true;
    }
    else {
        return false;
    }
}
function winner() {

    if (checkDivs(0, 1, 2, currentPlayer) || checkDivs(3, 4, 5, currentPlayer)
        || checkDivs(6, 7, 8, currentPlayer) || checkDivs(0, 3, 6, currentPlayer)
        || checkDivs(1, 4, 7, currentPlayer) || checkDivs(2, 5, 8, currentPlayer)
        || checkDivs(0, 4, 8, currentPlayer) || checkDivs(2, 4, 6, currentPlayer)) {
        return true;
    }
    else {
        return false;

    }


}

function tie() {
    for (var i = 0; i < 9; i++) {
        if (getDiv(i) != "") {
            return true;
        };
    }
}
















