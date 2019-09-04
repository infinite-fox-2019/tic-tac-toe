function randomXO(length) {
    let result = '';
    let characters = 'XO';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
       result  = result + characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function tictactoe(row, col) {
    let arr_result = []
    let count_x = 0;
    let count_o = 0;

    for (let i = 0; i < row; i++) {
        arr_result.push([])
    
        for (let j = 0; j < col; j++) {
            if (count_x > Math.floor(row*col/2)) {
                arr_result[i].push('O')
            } else if (count_o > Math.floor(row*col/2)) {
                arr_result[i].push('X')
            } else {
                arr_result[i].push(randomXO(1))
                if (arr_result[i][j] === 'X') {
                    count_x++
                } else {
                    count_o++
                }
            }
        }
    }

    return arr_result

}

console.log(tictactoe(3, 3));
