const express = require('express');
const http = require('http');
const path = require('path');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');
const app = express();

app.use(express.static(__dirname));
app.use('/uv/', express.static(uvPath));

// Fallback to route requests properly into Ultraviolet
app.use((req, res, next) => {
    if (req.url.startsWith('/uv/service/')) {
        res.sendFile(path.join(uvPath, 'uv.config.js'));
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    console.log('Server active.');
});
