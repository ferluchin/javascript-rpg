import knightImg from '../assets/images/knight.png';
import wizardImg from '../assets/images/wizard.png';
import orcImg from '../assets/images/orc.png';
import demonImg from '../assets/images/demon.png';
import goblinImg from '../assets/images/goblin.png';

const characterData = {
  knight: {
    name: "Knight",
    avatar: knightImg,
    health: 30,
    diceCount: 2,
    currentDiceScore: [],
    type: 'hero'
  },
  wizard: {
    name: "Wizard",
    avatar: wizardImg,
    health: 60,
    diceCount: 3,
    currentDiceScore: [],
    type: 'hero'
  },
  orc: {
    name: "Orc",
    avatar: orcImg,
    health: 50,
    diceCount: 1,
    currentDiceScore: [],
    type: 'monster'
  },
  demon: {
    name: "Demon",
    avatar: demonImg,
    health: 40,
    diceCount: 2,
    currentDiceScore: [],
    type: 'monster'
  },
  goblin: {
    name: "Goblin",
    avatar: goblinImg,
    health: 40,
    diceCount: 3,
    currentDiceScore: [],
    type: 'monster'
  }
}

export default characterData;