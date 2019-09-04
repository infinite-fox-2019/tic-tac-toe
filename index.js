
function checker(array){
    
    if((array[0][0] === array[0][1]) && (array[0][1] === array[0][2]) && array[0][0] !== '')return true
    if((array[1][0] === array[1][1]) && (array[1][1] === array[1][2]) && array[1][0] !== '')return true
    if((array[2][0] === array[2][1]) && (array[2][1] === array[2][2]) && array[2][0] !== '')return true
    if((array[0][0] === array[1][0]) && (array[1][0] === array[2][0]) && array[0][0] !== '')return true
    if((array[0][1] === array[1][1]) && (array[1][1] === array[2][1]) && array[0][1] !== '')return true
    if((array[0][2] === array[1][2]) && (array[1][2] === array[2][2]) && array[0][2] !== '')return true
    if((array[0][0] === array[1][2]) && (array[1][2] === array[2][2]) && array[0][0] !== '')return true
    if((array[2][0] === array[1][2]) && (array[1][2] === array[0][2]) && array[2][0] !== '')return true
    return false

}

function playGame(row){

    let board = tictac(row)
    let alphabets = 'XO'
    let moves = 0
    let result = false
    let random = alphabets.charAt(Math.floor(Math.random() * alphabets.length))

    for(let i =0; i<board.length*board[0].length; i++){
        let jalan = false
        while(jalan === false) {
            let colPlayer = (Math.floor(Math.random() * row))
            let rowPlayer = (Math.floor(Math.random() * row))
            if(board[colPlayer][rowPlayer] === ''){
            board[colPlayer][rowPlayer] = random
            jalan = true
            if(result === true){
                console.log(board)
                return board[colPlayer][rowPlayer] + ' Menang'
            }
        }
    }
        if (random === 'O') {
            random = 'X'
            result = checker(board)
            
        } 
        else if(random === 'X') {
            random = 'O'
            result = checker(board)
        }
    }
    if(result === false){
        return 'draw'
    }
    return board
    // console.log(board)
}


function tictac(row){
    let board = []

    for(let i =0 ; i<row; i++){
        let temp = []
        for(let j = 0; j<row; j++){
            temp[j] = ''
        }
        board.push(temp)
    }
    return board
}

console.log(playGame(3))

