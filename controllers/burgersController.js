var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {

    res.redirect("/burgers");

});

router.get("/burgers", function(req, res) {

    burger.all(function(burgerData) {

        res.render("index", { burger_data: burgerData});
    });
});

router.post("/burgers/create", function(req, res) {
    console.log(req.body);
    burger.create(req.body.burger_name, function(result) {

        console.log(result);
        res.redirect("/");
    });
});

router.post("/burgers/delete", function(req, res) {
  burger.delete(req.params, req.body.burger_name, function(result) {
    console.log(result);
    res.redirect("/");
  })
})

router.post("/burger/update", function(req, res) {
    console.log(req.body);
    burger.update(req.body, function(result) {

        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;