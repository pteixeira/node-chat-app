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

socket.on('newLocationMessage', function(message) {
  var li = $('<li></li>');
  var a = $('<a target="_blank">My Current Location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  $('#messages').append(li);
});

$('#message-form').on('submit', function(ev) {
  ev.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function() {});
});

var locationButton = $('#send-location');
locationButton.on('click', (ev) => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser!');
  }

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, (err) => {
    alert('Unable to fetch location');
  });
});
