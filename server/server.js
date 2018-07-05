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


    socket.on('createMessage', (message) => {
        console.log(message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });

    // socket.emit('newEmail', {
    //     from: 'pasquale@pasquale.net',
    //     text:'oh hey what up'
    // });
    //
    // socket.on('createEmail', (data) => {
    //     console.log('createEmail', data);
    // });
    //
    // socket.on('disconnect', () => {
    //     console.log('User has disconnected');
    // });
});

server.listen(port, () => {
    console.log(`Started up on port ${port}`);
});

//newMessage event from server - from, text, date - log to console
//createMessage event from client to server - from, text
