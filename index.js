function tic_tac_toe (){
  let result = []
  let sign = ['X', 'O']
  let xCount = 0
  let oCount = 0
  for(let i =0 ; i < 3 ; i++){
    let penampung = []
    for(let j=0 ; j<3 ; j++){
      let random = sign[Math.floor(Math.random()*sign.length)]
      if(random == 'X'){
        xCount += 1
      } else if(random == 'O' ){
        oCount += 1
      }

      if(xCount == 5){
        penampung.push('O')
      } else if (oCount == 5){
        penampung.push('X')
      } else {
        penampung.push(random)

      }

    }
    result.push(penampung)
  }
  return(result)

}

console.log(tic_tac_toe())
