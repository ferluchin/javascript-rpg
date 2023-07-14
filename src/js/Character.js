import { calcPercent,getDiceHtml, getDiceRollArray, rollDice, } from "./util.js"


class Character {
  constructor(data) {
    Object.assign(this,data)
    this.maxHealth = this.health
    this.diceHtml = getDiceHtml(this.diceCount,this.type)
    this.fullLoad = 20
    this.shieldLoad = 0
    this.doubleAttackLoad = 0
  }
  
  resetDiceHtml() {
    this.diceHtml = getDiceHtml(this.diceCount,this.type)
    this.damage = undefined
  }
  
  setDiceHtml() {
    this.currentDiceScore = getDiceRollArray(this.diceCount)
    
    rollDice(document.querySelectorAll(`.dice-${this.type}`), this.currentDiceScore,this.type)
    
    this.diceHtml = this.currentDiceScore.map((num) =>  {
      let x = "";
      let y = "";
    switch (num) {
      case 1:
        x = 720;
        y = 810;
        break;
      case 6:
        x = 720;
        y = 990;
        break;
        default:
        x = 720 + (6 - num) * 90;
        y = 900;
        break;
    }
      return    `<div class="panel">
    <div class="dice  ${this.type === 'monster'? 'dice-monster' : 'dice-hero'}" style="transform: translateZ(-100px) rotateY(${x}deg) rotateX(${y}deg)"; >
      <div class="dice__side dice__side--${num} ${this.type === 'monster'? 'dice__side-monster' : 'dice__side-hero'}">
        <p class="dice__num dice__num--${num}">${num}</p>
      </div> 
    </div>
  </div>`}).join("")  
  }
  
  takeDamage(opponentDiceScoreArray,ownDiceScoreArray) {
    let damage = opponentDiceScoreArray.reduce((total,num) => total + num)
    let sumAttack = ownDiceScoreArray.reduce((total,num) => total + num)
    
    this.shieldLoad += damage * 0.7
    this.doubleAttackLoad += sumAttack 

    if(this.shieldLoad >= this.fullLoad) {
      damage = 'shield'
      this.health -= 0
      setTimeout(() => this.shieldLoad = 0, 2000)
      
    } else {
      this.health -= damage

      if(this.health <= 0) {
        this.dead = true
        this.health = 0
      }
    }

    this.damage = damage
    this.sumAttack =sumAttack
  }


  loadAction() {
  
    const shieldPercent = calcPercent(this.shieldLoad,this.fullLoad)
    const doubleAttackPercent = calcPercent(this.doubleAttackLoad,this.fullLoad)

    return `
    <div class="character__actions">
      <div class="character__double-attack" style="transform: ${doubleAttackPercent >= 100 ? 'scale(1.2); ' : 'scale(1);'}">
      <div class="character__double-attack-content">
        2X
      </div>
        <div class="character__double-attack-load"  style="height: ${doubleAttackPercent}%;">
          
        </div>
      </div>
      <div class="character__shield" style="transform: ${shieldPercent >= 100 ? 'scale(1.2); ' : 'scale(1);'}">
        <div class="character__shield-content">
          DEF
        </div>
        <div class="character__shield-load" style="height: ${shieldPercent}%;">
          
        </div>
      </div>
    </div>
    `

  }

  getHealthBarHtml() {
    const percent = calcPercent(this.health,this.maxHealth)
    return `
    <div class="character__health-bar-outer">
      <div class="character__health-bar-inner ${percent < 26 ? "danger" : ""} " style="width:${percent}%;">

      </div>
    </div>
    `
  }

  getCharacterHtml() {
    const {name, avatar, health,diceHtml} = this
    const healthBar = this.getHealthBarHtml()
    const actions = this.loadAction()
    
    return `
    <div class="character__card">
    <h4 class="character__name"> ${name} </h4>
    <img class="character__avatar" src="${avatar}" />
    <div class="character__health">health: <b> ${health} </b> <b class="character__damage" style="display: ${this.damage === undefined ? "none" : "inline-block"}"> -${this.damage} </b> </div>
    ${healthBar}
    ${actions}
    <div class="character__dice-container ">
    ${diceHtml}
    </div>
  </div>
    `
  }

  getNewGame() {
    this.health = this.maxHealth
    this.diceHtml = getDiceHtml(this.diceCount,this.type)
    this.dead = false
  }
}

export default Character;