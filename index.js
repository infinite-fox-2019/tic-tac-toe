function generateTicTacToe() {
    let xy = [
        [0, 0], [1, 0], [2, 0],
        [0, 1], [1, 1], [2, 1],
        [0, 2], [1, 2], [2, 2],
    ]
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    let turnO = Math.floor(Math.random() * Math.floor(2)) === 0;
    let currentPlayer = '';
    for(let i = 0; i < 9; i++) {
        if(turnO) {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
        let randomXYIndex = Math.floor(Math.random() * Math.floor(xy.length));
        board[xy[randomXYIndex][0]][xy[randomXYIndex][1]] = currentPlayer;
        xy.splice(randomXYIndex, 1);

        if(i >= 4) {
            if(playerWins(currentPlayer, board)) {
                console.log(board);
                return `${currentPlayer} wins!`;
            }
        }
        turnO = !turnO;
    }

    return board;
}

function playerWins(player, board) {
    threeStrike = player + player + player;
    //check horizontal condition
    for(let i = 0; i < 3; i++) {
        let rowValues = '';
        for(let j = 0; j < 3; j++) {
            rowValues += board[i][j];
        }
        if(rowValues === threeStrike) {
            return true;
        }
    }

    //check vertical condition
    for(let i = 0; i < 3; i++) {
        let colValues = '';
        for(let j = 0; j < 3; j++) {
            colValues += board[j][i];
        }
        if(colValues === threeStrike) {
            return true;
        }
    }

    //check first diagonal condition
    let firstDiaValues = '';
    for(let i = 0; i < 3; i++) {
        firstDiaValues += board[i][i];
    }
    if(firstDiaValues === threeStrike) {
        return true;
    }

    //check second diagonal condition
    let secondDiaValues = '';
    for(let i = 0; i < 3; i++) {
        secondDiaValues += board[0 + i][2 - i];
    }
    if(secondDiaValues === threeStrike) {
        return true;
    }

    return false;
}

console.log(generateTicTacToe());
