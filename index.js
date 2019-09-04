// Release 0
console.log('RELEASE 0');
console.log('==========================================');


function ticTacToe() {
    let array = [[],[],[]];
    const data = 'XO';
    let counterX = 0;
    let counterO = 0;

    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<3; j++){
            let randomize = data.charAt(Math.floor(Math.random() * data.length));
            if(counterO > 4){
                array[i].push('X');
            }
            else if(counterX > 4){
                array[i].push('O');
            }
            else{
                array[i].push(randomize);
                if(randomize == 'X'){
                    counterX++
                }
                else{
                    counterO++
                }
            }
        }
    }
    return array;
}

console.log(ticTacToe());

//Release 1
console.log('RELEASE 1');
console.log('==========================================');

function ticTacToeWin(){
    let array = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    let selesai = false;
    let dataKosong = [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    let random = ' ';

    let sangatRandom = Math.floor(Math.random() * dataKosong.length);

    while(!selesai){
        if(dataKosong.length == 0){
            return 'Draw!'
        }
        sangatRandom = Math.floor(Math.random() * dataKosong.length);
        let lokasiKosong = dataKosong[sangatRandom];
        dataKosong.splice(sangatRandom, 1);
        random = randomize(random);
        array[lokasiKosong[0]][lokasiKosong[1]] = random;
        selesai = checker(array,random);
    }
    console.log(array);
    return `${random} is win!`
    
}

console.log(ticTacToeWin());



function randomize(str){
    const data = 'XO';
    if(str == ' '){
        return data[Math.floor(Math.random() * 2)]
    }
    else if(str == 'X'){       
        return 'O';
    }
    else{
        return 'X'
    }
}

function checker(arr, str){
    if(arr[0][0] == str && arr[0][1] == str &&arr[0][2] == str){
        return true;
    }
    else if(arr[1][0] == str && arr[1][1] == str &&arr[1][2] == str){
        return true;
    }
    else if(arr[2][0] == str && arr[2][1] == str &&arr[2][2] == str){
        return true;
    }
    else if(arr[0][0] == str && arr[1][0] == str &&arr[2][0] == str){
        return true;
    }
    else if(arr[0][1] == str && arr[1][1] == str &&arr[2][1] == str){
        return true;
    }
    else if(arr[0][2] == str && arr[1][2] == str &&arr[2][2] == str){
        return true;
    }
    // ///////
    else if(arr[0][0] == str && arr[1][1] == str &&arr[2][2] == str){
        return true;
    }
    else if(arr[0][2] == str && arr[1][1] == str &&arr[2][0] == str){
        return true;
    }
    return false;
}
