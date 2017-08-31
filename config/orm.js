var connection = require("./connection.js");


function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }

  return arr.toString();
}

var orm =  {

  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table + ";";

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },


  insertOne: function(table, cols, vals, callback) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }


  update: function(table, obj, condition, callback) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(obj);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      callback(result);
    });
  }

}

module.exports = orm;
