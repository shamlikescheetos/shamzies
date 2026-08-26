const express = require('express');
const http = require('http');
const path = require('path');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');
const app = express();

app.use(express.static(__dirname));
app.use('/uv/', express.static(uvPath));

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    console.log('Server active.');
});
