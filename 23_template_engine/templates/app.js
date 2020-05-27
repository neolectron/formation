const express = require('express');
const app = express();

const port = 8080;

app.set('views', './pages');
app.set('view engine', 'pug');


const header_items = [
    'le site',
    'a propos',
    'section michel',
    'contact'
];

app.get('/', (req, res) => {
    res.render('index', { headersItems : header_items});
});

app.get('/admin', (req, res) => {
    res.render('admin');
});

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});