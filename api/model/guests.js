const Guest = require('./schemas/user');

const getAllGuests = async () => {
  const results = await Guest.find({});
  return results;
};

const createGuest = async body => {
  const result = await Guest.create(body);
  return result;
};

module.exports = {
  getAllGuests,
  createGuest,
};
