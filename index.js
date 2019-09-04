function ticTacToe() {
    let resultArr = [];
    let XO = 'XO';
    let countX = 0;
    let countO = 0;
    for(let i=0; i<3; i++){
        let arr = [];
        for(let j=0; j<3; j++){
            let random = XO[Math.floor(Math.random() * XO.length)];
            if(random==='X' && countX<Math.round((3*3)/2)){
                arr.push('X');
                countX++
            }
            if(random==='O' && countO<=Math.round((3*3)/2)) {
                arr.push('O');
                countO ++
            }
        }
        resultArr.push(arr);
    }
    if(countO === 5 || countX === 5){
        return resultArr
    }else{
        return ticTacToe()
    }
}

console.log(ticTacToe());