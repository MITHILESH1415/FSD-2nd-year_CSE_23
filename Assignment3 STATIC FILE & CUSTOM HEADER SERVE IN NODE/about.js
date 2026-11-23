
module.exports = (req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-store',
        'X-Custom-Header': 'My-Node-Server'
    });

    res.end(`
        <html>
        <head>
            <title>About Us</title>
        </head>
        <body>
            <h1>About Us</h1>
            <p>This is a Node.js HTTP Server.</p>
        </body>
        </html>
    `);

};
