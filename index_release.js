const kamus = [
    ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'],
    ['o', 'x', 'o', 'x', 'o', 'x', 'o', 'x', 'o']
]

function ticTacToe(kamus) {
    
    let selectedPattern = kamus[Math.floor(Math.random() * 2)]
    console.log(selectedPattern);
       
    let result = []
    

    for (let i=0; i<3; i++) {
        result.push([])
        for (let j=0; j<3; j++) {
            result[result.length-1].push(' ')
        }
    }

    let koordinatI = 0
    let koordinatJ = 0

    while (true) {
        koordinatI = Math.floor(Math.random() * 3)
        koordinatJ = Math.floor(Math.random() * 3)

        if (result[koordinatI][koordinatJ] === ' ') {
            result[koordinatI][koordinatJ] = selectedPattern[0]
            selectedPattern = selectedPattern.slice(1)
        }
        if (winner(result) !== '') {
            for (let i=0; i<result.length; i++) {
                console.log(result[i]);
            }
            return winner(result)
        }
        if (selectedPattern.length === 0) {
            for (let i=0; i<3; i++) {
                console.log(result[i]);
            }
            return 'Draw!'
        }
        
    }
}
function winner(result) {
    for (let i=0; i<3; i++) {
        if (result[i][0] === result[i][1] && result[i][1] === result[i][2] && result[i][1] !== ' ') {
            return `${result[i][1]} WIN!`
        }
    }
    for (let i=0; i<3; i++) {
        if (result[0][i] === result[1][i] && result[2][i] === result[0][i] && result[0][i] !== ' ') {
            return `${result[i][1]} WIN!`
        }
    }
    if (result[0][0] === result[1][1] && result[1][1] === result[2][2] && result[1][1] !== ' ') {
        return `${result[1][1]} WIN!`
    }
    if (result[0][0] === result[1][1] && result[1][1] === result[2][2] && result[1][1] !== ' ') {
        return `${result[1][1]} WIN!`
    }
        return ''
    
}

console.log(ticTacToe(kamus));

//release 0 random xo
//release 1 gantian isi x dan o, bukan x sampai 5 lalu o DAN HARUS random pengisian koordinatnya
//release 2 tentukan pemenang
//release 3 berhenti bila sudah ada pemenang, bukan full board
//release 4 buat AI

