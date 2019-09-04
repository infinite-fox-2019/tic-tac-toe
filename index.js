function tictac(row,col){
    let output = []
    let alphabets = 'XO'
    let xCounter = 0
    for(let i =0 ; i<row; i++){
        let temp = []
        for(let j=0 ; j<col; j++){
            let random = alphabets.charAt(Math.floor(Math.random() * alphabets.length))
            if(random === 'X' && xCounter <5){
                xCounter ++
                temp.push(random)
            }
            else{
                temp.push('O')
            }
        }
        output.push(temp)
    }
    // console.log(xCounter)
    return output
}
console.log(tictac(3,3))
