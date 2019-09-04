/*
buat 3x3 board papan game 
isi x dan o harus 4 5, dan lokasi acak
*/

//release 0

function tictacBoard(baris, kolom){
    let countX=0
    let countO=0
    let board = []
    for(let i=0; i<baris; i++){
        let row = []
            for(let j=0; j<kolom; j++){
                let xo=""
                let random = Math.floor(Math.random()* 2)      
                if(countX>=4){
                    xo+="O"                      
                }else if(countO>=4){
                    xo+="X"                      
                }else if(random===1){
                    xo+="X"
                    countX++
                }else if(random===0){
                    xo+="O"
                    countO++
                }
                //console.log(countO,countX)
                row.push(xo)
            }

        board.push(row)
    }   
    return board
}

console.log(tictacBoard(3,3))
