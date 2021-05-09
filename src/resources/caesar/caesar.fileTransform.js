const transformStream = require('./caesar.transformStream');
// const writableStream = require('./caesar.writableStream');
// const readableStream = require('./caesar.readableStream');
const options = require('./caesar.commanderSettings');
const { pipeline } = require('stream');
const fs = require('fs');
// const { option } = require('commander');

pipeline(
  fs.createReadStream(options.input),
  // new readableStream(options.input),
  new transformStream(),
  fs.createWriteStream(options.output, 'utf8'),
  // new writableStream(options.output, 'utf8'),
  error => {
    if (error) {
      console.error(error);
    } else {
      console.log('finished');
    }
  }
);
