const express = require('express');
const router = express.Router();

router.get('/todos', (req, res) => {
    res.json(req.db);
});


module.exports = router;
