const express = require('express');
const http = require('http');
const { uvPath } = require('@titaniumnetwork-dev/ultraviolet');
const app = express();

app.use(express.static(uvPath));

app.get('/', (req, res) => {
    res.send('Portfolio Project Live');
});

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => {
    console.log('Server active on port ' + (process.env.PORT || 3000));
});
