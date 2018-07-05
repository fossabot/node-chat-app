var socket = io();

socket.on('connect', function () {
    console.log('Connected to the server');

    // socket.emit('createMessage', {
    //     from: 'Pasquale Client',
    //     text: 'This is from the client'
    // });

    // socket.emit('createEmail', {
    //     to: 'dfdsf@ssd.com',
    //     text:'whaddup'
    // });
});

socket.on('disconnect', function () {
    console.log('Connection has been dropped');
});

socket.on('newMessage', function (message) {
    console.log('New Message:', message);
});

// socket.on('newEmail', function (email) {
//     console.log('New Email', email);
// });
