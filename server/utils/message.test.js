var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('generate the correct message object', () => {
    var from = 'Derp';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
