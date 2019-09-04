function tic_tac_toe(){
  // x and then o change player
  // winning condition
  // loser start first
  // AI
  let board= []
  let turns  = [[ 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'], [ 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O']]
  for(let i =0 ; i < 3 ; i++){
    let penampung = []
    for(let j=0 ; j<3 ; j++){
      penampung.push(' ')
    }
    board.push(penampung)
  }

  let whoFirst = turns[Math.floor(Math.random() * turns.length)]

  let winCondition = false
  let drawCondition = false





  while(winCondition == false || draw == false){
    for(let i=0 ; i<whoFirst.length ; i++){
      let random = board[Math.floor(Math.random() * board.length)][Math.floor(Math.random() * board.length)];
      let winner = ''
      if(random !== ' '){
        let findEmpty = false
        while(findEmpty == false){
          let random = board[Math.floor(Math.random() * board.length)][Math.floor(Math.random() * board.length)];
          if(random === ' '){
            random = whoFirst[i]
            findEmpty = true
          }
        }
      } else if (random === ' '){
        random = whoFirst[i]
      }


      if(board[0][0]== board[0][1] && board[0][0]== board[0][2]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[1][0] == board[1][1] && board[1][0]== board[1][2]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[2][0]==board[2][1] && board[2][0]== board[2][2]){
        winCondition = true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[0][0] == board[1][0] && board[0][0]== board[2][0]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[0][1]==board[1][1] && board[0][1]== board[2][1]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[0][2]==board[1][2] && board[0][2]== board[2][2]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }

      if(board[0][0]==board[1][1] && board[0][0] == board[2][2]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
      if(board[0][2]==board[1][1] && board[0][2]==board[2][0]){
        winCondition =  true
        winner += whoFirst[i]
        return `Winner is ${winner}`
      }
    }
    drawCondition = true
  }
  return 'its a draw'
}
  console.log(tic_tac_toe())













