const express = require('express');
const productRouter = express.Router();
const validationMiddleware = require("../middlewares/validationMiddleware");
const checkToken = require('../middlewares/checktoken');
const { productSchema, updateProductSchema } = require('../middlewares/middleware');

const {
    createproduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,

} = require('../controller/productController');


productRouter.post('/createproduct', 
    validationMiddleware(productSchema),
    checkToken,
    createproduct
);

productRouter.get('/getallproduct', getAllProduct);
productRouter.get('/getproductbyid/:id', getProductById);
productRouter.patch('/updateproduct/:id', checkToken, validationMiddleware(updateProductSchema), updateProduct);
productRouter.delete('/deleteproduct/:id', checkToken, deleteProduct);

module.exports = productRouter;