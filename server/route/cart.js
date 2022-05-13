const express = require('express');
const Cart = require('../models/cart');
const router = express.Router();

router 
    .post('/addCartToDb', async(req, res) => {
        try{
            const cart = await Cart.addCartToDb(req.body);
            res.send(cart);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .post('/addToCart', async(req, res) => {
        try{
            console.log("in add to cart route")
            const cart = await Cart.addToCart(req.body);
            res.send(cart);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

module.exports = router;