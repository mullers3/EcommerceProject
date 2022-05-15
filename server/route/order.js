const express = require('express');
const Order = require('../models/order');
const router = express.Router();

router
    
    .post('/checkout', async(req,res) =>{
        try{
            const checkout = await Order.checkout(req.body);
            res.send({...checkout, cnumber:undefined, cvv:undefined});
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })
    .post('/getCustOrders', async(req,res) =>{
        try{
            const orders = await Order.getCustOrders(req.body.email);
            res.send(orders);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })
    .post('/getOrder', async(req,res) =>{
        try{
            const order = await Order.getOrder(req.body.orderId);
            res.send(order);
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

module.exports = router;