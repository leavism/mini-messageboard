const express = require('express');

const router = express.Router();

const messages = [
  {
    text: 'Huy\'s so cool',
    user: 'Stacy',
    added: new Date(),
  },
  {
    text: 'Oh thanks you too',
    user: 'Huy',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
