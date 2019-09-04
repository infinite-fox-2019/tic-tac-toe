function ticTacToe (num = 3) {
    let result = []
    let countX = 0
    let countO = 0
    let xo = 'XO'
    for (let i = 0; i < num; i++) {
        let store = []
        for (let j = 0; j < num; j++) {
            let generator = Math.floor(Math.random() * 2)
            if (countO < 5 && countX < 5) {
                store.push(xo[generator])
                if (store[j] === 'X') {
                    countX++
                } else {
                    countO++
                }
            } else {
                if (countX === 5) {
                    store.push('O')
                    countO++
                } else {
                    store.push('X')
                }
            }
        }
        result.push(store)
    }
    return result
}


// TEST CASE
console.log(ticTacToe())