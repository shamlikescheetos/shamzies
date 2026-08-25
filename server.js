const http = require('http');
const Unblocker = require('node-unblocker');
const unblocker = new Unblocker({ prefix: '/proxy/' });

http.createServer((req, res) => {
    unblocker(req, res, (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(err.stack || err.toString());
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });
}).listen(process.env.PORT || 3000, () => {
    console.log('Proxy running!');
});
