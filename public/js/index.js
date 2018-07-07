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
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});
