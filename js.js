

const Final = document.querySelector('#result')
const humanScore = document.querySelector('#user-score')
const iaScore = document.querySelector('#ia-score')

let humanScoreNumber = 0
let iaScoreNumber = 0

const jokenpo = (humanChange) => {


result(humanChange, iaChange())



}

const iaChange = ()=>{   

const choices =['Rock','Paper','Scissors']
const choiceIa = Math.floor(Math.random() * 3)
return choices [choiceIa]




}

const result = (human , ia) => {

    console.log('Humano: '+ human + " Ia: "+ ia)
  

if(human === ia){
    Final.innerHTML = "Deu Empate"
}
else if((human === 'Paper' && ia === 'Rock')||
(human ==='Rock' && ia === 'Scissors')||
(human ==='Scissors' && ia === 'Paper'))
{
    Final.innerHTML = "Parabéns Voçê Ganhou"
humanScoreNumber++
humanScore.innerHTML = humanScoreNumber
}

else 
{
    Final.innerHTML = "Que Pena Voçê Perdeu"
    iaScoreNumber++
    iaScore.innerHTML = iaScoreNumber
}

  }












