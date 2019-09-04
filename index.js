function ticTacToe(dimention) {
    let result = [];
    let arrX = 0
    let arrO = 0;
    for (let i = 0; i < dimention; i++) {
        result.push([]);
        for (let j = 0; j < dimention; j++) {
            let numbers = Math.floor(Math.random() * (9 - 0)) + 0;
            result[i].push(numbers);
            if (result[i][j] % 2 === 0) {
                result[i][j] = 'X';
                arrX++;
                if (arrX > 4) {
                    result[i][j] = 'O';
                }
            } else {
                result[i][j] = 'O';
                arrO++;
                if (arrO > 4) {
                    result[i][j] = 'X';
                }
            }
        }
    }
    return result;
}
console.log(ticTacToe(3));
