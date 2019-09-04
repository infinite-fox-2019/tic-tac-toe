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
    for (let i=0; i<3; i++) {
        // output.push([])
        for (let j=0; j<3; j++) {
            random = value[Math.floor(Math.random() * 2)]
            if (freqx > 4 ) { output[i][j] = ('o') }
                else if (freqo > 4) { output[i][j] = ('x') }
                else { output[i][j] = random }
            if (random == 'x') { freqx++ }
                else if (random == 'o') { freqo++ }
        }
        //cek posisi
        if (cekPemenang(output) == 'O menang' || cekPemenang(output) == 'X menang'){
            console.log(output)
            return cekPemenang(output) 
        }
    }
    return output
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
    return ''
}
// let arr = [['o','o','o'],['x','o','o'],['x','o','o']]
// console.log(cekPemenang(arr))

console.log(tic())
console.log(tic())
console.log(tic())
