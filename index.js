function ticTacToe(num){
  let output = [];
  let counterX = 0;
  let counterO = 0;
  let batasX = Math.ceil((num**2)/2)
  let batasO = Math.floor((num**2)/2)
  for(let i = 0; i < num; i++){
    output.push([]);
    for(let j = 0; j < num; j++){
      let dadu = Math.round(Math.random());
      if(dadu == 0 && counterX < batasX){
        output[i].push('X')
        counterX++;
      }
      else if(dadu == 1 && counterO < batasO){
        output[i].push('O')
        counterO++;
      }
      else if(dadu == 0){
        output[i].push('O')
      }
      else if(dadu == 1){
        output[i].push('X')
      }
    }
  }
  return (output);
}

// Test Drive Dynamic
console.log(ticTacToe(3))
console.log(ticTacToe(4))
console.log(ticTacToe(5))
console.log(ticTacToe(10))