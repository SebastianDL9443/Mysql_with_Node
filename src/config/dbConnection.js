const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '*.*.*.*',
    user: 'root',
    password: '123',
    database: 'Spotify'
  });
}
