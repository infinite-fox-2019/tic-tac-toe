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