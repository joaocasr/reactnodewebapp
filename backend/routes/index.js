var express = require('express');
var router = express.Router();
var alunos = require('../consts')

router.get('/api/students/:studentID', function(req, res, next) {
  let i = parseInt(req.params.studentID) - 1
  res.jsonp({ student: alunos.students[i]});
});

router.get('/api/students', function(req, res, next) {
  res.jsonp({ students: alunos.students});
});

module.exports = router;
