const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
var app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user has connected');

    //socket.emit from Admin with text that says 'welcome to the chat at'
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app!'));
    //socket.broadcast.emit from admin saying New user joined

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'Welcome another user!'));

    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server!!!!');


    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    })
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
