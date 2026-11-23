
module.exports = (req, res) => {

    const info = {
        message: 'Server Information',
        method: req.method,
        url: req.url,
        httpVersion: req.httpVersion,
        userAgent: req.headers['user-agent'] || 'Not provided',
        port: 3000
    };

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
    });

    res.end(JSON.stringify(info, null, 2));

};
