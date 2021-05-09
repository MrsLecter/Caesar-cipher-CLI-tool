// const fs = require('fs');
const { Writable } = require('stream');
const { StringDecoder } = require('string_decoder');

class writableStream extends Writable {
  constructor(props) {
    super(props);
    this._decoder = new StringDecoder('utf-8');
  }
  _write(output) {
    console.log(`Transformed text: ${output.toString()}`);
    //  fs.createWriteStream(options.output, 'utf8')
  }
}
module.exports = writableStream;
