function ticTacToe (){
    let arr = [];
    let str = "";
    let number = Math.round(Math.random());
    let countX = 1;
    let countO = 1;

    for(let i = 0;i<9;i++){
        number = Math.round(Math.random());
        if(number == 0 && countX<6){
            str+= "X";
            countX++;
        } else if (number == 1 && countO<6){
            str += "O";
            countO++;
        } else if (number == 0 ){
            str+= "O";
        } else if (number == 1 ){
            str+= "X";
        }
    } 
    for (let i = 0; i<3;i++){
        arr.push([]);
        for (let j = 0; j<3;j++){
            arr[i].push(str[0]);
            str = str.slice(1);
        }
    }
    return arr;
}
let arr = ticTacToe();
console.log(arr);

console.log(arr [1][2]== "X");
console.log(arr [2][2]== "O");
console.log(arr [0][1]== "X");
console.log(arr [2][0]== "X");
console.log(arr [0][0]== "O");