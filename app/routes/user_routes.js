var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.post('/users', (req, res) => {
    const user = {name: req.body.name};
    db.collection('users').insert(user, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occured' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
}
