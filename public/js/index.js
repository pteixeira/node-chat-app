var socket = io();

socket.on('connect', function() {
  console.log('Connected to server!');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server')
});


// Listen for newMessage
socket.on('newMessage', function(message) {
  console.log('newMessage', message);

  var li = jQuery('<li></li>').text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

$('#message-form').on('submit', (ev) => {
  ev.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, () => {});
});
