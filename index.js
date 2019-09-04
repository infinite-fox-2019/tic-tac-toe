function ticTacToe(){
    let kamusXdanO = 'xo'
    let len = kamusXdanO.length
    let result = []
    let countO = 0
    let countX = 0
    let tampung
    for(let i=0; i<3; i++){
        result[i] = []
        for(let j=0; j<3; j++){
            if(countX==5){
                result[i][j] = 'o'
                countO++
            }else if(countO==5){
                result[i][j] = 'x'
                countX++
            }else{
                for(let k=0; k<len-1; k++){
                    tampung = kamusXdanO[Math.floor(Math.random()*len)]
                }
                if(tampung==='x'){
                    countX++
                    result[i][j] = tampung
                }else if(tampung==='o'){
                    countO++
                    result[i][j] = tampung
                }
            }
        }
    }
    return result
}
console.log(ticTacToe())
console.log(ticTacToe())