var db = require('../db');

module.exports = {
  //some function that queires the database and returns the database data, producing all the messages
  getAll: function (callback) {
    let queryString = 'select messages.id, messages.message_text, messages.roomname, users.name \
    from messages left outer join users on (messages.userid = users.name) \
    order by messages.id desc;';
    db.query(queryString, (err, results) => {
      callback(err, results);
    });
  },

  // a function which can be used to insert a message into the database
  create: function (params, callback) {
    db.query(`INSERT INTO messages
    (message_text, userid, roomname)
    VALUE
    (?, (select id from users where name = ? limit 1), ?);`, params, (err, results) => {
      console.log('results from create: ', results);
      callback(err, results);
    });
  }
};
