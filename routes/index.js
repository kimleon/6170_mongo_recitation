var express = require('express');
var router = express.Router();
var Activity = require('../models/activity');

/* GET home page. */
router.get('/', function(req, res, next) {
  /* Exercise 2: Implement GET handler here */
});


router.post('/', function(req, res, next) {
  activity = req.body;
  console.log(activity);
  /* Exercise 3: insert into database */
  res.send({success: true, message: "Success!"});
});

module.exports = router;

