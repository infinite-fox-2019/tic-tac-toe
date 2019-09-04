const kamus = [
    ["X", "X", "X", "X", "X", "O", "O", "O", "O"],
    ["X", "X", "X", "X", "O", "O", "O", "O", "O"]
]

function ticTacToe (kamus){
    let temp = kamus[Math.floor(Math.random() * 2)]
    let arr = []
    let random = 0
    
    for(let i = 0 ; i<3 ; i++){
        arr.push([])
        for(let j = 0 ; j<3 ; j++){
            random = Math.floor(Math.random() * temp.length)
            arr[arr.length-1].push(temp[random])
            temp.splice(random,1)
        }
    }
    return arr
}

console.log(ticTacToe(kamus));