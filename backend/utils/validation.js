const joi = require('joi');

const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().required(),
    phoneNumber: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    dob: joi.date().required(),
    gender: joi.string().valid('male', 'female'),
    referralCode: joi.string().allow(''),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  });
  return schema.validate(data);
};

const obtainClassValidation = (data) => {
  const schema = joi.object({
    totalClass: joi.number().required(),
  });
  return schema.validate(data);
};

// Admin validation
const createClassValidation = (data) => {
  const schema = joi.object({
    date: joi.string().required(),
    hourStart: joi.string().required(),
    hourEnd: joi.string().required(),
    room: joi.number().required(),
    course: joi.string().required(),
    mentor: joi.string().required(),
  });
  return schema.validate(data);
};

const removeStudentValidation = (data) => {
  const schema = joi.object({
    studentID: joi.required(),
  });
  return schema.validate(data);
};

module.exports = {
  registerValidation,
  loginValidation,
  obtainClassValidation,
  createClassValidation,
  removeStudentValidation,
};
