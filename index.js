function ticTacToe () {
  
  let res = []

  let countX = 0
  let countO = 0

  for (let i = 0; i < 3; i++) {
    
    res.push([])
    let xo = 'XO'

    for (let j = 0; j < 3; j++) {

      if (countX < 5 && countO < 5) {
        res[i].push(xo.charAt(Math.floor(Math.random() * xo.length)));

        if (res[i][j] === 'X') countX++
        if (res[i][j] === 'O') countO++
      }
      else {

        if (countX === 5) {
          res[i].push('O');
          countO++;
        } 
        else if (countO === 5) {
          res[i].push('X');
          countX++;
        }
      }
    }
  }
  return res
}

console.log(ticTacToe());
