
let askGuess = function() {
    let guess = null;
    while(!guess) {
        guess = parseInt(prompt('devine quel est le nombre mystère ?'));
    }
    return guess;
}

let askDifficulty = function() {
    let difficulty = 0;
    while(difficulty < 1 || difficulty > 3) {
        difficulty = parseInt(prompt('choisissez la difficulté entre 1-3'));
    }
    return difficulty;
}


let getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let game = function() {
    let difficultyLvl = askDifficulty();
    let maxNumber = Math.pow(10, difficultyLvl);
    let mystery = getRandom(0, maxNumber);
    let guessedNumber = null;
    let tries = 0;
    let maxTries = Math.floor(maxNumber * 0.75);
    let done = false;
    let replay = false;

    alert(`Vous jouez en difficulté ${difficultyLvl}, [0-${maxNumber}] \n
    vous avez ${maxTries} essais !`);

    while(!done) {
        
        guessedNumber = askGuess();
        tries++;

        if(guessedNumber === mystery) {
            alert("t'es chaud");
            done = true;
        } else if(guessedNumber < mystery) {
            alert("c'est plus !");
        } else {
            alert("c'est moins");
        }

        if(tries >= maxTries) {
            alert('mais t\'as perdu :/ ');
            done = true;
        }
    }

    replay = prompt(`t'as fini en ${tries} tours ! rejouer ? (o/N)`);    

    if(replay.toLowerCase().startsWith('o')) {
        game();
    }
}


game();