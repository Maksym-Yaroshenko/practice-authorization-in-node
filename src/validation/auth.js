import Joi from 'joi';

export const registerUserSchema = Joi.object({
  email: Joi.string().email().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
  isActiveted: Joi.boolean(),
  activationLink: Joi.string(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email().min(3).max(30).required(),
  password: Joi.string().min(3).max(30).required(),
});
