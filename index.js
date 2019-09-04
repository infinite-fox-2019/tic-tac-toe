// RELEASE 0
function ticTacToe(){
    const ticTac = 'XO'
    let arrOut = [], countO = 0, countX = 0;
    for (let i =0; i<3; i++){
        let arrIn = [];
        for (let j=0; j<3; j++){
            let num = Math.floor(Math.random()*2)
            if (countX > 4 ) arrIn.push(ticTac[1])
            else if (countO > 4) arrIn.push(ticTac[0])
            else arrIn.push(ticTac[num])

            if (num == 0) countX++ 
            else if (num == 1) countO++ 
        }
        arrOut.push(arrIn)
    }
    return arrOut;
}

console.log(ticTacToe())

//RELEASE 1
function ticTac(){
    let arr = [];
    for (let i=0; i<3; i++){
        let arrIn = [];
        for (let j=0; j<3; j++){
            arrIn.push(' ')
        }
        arr.push(arrIn)
    }
    
    const xo = [['X','O','X','O','X','O','X','O','X'],
                ['O','X','O','X','O','X','O','X','O']];
    let num = Math.floor(Math.random()*2)

    for (let i=0; i<xo[num].length; i++){
        let insert = xo[num][i];
        
        let x = Math.floor(Math.random()*3)
        let y = Math.floor(Math.random()*3)

        if (arr[x][y] === ' ') arr[x][y] = insert;
        else i--
        if (checkWinner(arr) === 'X'){
            console.log(arr);
            return 'X win!';
        }
        else if (checkWinner(arr) === 'O'){
            console.log(arr);
            return 'O win!';
        }
    }
    return ticTac();
}

function checkWinner(arr){
    for (let i=0; i<3; i++){
        if (arr[i][0] === 'X' && arr[0][1] === 'X' && arr[0][2] == 'X') return 'X'
        else if (arr[i][0] === 'O' && arr[0][1] === 'O' && arr[0][2] == 'O') return 'O'
    }
    for (let i=0; i<3; i++){
        if (arr[0][i] === 'X' && arr[1][i] === 'X' && arr[2][i] == 'X') return 'X'
        else if (arr[0][i] === 'O' && arr[1][i] === 'O' && arr[2][i] == 'O') return 'O'
    }

    if (arr[0][0] === 'X' && arr[1][1] === 'X' && arr[2][2] == 'X') return 'X'
    else if (arr[0][0] === 'O' && arr[1][1] === 'O' && arr[2][2] == 'O') return 'O'

    if (arr[0][2] === 'X' && arr[1][1] === 'X' && arr[2][0] == 'X') return 'X'
    else if (arr[0][2] === 'O' && arr[1][1] === 'O' && arr[2][0] == 'O') return 'O'

    return 'draw';
}
console.log(ticTac())