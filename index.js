
const kamus = [
    ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
    ["O", "X", "O", "X", "O", "X", "O", "X", "O"]
]
function ticTacToe (kamus){
    let temp = kamus[Math.floor(Math.random() * 2)]
    let arr = []
    let random = 0
    
    for(let i = 0 ; i<3 ; i++){
        arr.push([])
        for(let j = 0 ; j<3 ; j++){
            arr[arr.length-1].push(" ")
        }
    }

    let acakI = 0
    let acakJ = 0
    
    while(true){
        acakI = Math.floor(Math.random() * 3)
        acakJ = Math.floor(Math.random() * 3)
        if(arr[acakI][acakJ] == ' '){
            arr[acakI][acakJ] = temp[0]
            temp = temp.slice(1)
        }
        if(check(arr) != ''){
            for(let i = 0 ; i<arr.length ; i++){
                console.log(arr[i]);
            }
            return check(arr)
        }
        if (temp.length == 0){
            for(let i = 0 ; i<3 ; i++){
                console.log(arr[i]);
            }
            return "Draw"
        }
    }
}

function check (arr){
    for(let i = 0 ; i<3 ; i++){
        if(arr[i][0] == arr[i][1] && arr[i][1] == arr[i][2] && arr[i][0] != ' '){
            return `${arr[i][0]} Win`
        }
    }
    for(let i = 0 ; i<3 ; i++){
        if(arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i] && arr[0][i] != ' '){
            return `${arr[0][i]} Win`
        }
    }
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != ' '){
        return `${arr[0][0]} Win`
    }
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[0][2] != ' '){
        return `${arr[0][2]} Win`
    }
    return ''
}

console.log(ticTacToe(kamus));