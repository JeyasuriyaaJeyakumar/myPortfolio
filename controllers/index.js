var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'About',
    pageText: 'This page is about me'
  })
})

/* GET contact me page */
router.get('/contact', (req, res, next) => {
  res.render('contact',{ title: 'Contact Me'})
})

module.exports = router;
