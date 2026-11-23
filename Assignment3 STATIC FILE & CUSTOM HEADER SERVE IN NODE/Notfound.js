
module.exports = (req, res) => {

    res.writeHead(404, {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store'
    });

    res.end('404 Not Found: The requested route does not exist.');

};
