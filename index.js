'use strict';
function generateBoard(row, col) {

    let result = [];

    for (let i = 0; i < row; i++) {
        let rowArray = [];
        for (let j = 0; j < col; j++) {
            rowArray.push(' ');
        }
        result.push(rowArray)
    }
    return result;
}


function ticTacToe() {

    let board = generateBoard(3, 3);

    let xo = ['X', 'O'];

    let previous;
    for (let i = 0; i < board.length ** 2; i++) {
        let col = board.length;
        let row = board.length;
        let randomRow = Math.floor(Math.random() * row);
        let randomCol = Math.floor(Math.random() * col);
        let first = Math.floor(Math.random() * 2)

        if (horizontalWin(board) !== undefined) {
            console.log(board);
            return horizontalWin(board);
        } else if (verticalWin(board) !== undefined) {
            console.log(board);
            return verticalWin(board);
        } else if (diagonalWin(board) !== undefined) {
            console.log(board);
            return diagonalWin(board);
        } else if (reverseDiagonalWin(board) !== undefined) {
            console.log(board);
            return reverseDiagonalWin(board);
        } else {

            if (i === 0) {
                previous = xo[first];
                board[randomCol][randomRow] = previous;
            } else if (board[randomCol][randomRow] !== ' ') {
                i--;
                previous = previous;
                continue;
            } else if (previous === xo[0]) {
                board[randomCol][randomRow] = xo[1];
                previous = xo[1];
            } else {
                board[randomCol][randomRow] = xo[0];
                previous = xo[0];
            }
        }

        if (horizontalWin(board) !== undefined) {
            console.log(board);
            return horizontalWin(board);
        } else if (verticalWin(board) !== undefined) {
            console.log(board);
            return verticalWin(board);
        } else if (diagonalWin(board) !== undefined) {
            console.log(board);
            return diagonalWin(board);
        } else if (reverseDiagonalWin(board) !== undefined) {
            console.log(board);
            return reverseDiagonalWin(board);
        }
    }
    console.log(board);
    return 'Draw';
}




console.log(ticTacToe());

function horizontalWin(array) {
    let winner;
    for (let i = 0; i < array.length; i++) {
        let compared = array[i][0];
        let isWon = false;
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === compared) {
                isWon = true;
                continue;
            } else {
                isWon = false;
                break;
            }

        }
        if (isWon === true && compared !== ' ') winner = compared;
    }
    return winner;
}

function verticalWin(array) {
    let winner;
    for (let i = 0; i < array.length; i++) {
        let compared = array[0][i];
        let isWon = false;
        for (let j = 0; j < array[i].length; j++) {
            if (array[j][i] === compared) {
                isWon = true;
                continue;
            } else {
                isWon = false;
                break;
            }
        }
        if (isWon === true && compared !== ' ') winner = compared;
    }
    return winner;
}


function diagonalWin(array) {
    let winner;
    let isWon = false;
    let compared = array[0][0];
    for (let i = 0; i < array.length; i++) {
        if (compared === array[i][i]) {
            isWon = true;
            continue;
        } else {
            isWon = false;
            break;
        }
    }
    if (isWon === true && compared !== ' ') winner = compared;
    return winner;
}

function reverseDiagonalWin(array) {
    let winner;
    let isWon = false;
    let compared = array[0][array.length - 1];
    for (let i = 0; i < array.length; i++) {
        if (array[i][array.length - 1 - i] === compared) {
            isWon = true;
            continue;
        } else {
            isWon = false;
            break;
        }
    }
    if (isWon === true && compared !== ' ') winner = compared;
    return winner;
}

/* console.log(horizontalWin([
    ['X', 'X', 'X'],
    ['O', 'X', 'O'],
    ['O', 'O', 'O']
]));

console.log(horizontalWin([
    ['O', 'X', 'X'],
    ['O', 'X', 'O'],
    ['X', 'X', 'X']
]));

console.log(horizontalWin([
    ['O', 'X', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O']
])); */