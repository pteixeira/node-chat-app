var socket = io();

socket.on('connect', function() {
  console.log('Connected to server!');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server')
});


// Listen for newMessage
socket.on('newMessage', function(message) {
  var formattedTime = moment().format('HH:mm');

  var li = jQuery('<li></li>').text(`[${formattedTime}] ${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
  var li = $('<li></li>');
  var a = $('<a target="_blank">My Current Location</a>');
  var formattedTime = moment().format('HH:mm');

  li.text(`[${formattedTime}] ${message.from}: `);
  a.attr('href', message.url);
  li.append(a);
  $('#messages').append(li);
});

$('#message-form').on('submit', function(ev) {
  ev.preventDefault();

  var messageTextBox = $('[name=message]');
  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function() {
    messageTextBox.val('');
  });
});

var locationButton = $('#send-location');
locationButton.on('click', (ev) => {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser!');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition((position) => {
    locationButton.removeAttr('disabled').text('Send location');

    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }, (err) => {
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch location');
  });
});
