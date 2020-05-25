const fs = require('fs');


// ---------------------- "Creer" mon callback ------------------


// On crée une fonction qui utilise un callback,
// on est un peu bloqué avec les "callbacks" c'est chiont.
const makeSearchCallback = (recherche, callback) => {
    fs.readFile('./res.txt', 'utf-8', (err, data) => {
        if(err) {
            return console.log(`err: ${err}`); // chiant, pas de gestion d'err
        }

        callback(`resultat de la recherche "${recherche}":\n${data}`);
    });
}

// appel callback style :(
// makeSearchCallback('lacoste tn', (resultat) => {
//     console.log(resultat);
//     console.log('\n\n\n----------------------\n\n\n');
// });



// ---------------------- Creer ma promise ------------------



const makeSearch = (recherche) => {
    return new Promise((success, failure) => {

        fs.readFile('./res.txt', 'utf-8', (err, data) => {
            if(err) failure(err);
            success(`"${recherche}":\n${data}`);
        });

    });
}

// appel promise style :)
makeSearch('lacoste TN gros')
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
});



// -------- On peut resolve sans filer de resultat :) ------------------

// short version
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

//  verbose version
// const wait = (ms) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), ms);
//     });
// }

wait(1000).then(() => {
    console.log('tu as attendu 1sec')
})


// -------- On peut executer plusieurs promesses en meme temps, et then a la toute fin  ------------------

Promise.all([ wait(3000), makeSearch('lacost stp')])
.then((res) => {
    console.log('toutes les promesses sont fullfilled :) ')
    console.log(res);
});

