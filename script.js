//console.log("hola")


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
let plays = 1

function playRound(){
  let playerselection = this.classList[1]
  let computerselection = getComputerChoice(random(3))

  if (plays===5){
    if(win===lose){
      round.classList.add('big')
      round.textContent = "IT'S A TIE"
    }
    else if(win<lose){
      round.classList.add('big')
      round.textContent = 'YOU LOSE'
    }
    else{
      round.classList.add('big')
      round.textContent = 'YOU WON'
    }
    return
  }

  if (playerselection===computerselection){
    round.textContent = "It's a tie"
  }
  else{
    switch(computerselection){
      case "rock":
        if (playerselection==="paper"){
          win++ 
          counter[0].textContent = win
          round.textContent = "You won this round!"
        }
        else {
          lose++
          counter[1].textContent = lose
          round.textContent = "The computer won this round"
        }
        break
      case "scissors":
        if (playerselection==="paper"){
          lose++
          counter[1].textContent = lose
          round.textContent = "The computer won this round"
        }
        else{
          win++
          counter[0].textContent = win
          round.textContent = "You won this round!"
        }
        break
      case "paper":
        if (playerselection==="scissors"){
          win++
          counter[0].textContent = win
          round.textContent = "You won this round!"
        }
        else{
          lose++
          counter[1].textContent = lose
          round.textContent = "The computer won this round"
        }
        break
    }
  } 
  plays++
}

const select = document.querySelectorAll('.but')
const counter = document.querySelectorAll('.counter')
const round = document.querySelector('.round')
  

for (let i = 0; i < 5; i++){
  select.forEach(but => but.addEventListener('click', playRound))
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

select.forEach(but => but.addEventListener('click', playRound))
//select.forEach(but => but.addEventListener('click', game))

