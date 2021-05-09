const fs = require('fs');
// const options = require('./caesar.commanderSettings');
const { Readable } = require('stream');
const { StringDecoder } = require('string_decoder');

class readableStream extends Readable {
  constructor(props) {
    super(props);
    this.props = props;
    this._max = 1000;
    this._index = 0;
    this._decoder = new StringDecoder('utf-8');
  }
  _read() {
    return fs.createReadStream(this.props, 'utf8');
  }
}

module.exports = readableStream;
