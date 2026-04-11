import Joi from 'joi';

export const bookingSchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  totalprice: Joi.number().required(),
  depositpaid: Joi.boolean().required(),
  bookingdates: Joi.object({
    checkin: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .required(),
    checkout: Joi.string()
      .pattern(/^\d{4}-\d{2}-\d{2}$/)
      .required(),
  }).required(),
  additionalneeds: Joi.string().optional(),
});
