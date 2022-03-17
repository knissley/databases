var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * from users', (err, results) => {
      callback(err, results);
    });
  },

  create: function (params, callback) {
    let queryStr = 'insert into users(name) values (?)';
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  }
};
