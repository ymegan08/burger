// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all SQL statement functions
var orm = {
    // Function that returns all table entries
    selectAll: function(cb) {
      var queryString = 'SELECT * FROM burgers';
      connection.query(queryString, function(err, data){
        if(err) throw err;
        cb(data);
      });
    },
    // Function that inserts a single table entry
    insertOne: function(burger_name, cb) {
      var queryString = 'INSERT INTO burgers SET ?';
      connection.query(queryString, {burger_name: burger_name, devoured: false}, function(err, data){
        if(err) throw err;
        cb(data);
      });
    },
    // Function that updates a single table entry
    updateOne: function(burgerID, cb) {
      var queryString = 'UPDATE burgers SET ? WHERE ?';
      connection.query(queryString, [
        {devoured: true},
        {id: burgerID}
      ], function(err, data){
        if(err) throw err;
        cb(data);
      });
    }
};

// Export the orm object for the model
module.exports = orm;
