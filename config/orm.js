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

    cb(result);
})

},

create: function(table, cols, vals, cb) {


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

        cb(result);
    })
},

update: function(table, objColVals, condition, cb) {

    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {

        if (err) {

            throw err;

        }

        cb(result);
    })

},

delete: function(table, name, cb) {
    var queryString = "DELETE FROM " + table + " WHERE burger_name = " + name;
    connection.query(queryString, function(err, result) {
        if(err){
            throw err;
        }
        cb(result);
    })
}


}

module.exports = orm;