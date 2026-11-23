
module.exports = (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store'
    });

    res.end('Hello! Welcome to Node.js HTTP Server.');

};
