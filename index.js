function ticTacToe () {
    let ticTacToeArr = 
    [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ];
    const lib = 
    [
        ['X','O','X','O','X','O','X','O','X'],
        ['O','X','O','X','O','X','O','X','O']
    ];
    let randomXO = lib[Math.floor(Math.random() * 2)];
    while (true) {
        let indeksI = Math.floor(Math.random() * 3);
        let indeksJ = Math.floor(Math.random() * 3);
        if (ticTacToeArr[indeksI][indeksJ] === ' ') {
            ticTacToeArr[indeksI][indeksJ] = randomXO[0];
            randomXO = randomXO.slice(1);
        } else if (checkWinner(ticTacToeArr) != '') {
            for (let i = 0; i < ticTacToeArr.length; i++) {
                console.log(ticTacToeArr[i]);
            }
            return checkWinner(ticTacToeArr);
        } else if (randomXO.length === 0) {
            for (let i = 0; i < ticTacToeArr.length; i++) {
                console.log(ticTacToeArr[i]);
            }
            return 'DRAW!'
        }
    }
}
function checkWinner (ticTacToeArr) {
    for (let i = 0; i < 3; i++) {
        if(ticTacToeArr[i][0] === ticTacToeArr[i][1] && ticTacToeArr[i][1] == ticTacToeArr[i][2] && ticTacToeArr[i][0] != ' ') {
            return `${ticTacToeArr[i][0]} is The Winner!`            
        } else if(ticTacToeArr[0][i] === ticTacToeArr[1][i] && ticTacToeArr[1][i] == ticTacToeArr[2][i] && ticTacToeArr[0][i] != ' ') {
            return `${ticTacToeArr[0][i]} is The Winner!`            
        } else if(ticTacToeArr[0][0] === ticTacToeArr[1][1] && ticTacToeArr[1][1] == ticTacToeArr[2][2] && ticTacToeArr[0][0] != ' ') {
            return `${ticTacToeArr[0][0]} is The Winner!`            
        } else if(ticTacToeArr[0][2] === ticTacToeArr[1][1] && ticTacToeArr[1][1] == ticTacToeArr[2][0] && ticTacToeArr[0][2] != ' ') {
            return `${ticTacToeArr[0][2]} is The Winner!`            
        }
    }
    return '';
}
console.log(ticTacToe());

