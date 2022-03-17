var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('inside get');
    // let data = models.messages.getAll(); //invoke the models.get from model
    // let messages = [...data]; //turn data into an array

    // res.send(messages); //send back the messages

    // w cb's
    models.messages.getAll( (err, results) => {
      if (err) {
        throw ('error in controllers.messages.get');
        res.sendStatus(500);
      } else {
        console.log('results within controllers.messages.get');
        let messages = [...results];
        //status code an json response
        res.status(200).send(messages);
      }
    });
  }, // a function which handles a get request for all messages


  // a function which handles posting a message to the database
  post: function (req, res) {
    let params = [req.body.message, req.body.username, req.body.roomname];
    models.message.create(params, (err, results) => {
      if (err) {
        console.error('unable to post messages to the database: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
};
