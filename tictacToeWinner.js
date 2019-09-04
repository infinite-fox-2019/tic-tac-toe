function generateTicTacToe(){

    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]

    let x = ['X','O','X','O','X','O','X','O','X']
    let o = ['O','X','O','X','O','X','O','X','O']

    if(Math.round(Math.random()) === 1){
        var input = o
    }else{ 
        var input = x
    }

    for(let i = 0; i < input.length; i++){
        let coordinate = generateCoordinate()
        if(board[coordinate[0]][coordinate[1]] === ''){
            board[coordinate[0]][coordinate[1]] = input[i]
        }else{
            i--
        }
        let status = winnerCheck(board)
        if(status === 'X'){
            console.log(board)
            return 'X WIN'
        }else if(status === 'O'){
            console.log(board)
            return 'O WIN'
        }
    }
    if(winnerCheck(board) === '-')return generateTicTacToe()


    function winnerCheck(tictactoe){
        if(tictactoe[0][0] === 'X' && tictactoe[0][1] === 'X' && tictactoe[0][2] === 'X')return 'X'
        else if(tictactoe[1][0] === 'X' && tictactoe[1][1] === 'X' && tictactoe[1][2] === 'X')return 'X'
        else if(tictactoe[2][0] === 'X' && tictactoe[2][1] === 'X' && tictactoe[2][2] === 'X')return 'X'
        else if(tictactoe[0][0] === 'X' && tictactoe[1][0] === 'X' && tictactoe[2][0] === 'X')return 'X'
        else if(tictactoe[0][1] === 'X' && tictactoe[1][1] === 'X' && tictactoe[2][1] === 'X')return 'X'
        else if(tictactoe[0][2] === 'X' && tictactoe[1][2] === 'X' && tictactoe[2][2] === 'X')return 'X'
        else if(tictactoe[0][0] === 'X' && tictactoe[1][1] === 'X' && tictactoe[2][2] === 'X')return 'X'
        else if(tictactoe[0][2] === 'X' && tictactoe[1][1] === 'X' && tictactoe[2][0] === 'X')return 'X'

        else if(tictactoe[0][0] === 'O' && tictactoe[0][1] === 'O' && tictactoe[0][2] === 'O')return 'O'
        else if(tictactoe[1][0] === 'O' && tictactoe[1][1] === 'O' && tictactoe[1][2] === 'O')return 'O'
        else if(tictactoe[2][0] === 'O' && tictactoe[2][1] === 'O' && tictactoe[2][2] === 'O')return 'O'
        else if(tictactoe[0][0] === 'O' && tictactoe[1][0] === 'O' && tictactoe[2][0] === 'O')return 'O'
        else if(tictactoe[0][1] === 'O' && tictactoe[1][1] === 'O' && tictactoe[2][1] === 'O')return 'O'
        else if(tictactoe[0][2] === 'O' && tictactoe[1][2] === 'O' && tictactoe[2][2] === 'O')return 'O'
        else if(tictactoe[0][0] === 'O' && tictactoe[1][1] === 'O' && tictactoe[2][2] === 'O')return 'O'
        else if(tictactoe[0][2] === 'O' && tictactoe[1][1] === 'O' && tictactoe[2][2] === 'O')return 'O'

        else return '-'
    }


    function generateCoordinate(){
        return [ (Math.round(Math.random()*2)) , ((Math.round(Math.random()*2))) ]
    }

}

console.log(generateTicTacToe())