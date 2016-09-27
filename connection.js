var mysql = require('mysql');

function Connection() {
  this.pool = null;

  this.init = function() {
    this.pool = mysql.createPool({
      connectionLimit: 10,
      host     : 'mysql1.gear.host',
      user     : 'mydatabase6',
      password : 'Yf4W-O4Wd0?l',
      database : 'mydatabase6'
    });
  };

  this.acquire = function(callback) {
    this.pool.getConnection(function(err, connection) {
      callback(err, connection);
      if(err)
      {
        console.log("connection Failed");
      }
      else{
        console.log("Connection successfully");
      }
    });
  };
}

module.exports = new Connection();