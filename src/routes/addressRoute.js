const exprees = require("express");
const addressroute = expression.route();

const validationMiddleware = require("../middlewares/validationMiddleware");  
const user = require("../model/authModel");  

addressroute.post('/createAddress', authMidddleware, async (req, res) => 
    {
        try 
        {
         const {type,city,state,country,pincode} = req.body;

            let addressData = {
                user: req.user._id,
                type,
                city,
                state,
                country
            }

            await AddressModel.create(addressData);

            res.send("address created successfully");
        } 
        catch (err) 
        {
            res.status(400).send({message:err});
        } 
    } 
); 

module.exports = addressroute;