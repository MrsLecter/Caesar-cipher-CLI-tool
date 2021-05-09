const alphabet = require('./caesar.alphabet');
const options = require('./caesar.commanderSettings');
const { Transform } = require('stream');
const { StringDecoder } = require('string_decoder');

let shift = options.shift;

class transformStream extends Transform {
  constructor(props) {
    super(props);
    this.props = props;
    this._decoder = new StringDecoder('utf-8');
  }

  _transform(chunk, encoding, callback) {
    if (shift < 0) {
      shift = (shift % 26) + 26;
    }
    shift = shift % 26;
    let input = chunk.toString();

    input = input.split('').reduce((acc, char) => {
      let lowerCase = false;
      if (char === char.toLowerCase()) {
        lowerCase = true;
      }
      const index = alphabet.indexOf(char.toUpperCase());
      if (index < 0) {
        return acc + char;
      }

      let resultIndex = index + shift;
      if (resultIndex > alphabet.length - 1) {
        resultIndex -= alphabet.length;
      }
      if (resultIndex < 0) {
        resultIndex += alphabet.length;
      }
      const resultChar =
        lowerCase && alphabet[resultIndex]
          ? alphabet[resultIndex].toLowerCase()
          : alphabet[resultIndex];
      return acc + resultChar;
    }, '');

    callback(null, input);
  }
}
module.exports = transformStream;
