var express = require("express");
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all routes and set up logic within those routes where required
router.get("/", function (req, res) {
    res.redirect("/index");
});
// Index page to render all burgers to DOM
router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
});
// Create burger
router.post("/burger/create", function(req,res){
    burger.insertOne(req.body.burger_name, function(){
        res.redirect("/index");
    })
});
// Devour burger
router.post("/burger/eat/:id", function(req,res){
    burger.updateOne(req.params.id, function(){
        res.redirect("/index");
    });
});

// Export routes for server.js to use.
module.exports = router;