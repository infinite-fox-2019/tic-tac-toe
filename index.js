function ticTacToe (num) {
    //dinamis input sesuai user
    let result = [];
    let counterX = 0;
    let counterO = 0;
    let XO = 'XO';
    for (let i = 0; i < num; i++) {
        if (num % 2 === 0) {
            var banyak = num * num / 2;
        } else {
            var banyak = Math.floor((num * num) / 2)
        }
        let temp = [];
        for (let j = 0; j < num; j++) {
            let hufurNow = XO[Math.floor(Math.random() * XO.length)]; 
            if (hufurNow === 'O' && counterO < banyak) {
                temp.push('O');
                counterO++
            } 
            else if (hufurNow === 'O' && counterO >= banyak) {
                temp.push('X');
                counterO++
            } 
            else if (hufurNow === 'X' && counterX < banyak) {
                temp.push('X');
                counterX++
            }
            else if (hufurNow === 'X' && counterX >= banyak) {
                temp.push('O');
                counterX++
            }       
        }
        result.push(temp);
    }
    //console.log(banyak);
    return result;
};

console.log(ticTacToe(3));

function ticTacToeCobaVer2 (num) {
    var board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    var winCondition = [
        [[0,0], [0,1], [0,2]],
        [[1,0], [1,1], [1,2]],
        [[2,0], [2,1], [2,2]],
        [[0,0], [1,0], [2,0]],
        [[0,1], [1,1], [2,1]],
        [[0,2], [1,2], [2,2]],
        [[0,0], [1,1], [2,2]],
        [[0,2], [1,1], [2,0]]
    ]
    let belumAdaPemenang = true;
    let XO = 'XO';
    let random = XO[Math.floor(Math.random() * XO.length)];
    let tempPosisiPlayer = {
        'X' : [],
        'O' : []
    };

    if (random === 'X') {
        urutanPlayer = ['X', 'O'];
    } else {
        urutanPlayer = ['O', 'X'];
    }
    
    while (belumAdaPemenang) {
        for (let i = 0; i < urutanPlayer.length; i++) {
            let posisiBelumAda = true;
            loop1:
            while (posisiBelumAda === true) {
                var rowRandom = Math.floor(Math.random() * num);
                var colRandom = Math.floor(Math.random() * num);
                for (let keys in tempPosisiPlayer) {
                    for (let j = 0; j < tempPosisiPlayer[keys].length; j++) {
                        if (tempPosisiPlayer[keys][j][0] === rowRandom && tempPosisiPlayer[keys][j][1] === colRandom) {
                            posisiBelumAda = false;
                        }
                    }
                }
                if (posisiBelumAda === true) {
                    board[rowRandom][colRandom] = urutanPlayer[i];
                    posisiBelumAda = false;
                }                
            }
            tempPosisiPlayer[urutanPlayer[i]].push([rowRandom,colRandom]);
        }
        //belumAdaPemenang = false;
        if (tempPosisiPlayer['X'].length >= 5 || tempPosisiPlayer['O'].length >= 5) {
            belumAdaPemenang = false
        }
       
    };
    //console.log(winCondition[0][0])
    //console.log(tempPosisiPlayer);
    return board;
};


console.log(ticTacToeCobaVer2(3));