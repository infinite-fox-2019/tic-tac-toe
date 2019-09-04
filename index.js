function checkWin(array) {
    let check = [
        `${array[0][0]}${array[0][1]}${array[0][2]}`,
        `${array[1][0]}${array[1][1]}${array[1][2]}`,
        `${array[2][0]}${array[2][1]}${array[2][2]}`,
        `${array[0][0]}${array[1][0]}${array[2][0]}`,
        `${array[0][1]}${array[1][1]}${array[2][1]}`,
        `${array[0][2]}${array[1][2]}${array[2][2]}`,
        `${array[0][0]}${array[0][1]}${array[0][2]}`,
        `${array[0][0]}${array[1][1]}${array[2][2]}`,
        `${array[0][2]}${array[1][1]}${array[2][0]}`,
    ];
    let winner = '';
    for (let i = 0; i < check.length; i++) {
        if (check[i] == 'XXX') {
            return 'X is winner';
        }
        if (check[i] == '000') {
            return '0 is winner';
        }
    }
}

function tictactoe() {
    let arrays = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    let X0array = ['X', '0'];
    let pemenang = '';
    let firstAttempt = X0array[Math.round(Math.random() * 1)];

    for (let i = 0; i < 9; i++) {
        let randomI = Math.floor(Math.random() * 3);
        let randomJ = Math.floor(Math.random() * 3);
        while (arrays[randomI][randomJ] != ' ' && i != 0) {
            randomI = Math.floor(Math.random() * 3);
            randomJ = Math.floor(Math.random() * 3);
        }
        if (i == 0) {
            arrays[randomI][randomJ] = firstAttempt;
        } else {
            if (firstAttempt == 'X') {
                if (i % 2 != 0) {
                    arrays[randomI][randomJ] = X0array[1];
                } else {
                    arrays[randomI][randomJ] = X0array[0];
                }
            } else {
                if (i % 2 != 0) {
                    arrays[randomI][randomJ] = X0array[0];
                } else {
                    arrays[randomI][randomJ] = X0array[1];
                }
            }
        }
        pemenang = checkWin(arrays);
        if (pemenang) {
            console.log(arrays);
            return pemenang;
        } else if (!pemenang && i == 8) {
            console.log(arrays);
            return 'DRAW!!!'
        }
    }
}

console.log(tictactoe());