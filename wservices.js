 
var connection = require('./connection');

function REST() {
 this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from customers', function(err, result) {
        con.release();
        console.log(result);
        res.send(result);

      });
    });
  };
  
  this.getById = function(id,res) {
    connection.acquire(function(err, con) {
      con.query('select * from customers where customer_id = ?',[id], function(err, result) {
        con.release();
        console.log(result);
        console.log("Reached"+ " and id = "+id);
        res.send(result);

      });
    });
  };

   this.create = function(todo, res) {
    connection.acquire(function(err, con) {
      con.query('insert into customers set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'CUSTOMER creation failed'});
        } else {
          res.send({status: 0, message: 'CUSTOMER created successfully'});
        }
      });
    });
  };
  this.update = function(id,todo, res) {
    connection.acquire(function(err, con) {
      con.query('update customers set ? where customer_id = ?', [todo, id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'CUSTOMER update failed'});
        } else {
          res.send({status: 0, message: 'CUSTOMER updated successfully'});
        }
      });
    });
  };
}

module.exports = new REST();
/*
var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'mysql1.gear.host',
  user     : 'mydatabase6',
  password : 'Yf4W-O4Wd0?l',
  database : 'mydatabase6'
});

dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successfully');
  }
});
dbconn.end(function(err) {
  // Function to close database connection
});
*/
