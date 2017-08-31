var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
})

router.get("/", function(req, res) {
  burger.all(function(burgerdata) {
    // var burgerObject = {
    //   burgers: data
    // };
    // console.log(burgerObject);
    res.render("index", { burger_data: burgerData });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.name, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
