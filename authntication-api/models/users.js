const mongoose = require("mongoose");
const Joi = require("@hapi/joi");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 50
  },

  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1020
  }
});

const User = mongoose.model("User", schema);
const validate = user => {
  const schema = Joi.object({
    username: Joi.string()
      .required()
      .min(5)
      .max(30),
    email: Joi.string()
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(30)
      .required()
  });

  return schema.validate(user);
};

module.exports.User = User;
module.exports.validate = validate;
