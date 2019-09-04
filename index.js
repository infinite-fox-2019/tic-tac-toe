const generateBoard = () => {
  const board = []
  const coordinate = []
  for (let i = 0; i < 3; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
      row.push(' ')
      coordinate.push([i, j])
    }
    board.push(row)
  }

  return { board, coordinate }
}

const generatePlayer = () => {
  const { board, coordinate } = generateBoard()
  let mark = 'X'
  let winnerMark = ''
  clearScreen()
  printBoard(board)

  while (coordinate.length > 0) {
    const putIndex = Math.floor(Math.random() * coordinate.length)
    let x = coordinate[putIndex][0]
    let y = coordinate[putIndex][1]
    board[x][y] = mark
    sleep(500)
    clearScreen()
    printBoard(board)
    if(winner(board)) { 
      winnerMark = mark
      coordinate.length = 0
    }
    if (mark === 'X') mark = 'O'
    else mark = 'X'
    coordinate.splice(putIndex, 1)
  }

  if(winnerMark.length !== 0) return `The winner is: ${winnerMark}`
  else return `No winner!`
}

const winner = (arr) => {
  let winner = false
  let count = 0
  if (arr[0][0] !== ' ' && arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) winner = true
  if (arr[0][2] !== ' ' && arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0]) winner = true
  while (count < 3) {
    if (arr[count][0] !== ' ' && arr[count][0] === arr[count][1] && arr[count][0] === arr[count][2]) winner = true
    if (arr[0][count] !== ' ' && arr[0][count] === arr[1][count] && arr[0][count] === arr[2][count]) winner = true

    count++
  }
  return winner
}

const printBoard = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log('|' + arr[i].join('|') + '|')
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

console.log(generatePlayer())