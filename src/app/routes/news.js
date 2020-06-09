const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();
  app.get('/', (req, res) => {
    
      res.render('news/index', {
      
      });
    });
  

  app.get('/Vista1', (req, res) => {
    connection.query('SELECT * FROM Vista1', (err, result) => {
      res.render('news/Vista1', {
        Vista1: result
      });
    });
  });

  app.get('/Vista2', (req, res) => {
    connection.query('SELECT * FROM Vista2', (err, result) => {
      res.render('news/Vista2', {
        Vista2: result
      });
    });
  });

  app.get('/Vista3', (req, res) => {
    connection.query('SELECT * FROM Vista3', (err, result) => {
      res.render('news/Vista3', {
        Vista3: result
      });
    });
  });

};