function calcPercent(remainingHealth, maximumHealth) {
  return (remainingHealth * 100)  / maximumHealth 
}

function getDiceHtml(diceCount, type) {
  return new Array(diceCount).fill(0).map(() =>{
    return    `
    <div class="panel">
      <div class="dice  ${type === 'monster'? 'dice-monster' : 'dice-hero'}" style="transform: translateZ(-100px) rotateY(-45deg) rotateX(-45deg)";>
        ${new Array(6).fill(0).map((_,index) => {
          return ` <div class="dice__side dice__side--${index + 1} ${type === 'monster'? 'dice__side-monster' : 'dice__side-hero'}">
          <p class="dice__num dice__num--${index + 1}">${index + 1}</p>
        </div> 
        `
        }).join("")}
      </div>
    </div>
    `
  }).join("")
}

function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => Math.floor(Math.random() * 6 + 1))
}

function rollDice(diceType,currentDiceScore) {
  diceType.forEach((die,index) => {

    die.style.transform = `translateZ(-100px) rotateY(-45deg) rotateX(-45deg)`
    die.style.transitionDuration = '600ms'
    
    setTimeout(() =>{
      let randomNumber = currentDiceScore[index];
      let x = "";
      let y = "";
      switch (randomNumber) {
        case 1:
          x = 720;
          y = 810;
          break;
        case 6:
          x = 720;
          y = 990;
          break;
          default:
            x = 720 + (6 - randomNumber) * 90;
          y = 900;
          break;
      }

      die.style.transform = `translateZ(-100px) rotateY(${x}deg) rotateX(${y}deg)`
    }, 400)
  })  
}

function doubleAttackWithoutShield(player1, player2) {
  player2.health -= player1.sumAttack * 2
  player2.damage = player1.sumAttack * 2
  setTimeout(() => player1.doubleAttackLoad = 0, 2000) 

  if(player1.health <= 0 && player2.health <= 0) {
    player2.dead = true
    player2.health = 0

    player1.dead = true
    player1.health = 0

  } else if(player1.health <= 0) {
    player1.dead = true
    player1.health = 0
  } else if(player2.health <= 0) {
    player2.dead = true
    player2.health = 0
  } 
}

function doubleAttackWithShield(player1, player2) {
  player2.health -= 0
  setTimeout(() => player1.doubleAttackLoad = 0, 2000)
  player2.damage = 0
}

export {calcPercent,getDiceHtml,getDiceRollArray, rollDice,doubleAttackWithShield,doubleAttackWithoutShield}