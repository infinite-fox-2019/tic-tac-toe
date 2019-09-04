function ticTacToe(){
    const ticTac = 'XO'
    let arrOut = [], countO = 0, countX = 0;
    for (let i =0; i<3; i++){
        let arrIn = [];
        for (let j=0; j<3; j++){
            let num = Math.floor(Math.random()*2)
            if (countX > 4 ) arrIn.push('X')
            else if (countO > 4) arrIn.push('O')
            else arrIn.push(ticTac[num])

            if (num == 0) countX++ 
            else if (num == 1) countO++ 
        }
        arrOut.push(arrIn)
    }
    return arrOut;
}

console.log(ticTacToe())
console.log(ticTacToe())