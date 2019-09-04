function tictactoe(){
    let alphabet = 'XO'
    let out = []
    let countX = 0
    let countO = 0
    for(let i = 0; i<3;i++){
       out.push([])
        for(let j = 0; j<3;j++){
            if(countX < 4){
                out[out.length-1].push('X')
            }else if(countO < 4){
                out[out.length-1].push('O')
            }else {
                out[out.length-1].push(alphabet[Math.floor(Math.random()*2)])
            }
            if (out[i][j] == 'X'){
                countX++
            }else 
                countO++
        }
    }
    countX
    countO
    return out
}

console.log(tictactoe())