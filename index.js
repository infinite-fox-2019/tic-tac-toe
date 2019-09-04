const generateGrid = row => {
  const result = []

  for (let i = 0; i < row; i++) {
    result.push([])
  }

  return result
}

const ticTacToe = row => {
  const grid = generateGrid(row)
  const choices = 'XO'
  let teamX = 0
  let teamO = 0
  
  for (let i = 0; i < row; i++) {
    while (grid[i].length < row) {
      const random = Math.floor(Math.random() * 2)
      const pick = choices[random]
      if (pick == 'X' && teamX < Math.ceil((row * row)) / 2) {
        teamX++
        grid[i].push(pick)
      }
      if (pick == 'O' && teamO < Math.floor((row * row) / 2)) {
        teamO++
        grid[i].push(pick)
      }
    }
  }
  return grid
}

console.log(ticTacToe(3))
console.log(ticTacToe(5))
console.log(ticTacToe(7))
