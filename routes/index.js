var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  console.log(req.body)
  
  res.status(200).json({
    code: 200,
    message: "TEST",
    error: ""
  });
});

module.exports = router;
