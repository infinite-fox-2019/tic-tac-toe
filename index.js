function tic_tac_toe(row){
    let hasil = []
    let huruf = 'xo'
    let x = 0
    let o = 0
    
    for(let i = 0; i < row; i++){
        let temp = []
        for( let j = 0; j < row; j++){
            let random = Math.round(Math.random())
            if( random == 0){
                if(x < Math.ceil(row*row)/2){
                    temp.push(huruf[(0)])
                    x += 1
                }
            } else if(random == 1){
                if(o < Math.ceil(row*row)/2){
                    temp.push(huruf[(1)])
                    o += 1
                }
            }
        }
        hasil.push(temp)
    }
    return hasil
}

console.log(tic_tac_toe(4));
