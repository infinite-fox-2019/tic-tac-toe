function ticTacToe() {
    let array = [[],[],[]];
    const data = 'XO';
    let counterX = 0;
    let counterO = 0;

    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<3; j++){
            let randomize = data.charAt(Math.floor(Math.random() * data.length));
            if(counterO > 4){
                array[i].push('X');
            }
            else if(counterX > 4){
                array[i].push('O');
            }
            else{
                array[i].push(randomize);
                if(randomize == 'X'){
                    counterX++
                }
                else{
                    counterO++
                }
            }
        }
    }
    return array;
}

console.log(ticTacToe());

