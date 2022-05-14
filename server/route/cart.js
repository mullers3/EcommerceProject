const express = require('express');
const Cart = require('../models/cart');
const router = express.Router();

router 
    .post('/getCartProd', async(req, res) => {
        try{
            const cartProd = await Cart.getCartProd(req.body.productName);
            res.send(cartProd);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })


module.exports = router;