const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    res.sendFile(`${process.mainModule.path}/db/db.json`);
});


module.exports = router;