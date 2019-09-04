const moves = [
    ['x','o','x','o','x','o','x','o','x'],
    ['o','x','o','x','o','x','o','x','o']
]

function tictactoe (moves) {
    let turns = moves[Math.floor(Math.random() * 2)]
    let board = [];

    for(let i = 0; i < 3; i++) {
        let tempBoard = []
        for(let j = 0; j < 3; j++) {
            tempBoard.push(' ');
        }
        board.push(tempBoard);
    }

    let randomI = 0;
    let randomJ = 0;

    while(true) {
        randomI = Math.floor(Math.random()*3);
        randomJ = Math.floor(Math.random()*3);
        if(board[randomI][randomJ] == ' ') {
            board[randomI][randomJ] = turns[0];
            turns = turns.slice(1);
        }
        if(winnerChecker(board) != '') {
            for(let i = 0; i < board.length; i++) {
                console.log(board[i]);
            }
            return winnerChecker(board);
        }
        if(turns.length == 0) {
            console.log(board);
            return draw;
        }
    }
}

function winnerChecker(board) {
    for(let i = 0; i < 3; i++) {
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] != ' ') {
            return `${board[i][0]} Won!`;
        }
    }
    for(let i = 0; i < 3; i++) {
        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] != ' ') {
            return `${board[0][i]} Won!`;
        }
    }
    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
        return `${board[0][0]} Won!`
    }
    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '){
        return `${board[0][2]} Won!`
    }
    return ''
}

console.log(tictactoe(moves))