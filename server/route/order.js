const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router
    
    .post('/checkout', async(req,res) =>{
        try{
            console.log("gets to order route");
            const checkout = await Order.checkout(req.body);
            res.send({...checkout, cnumber:undefined, cvv:undefined});
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

module.exports = router;