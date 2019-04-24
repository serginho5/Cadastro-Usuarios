import { User } from './connection';

module.exports = function (app) {

  
  app.get('/users', (req, res) => {
    //listar usuarios do banco
    User.find({}, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(data);
    });
  });
  
  app.get('/users/:id', (req, res) => {
    // exibe um unico usuario
    User.findOne({_id: req.params.id}, (err, data) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(data);
    });
  });
  
app.post('/users', (req, res) => {
    //incluir um uuario no banco de dados
    const user = User(req.body);
    user.save((err) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.send(user);
    });
    });
}