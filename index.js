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
    let count_o = 0
    
    for (let i = 0; i < row; i++) {
        arr_result.push([])

        if (row*col % 2 !== 0) {
            for (var j = 0; j < Math.ceil(col/2); j++) { //var digunakan agar bisa diakses pada loop k
                arr_result[i].push(randomXO(1))
                if (arr_result[i][j] === 'X') {
                    count_x++
                    if (count_x > Math.floor(row*col/2)) {
                        break;
                    } 
                } 
            }

            for (let k = 0; k < Math.floor(col/2); k++) {
                arr_result[i].push(randomXO(1))
                if (arr_result[i][j] === 'O') {
                    count_o++
                    if (count_o > Math.floor(row*col/2)) {
                        break;
                    }
                }
            }
        }

    }

    return arr_result

}

console.log(tictactoe(3, 3));
