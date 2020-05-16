const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8080;

app.use(morgan('tiny'));
app.use(express.static('public'));

app.get('/squeezie', function(req, res){
  res.send('j\'adore squeezie');
});

app.post('/', function(req, res){
    res.send('petit malinois');
});

app.get('/', function(req, res){
  res.send('Hello World');
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});