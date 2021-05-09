const { program } = require('commander');

program.version('0.0.1');

program
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <value>', 'an input file', './files/input.txt')
  .option('-o, --output <value>', 'an output file', './files/output.txt')
  .option('-a, --action <value>', 'an action encode/decode');

program.parse(process.argv);

const options = program.opts();

if (options.action !== 'encode' || options.action !== 'decode') {
  console.error('Action (encode/decode) and the shift are required');
  // process.exit(1);
}
if (options.shift === undefined) {
  console.error('Action (encode/decode) and the shift are required');
  // process.exit(1);
}
module.exports = options;
