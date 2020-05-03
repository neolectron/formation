let mysteryWord = prompt('choisi le mot mystere').toUpperCase();
let display = '_'.repeat(mysteryWord.length);

while(mysteryWord !== display) {

    // je demande le guess, et stoque sa position
    let guess = prompt(`devine : ${display}`).toUpperCase();
    let foundPos = mysteryWord.indexOf(guess);


    //tant que la position correspond a une position valide
    while(foundPos !== -1 && guess.length === 1) {
        // je découpe en 2 parties, avant et apres le guess
        let firstPart = display.substring(0, foundPos);
        let lastPart = display.substring(foundPos + 1);
    
        // je concatene en insérant la lettre trouvée
        display = `${firstPart}${guess}${lastPart}`;
        // je remet foundPos a la position de la PROCHAINE lettre identique
        // ou -1 si il y en a pas, donc on sort de la petite-boucle
        foundPos = mysteryWord.indexOf(guess, foundPos + 1);
    }
    // fin de la petite-boucle,
}
// fin de la grande boucle
alert('lilalilaloum t\'as gagné');