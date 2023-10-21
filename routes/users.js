var express = require('express');
var router = express.Router();

var sum = 0;  // Initialize sum to 0
var more = 0; // Initialize more to 0

/* GET users listing. */
router.get('/', function(req, res, next) {
  more += 1;  // Add 1 to more
  sum += more; // Add the updated value of more to sum

  res.send(`Sum is: ${sum}`); // Send the response with the updated sum
});

module.exports = router;