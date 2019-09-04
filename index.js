const generateGrid = row => {
  const array = [];

  for (let i = 0; i < row; i++) {
    const temp = []
    for (let j = 0; j < row; j++) {
      temp.push('')
    }
    array.push(temp)
  }

  return array
}

const whosWin = board => {
  // lines hori
  if (board[0][0] == board[0][1] && board[0][0] == board[0][2] && board[0][1] == board[0][2] && board[0][2]) return true
  if (board[1][0] == board[1][1] && board[1][0] == board[1][2] && board[1][1] == board[1][2] && board[1][2]) return true
  if (board[2][0] == board[2][1] && board[2][0] == board[2][2] && board[2][1] == board[2][2] && board[2][2]) return true

  // lines verti
  if (board[0][0] == board[1][0] && board[0][0] == board[2][0] && board[1][0] == board[2][0] && board[2][0]) return true
  if (board[0][1] == board[1][1] && board[0][1] == board[2][1] && board[1][1] == board[2][1] && board[2][1]) return true
  if (board[0][2] == board[1][2] && board[0][2] == board[2][2] && board[1][2] == board[2][2] && board[2][2]) return true

  // diagonal
  if (board[0][0] == board[1][1] && board[0][0] == board[2][2] && board[1][1] == board[2][2] && board[2][2]) return true
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0] && board[1][1] == board[2][0] && board[2][0]) return true
  return false
}

const ticTacToe = row => {
  const grid = generateGrid(row)
  const randomNum = Math.floor(Math.random() * 2)
  const choices = randomNum == 1 ? 'XOXOXOXOX' : 'OXOXOXOXO'
  console.log(choices[0] == 'X' ? 'X first' : 'O first')
  
  for (let i = 0; i < choices.length; i++) {
    const randomI = Math.floor(Math.random() * row)
    const randomJ = Math.floor(Math.random() * row)
    if (!grid[randomI][randomJ]) {
      grid[randomI][randomJ] = choices[i]
      if (whosWin(grid) && i > 3) {
        console.log(grid)
        return `${choices[i]} Win!`
      }
    } else {
      i -= 1
    }
  }
  console.log(grid)
  return `Draw!`
}

console.log(ticTacToe(3))
