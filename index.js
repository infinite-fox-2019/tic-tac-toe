function generateTicTacToe() {
    let values = ['X', 'X', 'X', 'X', 'X', 'O', 'O', 'O', 'O', 'O'];
    let result = [[], [], []];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let randomIndex = Math.floor(Math.random() * Math.floor(values.length));
            result[i][j] = values[randomIndex];
            values.splice(randomIndex, 1);
        }
    }
    
    return result;
}

console.log(generateTicTacToe());
