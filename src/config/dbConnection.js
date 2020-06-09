const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '13.84.204.51',
    user: 'root',
    password: 'Eddydelgado9443',
    database: 'Spotify'
  });
}