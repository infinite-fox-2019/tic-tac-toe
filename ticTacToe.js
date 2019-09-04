function tic() {
    let output = []
    for (let i=0; i<3; i++) {
        output.push([])
        for (let j=0; j<3; j++) {
            output[i].push(' ')
        }
    }
    let value = 'xo'
    let random
    let freqx = 0
    let freqo = 0
    let rand = posisiRandom()
    random = value[Math.floor(Math.random() * 2)]
    output[rand.i][rand.j] = random
    let temp = random
    while (true) {
            let cek = true
              if (temp == 'x') {
                rand = posisiRandom()
                if (output[rand.i][rand.j] == ' ') {
                output[rand.i][rand.j] = 'o'
                temp = 'o'
                }
              } else if (temp == 'o') {
                rand = posisiRandom()
                if (output[rand.i][rand.j] == ' ') {
                output[rand.i][rand.j] = 'x'
                temp = 'x'
                }
              }

            if (cekPemenang(output) == 'O menang' || cekPemenang(output) == 'X menang'){
                printBoard(output)
                return cekPemenang(output) 
            }
            for (let i=0; i<output.length; i++) {
                for (let j=0; j<output[i].length; j++) {
                    if (output[i][j] == ' ') {
                        cek = false
                    }
                }
            }
            if (cek == true) {
                printBoard(output)
                return 'seri'
            }
        }
    // return output
}
function posisiRandom() {
    i = Math.floor(Math.random()*3)
    j = Math.floor(Math.random()*3)
    return {i:i, j:j}
}

function cekPemenang(output) {
    //cek menurun
    let freqo
    let freqx
    for (let i=0; i<output.length; i++) { //kolom
        freqo = 0
        freqx = 0    
        for (let j=0; j<output.length; j++) { //baris
            if (output[j][i] == 'x') freqx++
            if (output[j][i] == 'o') freqo++    
        }
        if (freqo == 3) return 'O menang'
        if (freqx == 3) return 'X menang'
    }

    //cek kesamping
    for (let i=0; i<output.length; i++) { //kolom
        freqo = 0
        freqx = 0    
        for (let j=0; j<output[i].length; j++) { //baris
            if (output[i][j] == 'x') freqx++
            if (output[i][j] == 'o') freqo++
        }
        if (freqo == 3) return 'O menang'
        if (freqx == 3) return 'X menang'    
    }
    //cek diagonal
    if (output[0][0] == 'x' && output[1][1] == 'x' && output[2][2] == 'x') return 'X menang'
    if (output[0][2] == 'x' && output[1][1] == 'x' && output[2][0] == 'x') return 'X menang'
    if (output[0][0] == 'o' && output[1][1] == 'o' && output[2][2] == 'o') return 'O menang'
    if (output[0][2] == 'o' && output[1][1] == 'o' && output[2][0] == 'o') return 'O menang'
    return ''
}
function printBoard(arr) {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
  }
}
// let arr = [['o','o','o'],['x','o','o'],['x','o','o']]
// console.log(cekPemenang(arr))

console.log(tic())
console.log(tic())
console.log(tic())
