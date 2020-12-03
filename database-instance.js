const Database = require('./database');

/**
 * The info below is fake and just for learning purpose
 */
const dbInstance = new Database('my-app-db', {
  url: 'localhost:5432',
  username: 'user',
  password: 'password',
});

module.exports = dbInstance;
