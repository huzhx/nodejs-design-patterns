const createServer = require('http').createServer;
const createWriteStream = require('fs').createWriteStream;
const createGunzip = require('zlib').createGunzip;
const basename = require('path').basename;
const join = require('path').join;

const server = createServer((req, res) => {
  const filename = basename(req.headers['x-filename']);
  const destFilename = join('received_files', filename);
  console.log(`File request received: ${filename}`);
  req
    .pipe(createGunzip())
    .pipe(createWriteStream(destFilename))
    .on('finish', () => {
      res.writeHead(201, { 'Content-Type': 'text/plain' })
      res.end('OK\n')
      console.log(`File saved: ${destFilename}`)
    });
});

server.listen(3000, () => console.log('Listening on http://localhost:3000'));
