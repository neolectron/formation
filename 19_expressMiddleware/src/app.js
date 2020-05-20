const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const dbMiddleware = require('./middlewares/db.js');
const todoRouter = require('./routes/todo.js');
const todosRouter = require('./routes/todos.js');

const app = express();
const port = 8080;
const basedir = process.mainModule.path;

// middlewares
app.use(express.static(path.join(basedir, 'public')));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(dbMiddleware);

// routes
app.use(todoRouter);
app.use(todosRouter);

app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
});