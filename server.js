var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

const port = process.env.PORT || 3000;

var app = express();


//use handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up body parser
app.use(bodyParser.json({extended: false}));

//require the controller
var routes = require("./controllers/burgers_controller.js");

//use the controller
app.use("/", routes);

//start the app
app.listen(port);
