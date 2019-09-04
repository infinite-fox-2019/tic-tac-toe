function ticTacToe() {
  let giliran = pemain(); // Pemain antara O atau X
  let papan = board(); // Array board
  let string = input(giliran); // Array input

  for (let i = 0; i < string.length; i++) {
    let randomIndexV = Math.floor(Math.random() * 3);
    let randomIndexH = Math.floor(Math.random() * 3);
    if (papan[randomIndexV][randomIndexH] === " ") {
      papan[randomIndexV].fill(string[i], randomIndexH, randomIndexH + 1);
      if (i > 3){
        for (let i = 0; i< papan.length;i++){
          if (papan[i][0] !== ' ' && papan[i][0] === papan[i][1] && papan[i][0] === papan[i][2]){
            console.log(papan)
            return `Pemenangnya adalah ${papan[i][0]}`
          } else if (papan[0][i] !== ' ' && papan[0][i] === papan[1][i] && papan[0][i] === papan[2][i]){
            console.log(papan)
            return `Pemenangnya adalah ${papan[0][i]}`
          } 
        }
        if (papan[1][1] !== ' ' && papan[1][1] === papan[0][0] && papan[1][1] == papan[2][2]){
          console.log(papan)
          return `Pemenangnya adalah ${papan[0][0]}`
        }
        if (papan[1][1] !== ' ' && papan[1][1] === papan[0][2] && papan[1][1] == papan[2][0]){
          console.log(papan)
          return `Pemenangnya adalah ${papan[1][1]}`
        }
      }
    } else {
      i--;
    }
  }
  console.log(papan)
  return "Permainan berakhir imbang";
}

function input(pemain) {
  let output = [];
  for (let i = 0; i < 9; i++) {
    if (pemain == "X") {
      if (i % 2 == 0) {
        output[i] = "X";
      } else {
        output[i] = "O";
      }
    } else {
      if (i % 2 == 0) {
        output[i] = "O";
      } else {
        output[i] = "X";
      }
    }
  }
  return output;
}

function board() {
  let temp = [];
  let result = [];
  let count = 0;
  for (let i = 0; i < 9; i++) {
    if (count < 3) {
      temp.push(" ");
      count++;
    }
    if (temp.length == 3) {
      result.push(temp);
      temp = [];
      count = 0;
    }
  }
  return result;
}

function pemain() {
  let pemain = "";
  let random = Math.floor(Math.random() * 2);
  if (random == 1) {
    pemain = "X";
  } else {
    pemain = "O";
  }
  return pemain;
}

console.log(ticTacToe());

