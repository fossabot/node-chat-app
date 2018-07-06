var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate a message object', () => {
        //store res in variable
        var from = 'Test Admin';
        var text = 'Text123';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe(`number`);
        expect(message).toContain({from,text, createdAt: new Date.getTime()});

        //assert from match
        //assert text match
        //assert createdAt is a number
    });
});
