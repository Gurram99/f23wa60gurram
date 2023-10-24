var express = require('express');
var router = express.Router();

var rand1 = Math.random() * 100;
var rand2 = Math.random() * 200;
var num1 = 0;
var num2 = 0;
var num3 = 0;

router.get('/', function (req, res, next) {
  num1 = Math.round(rand1);
  num2 = Math.round(rand2);
  num3 = Math.round(rand1);

  res.send(`The Random numbers are ${rand1} and ${rand2}
    <br> <br> round applied to ${rand1} is ${num1} 
    <br> <br> round applied to ${rand2} is ${num2}
    <br> <br> round applied to ${rand1} is ${num3}`);
});

module.exports = router;
