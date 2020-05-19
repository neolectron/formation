const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const todoRouter = require('./routes/todo.js');
const todosRouter = require('./routes/todos.js');

const app = express();
const port = 8080;

app.use(express.static('public'));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(todoRouter);
app.use(todosRouter);

app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
});
