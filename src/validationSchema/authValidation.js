const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),

    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(8)
        .max(200)
        .required(),

    role: Joi.string()
        .valid("user", "admin", "seller")
        .default("user")
});


const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required(),

    password: Joi.string()
        .min(8)
        .max(200)
        .required()
});


module.exports = {
    registerSchema,
    loginSchema
};