var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//     res.render("index");

// });
router.get("/", function(req, res) {
  burger.selectAll(function(data){
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
    //res.render("index");

});


router.post("/api/burgers", function(req, res) {
  console.log(req.body.burger);
  burger.insertOne(req.body.burger, function(result) {
    console.log(result);
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log(req.body);
  console.log("condition", condition);
  
  burger.updateOne(
    
    req.body,
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
   );
});

// Export routes for server.js to use.
module.exports = router;
