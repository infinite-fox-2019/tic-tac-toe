function tictactoe (matrix) {
    let res = []
    let countX = 0
    let countO = 0
    
    for (let i=0; i<matrix; i++) {
        res.push([])
        let xo = 'xo'
        for (let j=0; j<matrix; j++) {
            if (countX < 5 && countO < 5) {
                res[i].push(xo.charAt(Math.floor(Math.random() * xo.length)))
                // console.log(countX, countO);
                
                if (res[i][j] === 'x') countX++
                if (res[i][j] === 'o') countO++

            } else {
                
                if (countX === 5) {
                    res[i].push(xo[1])
                    countO++
                } else if (countO === 5) {
                    res[i].push(xo[0]) 
                    countX++
                }
            }
            
        }
        
    }
    console.log(countX, countO);
    
return res
}

console.log(tictactoe(3));

//release 0 random xo
//release 1 gantian isi x dan o, bukan x sampai 5 lalu o
//release 2 tentukan pemenang
//release 3 berhenti bila sudah ada pemenang, bukan full board
//release 4 buat AI