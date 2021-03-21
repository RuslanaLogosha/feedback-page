const Guest = require('./schemas/user');

const getAllGuests = async () => {
  const results = await Guest.find({});
  return results;
};

const createGuest = async body => {
  await Guest.create(body);
  const results = await Guest.find({});
  return results;
};

module.exports = {
  getAllGuests,
  createGuest,
};
