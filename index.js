function ticTacToe(){
let output = []
  for (let i=0;i<3;i++){
    let temp = []
    for (let j=0;j<3;j++){
      let value = Math.floor(Math.random()*2)
      if (value == 1){
        temp.push('X')
      } else {
        temp.push('O')
      }
    }
    output.push(temp)
  }

  if (checkKondisi(output)) {
    return output;
  } else {
    return ticTacToe();
  }
}

function checkKondisi(output){
  let counter = 0
 for (let i=0;i<output.length;i++){
   for (let j=0;j<output[i].length;j++){
     if (output[i][j] === 'X'){
       counter++
     }
   }
 }
 if (counter == 4 || counter == 5) {
   return true;
 } else {
   return false;
 }
}

console.log(ticTacToe())