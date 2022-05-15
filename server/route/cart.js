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

    .post('/addCartToDB', async(req, res) => {
        try{
            const cart = await Cart.addCartToDB(req.body);
            res.send(cart);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .post('/getCartFromDB', async(req, res) => {
        try{
            const cart = await Cart.getCartFromDB(req.body.cartId);
            res.send(cart);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })


module.exports = router;