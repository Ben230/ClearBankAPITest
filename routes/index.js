var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Cat Caller' });
});

router.post('/', function(req, res, next) {
  var request = require('request');
  request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
  });
  res.redirect('/');
});

module.exports = router;
