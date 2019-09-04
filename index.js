
function ticTacToe (){
    const kamus = [
        ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
        ["O", "X", "O", "X", "O", "X", "O", "X", "O"]
    ]
    let temp = kamus[Math.floor(Math.random() * 2)]
    let arr = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ]
    let acakI = 0
    let acakJ = 0
    
    for(var i = 0 ; i < 9 ; i++){
        // Ngisi Random di tempat yg kosong
        while(true){
            acakI = Math.floor(Math.random() * 3)
            acakJ = Math.floor(Math.random() * 3)
            if(arr[acakI][acakJ] == ' '){
                arr[acakI][acakJ] = temp[0]
                temp = temp.slice(1)
                break
            }
        }

        // Check Menang
        for(let k = 0 ; k < 3 ; k++){
            if(arr[k][0] == arr[k][1] && arr[k][1] == arr[k][2] && arr[k][0] != ' '){ // Check per Baris
                return `${arr[0]} \n${arr[1]} \n${arr[2]} \n\n${arr[k][0]} Win`
            }
            else if(arr[0][k] == arr[1][k] && arr[1][k] == arr[2][k] && arr[0][k] != ' '){ // Check per Kolom
                return `${arr[0]} \n${arr[1]} \n${arr[2]} \n\n${arr[0][k]} Win`
            }
        }
        if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[0][0] != ' '){ // Check diagonal kiri atas => kanan bawah
            return `${arr[0]} \n${arr[1]} \n${arr[2]} \n\n${arr[0][0]} Win`
        }
        else if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[0][2] != ' '){ // Check diagonal kanan atas => kiri bawah
            return `${arr[0]} \n${arr[1]} \n${arr[2]} \n\n${arr[0][2]} Win`
        }

        // Check Draw
        if (temp.length == 0){
            return `${arr[0]} \n${arr[1]} \n${arr[2]} \n\nDraw`
        }
    }
}

console.log(ticTacToe());