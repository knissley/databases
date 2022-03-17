var models = require('../models');

module.exports = {
  get: function (req, res) {
    // console.log('inside get');
    models.users.getAll( (err, results) => {
      if (err) {
        console.error('error in controllers.users.get');
        res.sendStatus(500);
      } else {
        console.log('results within controllers.users.get');
        let users = [...results];
        //status code an json response
        res.json(users);
      }
    });
  },

  post: function (req, res) {
    params = [req.body.username];
    models.users.create(params, function(err, results) {
      if (err) {
        throw ('error in controllers.users.post');
        res.sendStatus(500);
      } else {
        //status code an json response
        // retrieve from the request
        // console.log(req.body);

        res.status(201);
      }
    });
  }
};