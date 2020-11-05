var express = require('express');
var router = express.Router();
var books = require('../resources/b/book')
let Books  = require('../Models/books');
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Book DB', bookList: books });
  Books.find({}, function(err, books) {
   if (!err) {
     res.render('index', { title: 'Book App', bookList: books });
   } else {
     console.log('error', err);
   }
 })
 
 });
 module.exports = router;
