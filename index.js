function ticTacToe(){
    
    let nested = [] 
    for(let i = 0; i < 3; i++){
        let container = []
        for(let j = 0; j < 3; j++){
            container.push(generateRandomAlphabet())
        }
        nested.push(container)
    }

    let xCounter = 0
    let oCounter = 0
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(nested[i][j] === 'x')xCounter ++
            else oCounter++
        }
    }

    if(Math.abs(oCounter-xCounter) === 1)return nested
    else return ticTacToe()
    
    function generateRandomAlphabet(){
        let alphabet = 'xo'
        return alphabet[Math.floor(Math.random()*2)]
    }
}

console.log(ticTacToe())