const express = require('express');
const { getRandomNumber } = require('./utils.js');

const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('/randomText', (req, res) => {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz\' -\n';
    const randomLength = getRandomNumber(1, 10000);

    const randomText = Array(randomLength).fill(null).map(() => {
        const index = getRandomNumber(0, alphabet.length - 1);
        return alphabet[index];
    });

    res.set('Content-Type', 'text/plain');
    res.end(randomText.join(''));
});


app.listen(port, () => {
    const now = new Date(Date.now());
    console.log(`[${now.getHours()}:${now.getMinutes()}] server started on http://localhost:${port}`);
});