const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const bcrypt = require('bcrypt');
const express = require('express');
const { User } = require('../models/user');

const router = express.Router();

function validate(req) {
  const schema = {
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(8)
      .max(255)
      .required(),
  };
  return Joi.validate(req, schema);
}

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid email or password.');
  console.log('done');
  const token = user.generateAuthToken();
  res.send({ token });
});

module.exports = router;
