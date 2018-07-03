const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user has connected');

    socket.on('disconnect', () => {
        console.log('User has disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up on port ${port}`);
});
