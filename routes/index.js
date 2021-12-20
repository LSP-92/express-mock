var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/add', function (req, res, next) {
  console.log(req.body)
  console.log(req.headers)
  
  
  res.status(200).json({
    code: 401,
    message: "TEST",
    error: ""
  });
});

router.post('/auth', function (req, res, next) {
  console.log(req.body)
  console.log(req.headers)
  res.setHeader("Authorization", "Bearer 123456789")
  
  
  res.status(200).json({
    code: 200,
    message: "TEST",
    error: ""
  });
});

module.exports = router;
