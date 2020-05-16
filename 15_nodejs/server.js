const http = require('http');

const router = require('./router.js');

const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer(router);

server.listen(port, hostname, () => {
    console.log(`serveur démarré sur ${hostname}:${port}`);
});