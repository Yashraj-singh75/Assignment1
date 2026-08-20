const express = require("express");
const addressroute = express.Router();

const validationMiddleware = require("../middlewares/validationMiddleware");  
const checkToken = require("../middlewares/checktoken");
const AddressModel = require("../model/addressModel");  

addressroute.post('/createAddress', checkToken, async (req, res) => 
    {
        try 
        {
            const { type, city, state, country, pincode } = req.body;

            let addressData = {
                user: req.user.id || req.user._id,
                type,
                city,
                state,
                country,
                pincode
            };

            const address = await AddressModel.create(addressData);

            res.status(201).json({ message: "Address created successfully", address });
        } 
        catch (err) 
        {
            res.status(400).json({ message: err.message || err });
        } 
    } 
); 

module.exports = addressroute;