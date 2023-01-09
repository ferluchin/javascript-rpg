const characterData = {
    hero: {
        name: "Hechicero",
        // avatar: "./images/wizard.png",  // local path
        avatar: "https://raw.githubusercontent.com/ferluchin/javascript-rpg/ce694b63f0a83ec42ea3e831d8bd0c27d00c604f/images/wizard.png",
        health: 60,
        diceCount: 3,
        currentDiceScore: []
    },
    orc: {
        name: "Orco",
        // avatar: "public/orc.png",
        avatar: "https://raw.githubusercontent.com/ferluchin/javascript-rpg/ce694b63f0a83ec42ea3e831d8bd0c27d00c604f/images/orc.png",
        health: 30,
        diceCount: 1,
        currentDiceScore: []
    },
    demon: {
        name: "Demonio",
        // avatar: "./images/demon.png",
        avatar: "https://raw.githubusercontent.com/ferluchin/javascript-rpg/ce694b63f0a83ec42ea3e831d8bd0c27d00c604f/images/demon.png",
        health: 25,
        diceCount: 2,
        currentDiceScore: []
    },
    goblin: {
        name: "Duende",
        // avatar: "./images/goblin.png",
        avatar: "https://raw.githubusercontent.com/ferluchin/javascript-rpg/ce694b63f0a83ec42ea3e831d8bd0c27d00c604f/images/goblin.png",
        health: 20,
        diceCount: 3,
        currentDiceScore: []
    }
}

export default characterData