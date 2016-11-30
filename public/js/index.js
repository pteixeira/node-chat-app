var socket = io();

socket.on('connect', function() {
  console.log('Connected to server!');

  socket.emit('createMessage', {
    from: 'Juan',
    text: 'This is a message!'
  });

});

socket.on('disconnect', function() {
  console.log('Disconnected from server')
});


// Listen for newMessage
socket.on('newMessage', function(message) {
  console.log('New message received', message);
});

