var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeyasuriyaa Jeyakumar' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'About Me'
  })
})

router.get('/projects', (req, res, next) => {
  res.render('projects', { 
    title: 'My Projects',
    pageText: 'This is the projects page'
  })
})

router.get('/references', (req, res, next) => {
  res.render('references', { 
    title: 'References',
    pageText: 'This is the reference page'
  })
})

router.get('/contact', (req, res, next) => {
  res.render('contact', { 
    title: 'Contact Me',
    pageText: 'This is the contact page'
  })
})


module.exports = router;
