function tictactoe(grid) {
    let output = [];
    let countX = 0;
    let countO = 0;
    let xo = 'xo';

    for(let i = 0; i < grid; i++) {
        let tempOutput = [];
        for(let j = 0; j < grid; j++) {
            if(countX < 5 && countO < 5){
                tempOutput.push(xo.charAt(Math.floor(Math.random() * xo.length)));
                if(tempOutput[j] == 'x') {
                    countX++;
                }
                if(tempOutput[j] == 'o') {
                    countO++;
                }
            } else {
                if(countX === 5) {
                    tempOutput.push('o');
                    countO++;
                } else if(countO === 5) {
                    tempOutput.push('x');
                    countX++;
                }
            }
            
        }
        output.push(tempOutput);
    }
    return output;
}

console.log(tictactoe(3));