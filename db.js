const sqlite3 = require('sqlite3');

function createDb(dbFile) {
  return new sqlite3.Database(dbFile);
}

module.exports = createDb;
