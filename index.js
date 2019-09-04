function tictactoe(row){
let arr = []
let kamus = ['x','o']
let countx = 0
let counto = 0

for(let i = 0 ; i < row ; i++){
    arr.push([])
    for(let j = 0; j < row;j++){
        let random = Math.round(Math.random() * 1)
        if(countx >= Math.floor(row*row)){
            arr[i].push('o')
        } else if(counto >= Math.floor(row*row)){
            arr[i].push('x')
        } else {
            arr[i].push(kamus[random])
            if(random === 0){
                countx++
            } else {
                counto++
            }
        }
    }
}
return arr
}
console.log(tictactoe(3));
