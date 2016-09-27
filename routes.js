var todo = require('./wservices');

module.exports = {
  configure: function(app) {
    app.get('/REST/', function(req, res) {
      todo.get(res);
    });
    app.get('/REST/:id/',function(req,res){
       todo.getById(req.params.id,res);
    });
    app.post('/REST/', function(req, res) {
      todo.create(req.body, res);
    });

    app.put('/REST/:id/', function(req, res) {
      todo.update(req.params.id,req.body, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.delete(req.params.id, res);
    });
  }
};