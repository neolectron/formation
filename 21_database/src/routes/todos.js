const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    const { Todos }  = req.model;

    Todos.find({}, (err, docs) => {

        const filteredResults = docs.map((elem) => {
            const objElem = elem.toObject();

            return ({
                ...objElem,
                id : objElem._id
            })
        });

        res.json(filteredResults);
    });
});


module.exports = router;
