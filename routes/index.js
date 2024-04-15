var express = require('express');
const reminder = require('../models/reminder');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {

  res.render('calendar', { title: 'Calendar'});
});
router.get('/reminder', function(req, res, next) {
  res.render('reminder', { title: 'Create a Reminder' });
});
router.post('/reminder', async (req, res, next) => {
  let newReminder = new reminder({
    name: req.body.name,
    month: req.body.month,
    day: req.body.day,
    year: req.body.year
  });
  await newReminder.save();
  res.redirect('/');
});

module.exports = router;
