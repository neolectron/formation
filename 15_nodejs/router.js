const fs = require('fs');

const router = (req, res) => {
    if(req.url.startsWith('/home')) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        fs.readFile('./pages/home.html', { encoding : 'utf-8' }, (err, homepage) => {
            if(err) { res.end('err'); }

            res.end(homepage);
        });

    } else {
        res.writeHead(404);
        res.end('404');
    }
}

module.exports = router;