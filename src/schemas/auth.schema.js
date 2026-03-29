import Joi from "joi";

export const AuthSchema = Joi.object({
    token: Joi.string().required(),
});