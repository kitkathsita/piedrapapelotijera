console.log("hola")


function random(max){
  return Math.floor(Math.random()*max)
}

//let a = random(3)


function getComputerChoice(a){
  if (a==1){
    return "rock"
  }
  else if (a==2){
    return "paper"
  }
  else{
    return "scissors"
  }
}

let win = 0
let lose = 0

function playRound(computer, person){
  let playerselection = person.toLowerCase()
  let computerselection = computer

  console.log(playerselection)
  console.log(computerselection)

  if (playerselection===computerselection){
    console.log("It's a tie")
  }
  else{
    switch(computerselection){
      case "rock":
        if (playerselection==="paper"){
          console.log("You won :)")
          win++ 
        }
        else {
          console.log("You lose :(")
          lose++
        }
        break
      case "scissors":
        if (playerselection==="paper"){
          console.log("You lose :(")
          lose++
        }
        else{
          console.log("You won :)")
          win++
        }
        break
      case "paper":
        if (playerselection==="scissors"){
          console.log("You won :)")
          win++
        }
        else{
          console.log("You lose :)")
          lose++
        }
        break
    }
  } 
}

function game(){
  for (let i = 0; i < 5; i++){
    let playerselection = prompt()
    playRound(getComputerChoice(random(3)), playerselection)
  }
  if  (win===lose){
    console.log("IT'S A TIE")
  }
  else if (win < lose){
    console.log("the computer won")
  }
  else{
    console.log("You won")
  }
}

game()