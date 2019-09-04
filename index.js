function tic() {
    let output = []
    let value = 'xo'
    let random
    let freqx = 0
    let freqo = 0
    for (let i=0; i<3; i++) {
        output.push([])
        for (let j=0; j<3; j++) {
            random = value[Math.floor(Math.random() * 2)]
            if (freqx > 4 ) { output[i].push('o') }
                else if (freqo > 4) { output[i].push('x') }
                else { output[i].push(random) }
            if (random == 'x') { freqx++ }
                else if (random == 'o') { freqo++ }
        }
    }
    return output
}
console.log(tic())
console.log(tic())
console.log(tic())