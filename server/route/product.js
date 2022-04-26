const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/', (req, res) => {
    try{
        const products = Product.getAllProducts();
        res.send(products);
    }catch(err){
        res.status(401).send({message: error.message});
    }
});

router.post('/addProduct', async (req, res) => {
    try{
        const product = await Product.addProduct(req.body);
        res.send(product);
    } catch(error){
        res.status(401).send({message: error.message});
    }
})



module.exports = router;