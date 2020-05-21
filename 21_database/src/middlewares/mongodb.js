const mongoose = require('mongoose');
const Todos = require('../model/todos.js');

mongoose.connect('mongodb://localhost/todoDb',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const mongoDbMiddleware = (req, res, next) => {
    
    req.db = mongoose;
    req.model = {};
    req.model.Todos = Todos;

    next();
}

module.exports = mongoDbMiddleware;