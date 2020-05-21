const express = require('express');
const router = express.Router();

router.get('/todo/:id', (req, res) => {
    const { 
        params : {id},
        model: {Todos}
    } = req;

    Todos.findById(id,(err, todo) => {
        res.json({...todo, id: todo._id});
    });
});

router.post('/todo', (req, res) => {
    const { 
        body : todoJson,
        model: {Todos}
    } = req;

    const todo = new Todos(todoJson);
    todo.save(() => {
        res.json(todo);
    });
});


router.patch('/todo/:id', (req, res) => {
        const { 
        params : {id},
        body : todoJson,
        model: {Todos}
    } = req;

    Todos.findByIdAndUpdate(id, todoJson, () => {
        res.json(todoJson);
    });
});


router.delete('/todo/:id', (req, res) => {
        const { 
        params : {id},
        model: {Todos}
    } = req;

    Todos.findByIdAndDelete(id, () => {
        res.json({});
    });
});

module.exports = router;