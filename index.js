function board(n){
    let hasil = []
    for(let i = 0; i < n; i++){
        let temp = []
        for( let j = 0; j < n; j++){
            temp.push('')
        }
        hasil.push(temp)
    }
    return hasil
}

function cek(arr){
    let papan = arr
    // cek horizontal
    if((papan[0][0] === papan[0][1]) && (papan[0][1] === papan[0][2]) && papan[0][0] !== '')return true
    if((papan[1][0] === papan[1][1]) && (papan[1][1] === papan[1][2]) && papan[1][0] !== '')return true
    if((papan[2][0] === papan[2][1]) && (papan[2][1] === papan[2][2]) && papan[2][0] !== '')return true
    // cek vertical
    if((papan[0][0] === papan[1][0]) && (papan[1][0] === papan[2][0]) && papan[0][0] !== '')return true
    if((papan[0][1] === papan[1][1]) && (papan[1][1] === papan[2][1]) && papan[0][1] !== '')return true
    if((papan[0][2] === papan[1][2]) && (papan[1][2] === papan[2][2]) && papan[0][2] !== '')return true
    // cek diagonal
    if((papan[0][0] === papan[1][2]) && (papan[1][2] === papan[2][2]) && papan[0][0] !== '')return true
    if((papan[2][0] === papan[1][2]) && (papan[1][2] === papan[0][2]) && papan[2][0] !== '')return true
    return false
}

function tic_tac(numb){
    let papan = board(numb)
    let huruf = 'XO'
    let random = Math.round(Math.random()*1) 
    let penuh = numb*numb
    let a = 0
    let hasil = false

    while(a < penuh){
        let i = Math.floor(Math.random()*3)
        let j = Math.floor(Math.random()*3)
        
        if(random == 0){
            if(papan[i][j] == ''){
                papan[i][j] = huruf[random]
                random += 1
                a++
                hasil = cek(papan)  
            } else {
                random = 0
            }
        } else if (random == 1){
            if(papan[i][j] == ''){
                papan[i][j] = huruf[random]
                random -= 1
                a++
                hasil = cek(papan)
            } else {
                random = 1
            }
        }
        if(hasil == true){
            console.log(papan);
            return papan[i][j] + ' Menang'
        }
    }
    if(hasil == false){
        console.log(papan);
        return 'Draw'
    }
}

console.log(tic_tac(3));