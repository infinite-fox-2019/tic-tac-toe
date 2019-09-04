function tictactoe() {
    let arrays = [[], [], []];
    let X0array = ['X', '0'];
    let counterX = 0;
    let counter0 = 0;
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (counterX == 5) {
                arrays[i].push('0');
            } else if (counter0 == 5) {
                arrays[i].push('X');
            } else {
                arrays[i].push(X0array[Math.round(Math.random() * 1)])
            }
            if (arrays[i][j] == 'X') {
                counterX++;
            } else {
                counter0++;
            }
        }
    }

    return arrays
}

console.log(tictactoe());
