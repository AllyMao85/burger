var express = require("express");
var bodyParser = require("body-parser");
var path=require("path");
var PORT = process.env.PORT;

var app = express();
const favicon = require('express-favicon');
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//app.use(favicon(__dirname + '/public/favicon.png'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.set('views', path.join(__dirname, '/../views'));    
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
