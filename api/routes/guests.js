const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');

router
  .get('/', guestController.getAllGuests)
  .post('/', guestController.createGuest);

module.exports = router;
