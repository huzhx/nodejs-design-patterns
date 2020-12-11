const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;
const createGzip = require('zlib').createGzip;

const filename = process.argv[2];

createReadStream(filename)
  .pipe(createGzip())
  .pipe(createWriteStream(`${filename}.gz`))
  .on('finish', () => console.log('File successfully compressed'));

