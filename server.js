var express = require('express');
var connection = require('./connection');
var routes = require('./routes');
var app = express();
var bodyParser = require('body-parser');
/*
app.get('/',function(req,res){
  res.send('hello from server.js');
});
*/
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
connection.init();
routes.configure(app);
var port = process.env.PORT || 8080;
app.listen(port);
console.log('server running on port 8080');


 
/*app.get('/customersList',function(req,res){

  console.log("I Received a GET request");
   
});


  */
