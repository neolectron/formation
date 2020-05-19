const express = require('express');
const fs = require('fs');
const router = express.Router();

const dbPath = `${process.mainModule.path}/db/db.json`;

const getDbFile = function (callback) {
    fs.readFile(dbPath, 'utf-8', callback);
}

const saveDbFile = function (data, callback) {
    fs.writeFile(dbPath, data, callback);
}


router.get('/todo/:id', (req, res) => {

    const todoID = req.params.id;

    getDbFile((err, file) => {
        if(err) { return res.end(''); }
        
        const jsonDb = JSON.parse(file);
        res.json(jsonDb[todoID]);
    });
});

router.post('/todo', (req, res) => {
    getDbFile((err, file) => {
        if(err) { return res.end(''); }
        
        const jsonDb = JSON.parse(file);
        const todo = req.body;
        
        todo.id = jsonDb.length;
        jsonDb.push(todo);

        saveDbFile(JSON.stringify(jsonDb), (err) => res.json(jsonDb));
    });
});

router.patch('/todo/:id', (req, res) => {

    const todoID = req.params.id;

    getDbFile((err, file) => {
        if(err) { return res.end(''); }
        
        const jsonDb = JSON.parse(file);

        jsonDb[todoID] = req.body;
        jsonDb[todoID].id = todoID;

        saveDbFile(JSON.stringify(jsonDb), (err) => res.json(jsonDb));
    });
});

router.delete('/todo/:id', (req, res) => {
    const todoID = req.params.id;

    getDbFile((err, file) => {
        if(err) { return res.end(''); }
        
        const jsonDb = JSON.parse(file);

        jsonDb[todoID] = null;

        saveDbFile(JSON.stringify(jsonDb), (err) => res.json(jsonDb));

    });
});

module.exports = router;