function ticTacToe() {
    let resultArr = [];
    let XO = 'XO';
    let countX = 0;
    let countO = 0;
    let middle = Math.round(3*3)/2
    for(let i=0; i<3; i++){
        let arr = [];
        for(let j=0; j<3; j++){
            let random = XO[Math.floor(Math.random() * XO.length)];
            if(random==='X' && countX<middle){
                arr.push('X');
                countX++
            }
            if(random==='O' && countO<=middle) {
                arr.push('O');
                countO ++
            }
        }
        resultArr.push(arr);
    } 
    if(resultArr[2].length === 3){
        return resultArr
    }else{
        return ticTacToe()
    }
}

console.log(ticTacToe());