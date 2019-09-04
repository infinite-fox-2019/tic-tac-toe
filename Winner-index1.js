function board (){
    let out = []
    for (let i = 0; i < 3; i++){
        let board = []
        for (let j = 0; j < 3; j++){
            board.push(' ')
        
        }
        out.push(board)   
    }

    let pemain = 'XO'
    let pemainMulai = pemain[Math.floor(Math.random() * 2)]
    let pemenang = false

    for (let k = 0; k < 9; k++) {
        let indexK = Math.floor(Math.random() * 3)
        let indexL = Math.floor(Math.random() * 3)
        if (pemainMulai === 'X'){
            if (out[indexK][indexL] === ' '){
                out[indexK][indexL] = 'X'
                pemainMulai = 'O'
                pemenang = cekPemenang(out)
                if (pemenang && k > 3){
                    console.log(out)
                    return 'WIN-X'
                }                
            } else {
                k = k-1
            }    
        } else if (pemainMulai === 'O') {
            if (out[indexK][indexL] === ' ') {
                out[indexK][indexL]= 'O'
                pemainMulai = 'X'
                pemenang = cekPemenang(out)
                if (pemenang && k > 3) {
                    console.log(out)
                    return 'WIN-O'
                }
            } else {
                k= k-1
            }     
        }             
    }
}

function cekPemenang(arr){

    if (arr[0][0] == arr[0][1] && arr[0][0] == arr[0][2] && arr[0][1] == arr[0][2] && arr[0][2]) return true
    if (arr[1][0] == arr[1][1] && arr[1][0] == arr[1][2] && arr[1][1] == arr[1][2] && arr[1][2]) return true
    if (arr[2][0] == arr[2][1] && arr[2][0] == arr[2][2] && arr[2][1] == arr[2][2] && arr[2][2]) return true
 ////////////////////////////////////////////////////////////////////////////////////////////////////// 
    if (arr[0][0] == arr[1][0] && arr[0][0] == arr[2][0] && arr[1][0] == arr[2][0] && arr[2][0]) return true
    if (arr[0][1] == arr[1][1] && arr[0][1] == arr[2][1] && arr[1][1] == arr[2][1] && arr[2][1]) return true
    if (arr[0][2] == arr[1][2] && arr[0][2] == arr[2][2] && arr[1][2] == arr[2][2] && arr[2][2]) return true
 //////////////////////////////////////////////////////////////////////////////////////////////////////// 
    if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[1][1] == arr[2][2] && arr[2][2]) return true
    if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[1][1] == arr[2][0] && arr[2][0]) return true
    
    return false
}

console.log(board())

