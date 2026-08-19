const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .max(30)
        .required(),

    SKU: Joi.string()
        .required(),

    description: Joi.string()
        .required(),

    price: Joi.number()
        .min(10)
        .required(),

    category: Joi.string()
        .max(200)
        .required()
});


const updateProductSchema = productSchema.fork(
    [
        "name",
        "SKU",
        "description",
        "price",
        "category"
    ],
    (field) => field.optional()
);


module.exports = {
    productSchema,
    updateProductSchema
};