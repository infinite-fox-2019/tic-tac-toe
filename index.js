

// function tictactoe(row){
// let arr = []
// let kamus = ['x','o']
// let countx = 0
// let counto = 0

// for(let i = 0 ; i < row ; i++){
//     arr.push([])
//     for(let j = 0; j < row;j++){
//         let random = Math.round(Math.random() * 1)
//         if(countx >= Math.floor(row*row)){
//             arr[i].push('o')
//         } else if(counto >= Math.floor(row*row)){
//             arr[i].push('x')
//         } else {
//             arr[i].push(kamus[random])
//             if(random === 0){
//                 countx++
//             } else {
//                 counto++
//             }
//         }
//     }
// }
// return arr
// }
// console.log(tictactoe(3));

function tictactoe_test(template, randomXO){
    let parameter = ''
    if (randomXO == 'X') {
        parameter = 'XXX'
    } else if (randomXO == 'O') {
        parameter = 'OOO'
    }
    // samping
    for(let i = 0 ; i < template.length; i++){
        if(template[i].join == parameter){
            return true
        }
    }
    // bawah
    for(let i = 0 ; i < template.length; i++){
        let temp = ''
        for(let j = 0 ; j < template.length; j++){
            temp+=template[j][i]
        }
        if (temp == parameter) {
            return true
        }
    }
    // cek silang 1
    let silang1 = template[0][0] + template[1][1] + template[2][2]
    if (silang1 == parameter) {
        return true
    }
    // cek silang 2
    let silang2 = template[0][2] + template[1][1] + template[2][0]
    if (silang2 == parameter) {
        return true
    }
    return false
}

let template = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

let XorO = Math.round(Math.random())
let randomXO = ''
if (XorO == 0) {
    randomXO = 'XOXOXOXOX'
} else {
    randomXO = 'OXOXOXOXO'
}

let count = 0
let check = false
while(check == false && count <= 8){
    let randomSatu = Math.floor(Math.random() * 3)
    let randomDua = Math.floor(Math.random() * 3)

    if (template[randomSatu][randomDua] == ' ' && count < 9) {
        template[randomSatu][randomDua] = randomXO[count]
        var test = randomXO[count]
        check = tictactoe_test(template, test)
        count++
    }
}

if (check == true) {
    console.log(template);
    console.log(`${test} WIN!`);
} else if (check == false && count > 8){
    console.log(template);
    console.log(`DRAW!`);
}