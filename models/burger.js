var orm = require("../config/orm.js");

var burger = {

    all: function(cb) {

    orm.all("burgers", function(res) {

        cb(res);

    });

},

create: function(name, cb) {

    orm.create("burgers", [

        "burger_name", "devoured"

    ], [

        name, false

    ], cb);
},

update: function(value, cb) {

    orm.update(value, "burgers", {

        devoured: true
    }, cb);

}

};

module.exports = burger;