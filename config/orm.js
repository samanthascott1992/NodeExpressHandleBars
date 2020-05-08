var connection = require("./connection.js");

function printQuestionMarks(num) {

    var array = []
    for (i=0; i<num; i++) {

        array.push("?")
    }

    return array.toString();

}

function objToSql(ob) {

    var array = []
    
    for (var key in ob) {

        array.push(key + "=" + ob[key])
    }

    return array.toString();
}

var orm = {

all: function(tableInput, cb) {

var queryString = "SELECT * FROM " + tableInput + ";"

connection.query(queryString, function(err, result) {


    if (err) {

        throw err;
    }
    console.log(result);
    cb(result);
})

},

create: function(table, cols, values, cb) {


    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(values.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {

        if (err) {

            throw err;
        }

        cb(result);
    })
},

update: function(id, table, objColValues, cb) {

    var queryString = "UPDATE " + table;
    console.log(id);
    queryString += " SET ";
    queryString += objToSql(objColValues);
    queryString += " WHERE ";
    queryString += "id='"+ id.burger_id +"';"
    
    console.log(queryString);

    connection.query(queryString, function(err, result) {

        if (err) {

            throw err;

        }

        cb(result);
    })

}


}

module.exports = orm;