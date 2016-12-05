var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('generate the correct message object', () => {
    var from = 'Derp';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    var from = 'Derp';
    var latitude = 15;
    var longitude = 19;
    var url = 'https://www.google.com/maps/?q=15,19';
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from,url});
  });
});
