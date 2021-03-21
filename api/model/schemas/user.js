const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Добавьте имя гостя'],
      unique: false,
      minlength: 2,
      maxlength: 25,
    },
    feedback: {
      type: String,
      required: [true, 'Добавьте отзыва гостя'],
      minlength: 1,
    },
    id: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

const User = model('user', userSchema);

module.exports = User;
