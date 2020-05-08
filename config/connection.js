var express = require("express");
var mysql = require("mysql")
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: 3306,
        database: "burgers_db"
    });
};

connection.connect(err => {
    if (err) throw err
    console.log(`Connected to MySQL as id ${connection.threadId}`)
})

module.exports= connection