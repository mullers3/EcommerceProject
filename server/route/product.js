const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router

    .post('/addProduct', async (req, res) => {
        try{
            const product = await Product.addProduct(req.body);
            res.send(product);
        } catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async(req, res) => {
        try{
            await Product.deleteProduct(req.body.productName);
            res.send({success: "product deleted"});
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })

    .get('/', async(req, res) => {
        try{
            const products = await Product.getProducts();
            res.send(products);
        }catch(error){
            res.status(401).send({message: error.message})
        }
    })



module.exports = router;