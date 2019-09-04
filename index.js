function tictactoe(col, row) {
    let size = col * row
    let lib = []
    let count = 0
    while (lib.length < size) {
        lib.push(count)
        count++
    }


    let oneLineboard = []
    let player = ''
    let random = Math.round(Math.random() * 1)
    random === 1 ? player = 'X' : player = 'O'

    for (let i = 0; i < size; i++) {
        player === 'O' ? player = 'X' : player = 'O'
        let random = Math.floor(Math.random() * lib.length)
        oneLineboard[lib[random]] = player
        lib.splice(random, 1)
    }

    let count2 = 0
    let output = []
    for (let j = 0; j < col; j++) {
        let temp = []
        for (let k = 0; k < row; k++) {
            temp.push(oneLineboard[count2])
            count2++
        }
        output.push(temp)
    }
    return output

}
console.log(`board 3 x 3`);
console.log(tictactoe(3, 3));

console.log(`\nboard 4 x 4`);

console.log(tictactoe(4, 4));

console.log(`\nboard 4 x 4`);
console.log(tictactoe(5, 4));

console.log(`\nboard 5 x 2`);
console.log(tictactoe(5, 2));
