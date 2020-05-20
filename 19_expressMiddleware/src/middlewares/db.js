const fs = require('fs');

const dbPath = `${process.mainModule.path}/db/db.json`;

const dbMiddleware = (req, res, next) => {

    req.saveDb = (db, callback) => {

        if(Array.isArray(db)) {
            db = JSON.stringify(db);
        }

        fs.writeFile(dbPath, db, (err) => {
            if(err) { 
                return res.status(500).end('deso pas deso');
            }
            callback();
        });
    }


    fs.readFile(dbPath, 'utf-8', (err, file) => {
        if(err) { 
            return res.status(500).end('deso pas deso');
        }

        req.db = JSON.parse(file);
        next();
    });
}

module.exports = dbMiddleware;