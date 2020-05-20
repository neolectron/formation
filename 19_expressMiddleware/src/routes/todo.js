const express = require('express');
const router = express.Router();

router.get('/todo/:id', (req, res) => {
    const {id} = req.params;
    res.json(req.db[id]);
});


router.post('/todo', (req, res) => {
    const { db, body : todo} = req;

    todo.id = db.length;
    db.push(todo);

    req.saveDb(db, () => res.json(todo));
});


router.patch('/todo/:id', (req, res) => {
    const { params : {id}, body, db } = req;

    db[id] = { ...db[id], ...body };
    req.saveDb(db, () => res.json(db[id]));
});


router.delete('/todo/:id', (req, res) => {
    const { params : {id}, body, db } = req;

    db[id] = null;
    req.saveDb(db, () => res.json(db));
});

module.exports = router;