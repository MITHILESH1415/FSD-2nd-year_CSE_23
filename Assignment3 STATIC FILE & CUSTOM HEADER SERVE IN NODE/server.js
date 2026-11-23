
const http = require('http');

const home = require('./home');
const about = require('./about');
const info = require('./info');
const notFound = require('./notFound');

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        home(req, res);
    }

    else if (req.method === 'GET' && req.url === '/about') {
        about(req, res);
    }

    else if (req.method === 'GET' && req.url === '/info') {
        info(req, res);
    }

    else {
        notFound(req, res);
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
