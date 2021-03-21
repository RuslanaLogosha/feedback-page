const Guest = require('../model/guests');

const getAllGuests = async (_req, res, next) => {
  try {
    const feedbacks = await Guest.getAllGuests();
    return res.json(feedbacks);
  } catch (e) {
    next(e);
  }
};

const createGuest = async (req, res, next) => {
  try {
    console.log(req.body);
    const feedbacks = await Guest.createGuest(req.body);
    return res.json(feedbacks);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllGuests,
  createGuest,
};
