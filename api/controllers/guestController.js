const Guest = require('../model/guests');

const getAllGuests = async (_req, res, next) => {
  try {
    const ratings = await Guest.getAllGuests();
    return res.json(ratings);
    //   ({
    //   status: 'success',
    //   code: 200,
    //   data: {
    //     guests,
    //   },
    // });
  } catch (e) {
    next(e);
  }
};

const createGuest = async (req, res, next) => {
  try {
    console.log(req.body);
    const userRating = await Guest.createGuest(req.body);
    return res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        userRating,
      },
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllGuests,
  createGuest,
};
