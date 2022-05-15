const express = require('express');
const Customer = require('../models/customer');
const router = express.Router(); 

router

    .get('/', async (req, res) => {
        try{
            const customer = await Customer.getCustomers();
            res.send(customer);
        }catch(err){
            res.status(401).send({message: error.message});
        }
    })

    .post('/login', async (req, res) => {
        try{
            const customer = await Customer.login(req.body.email, req.body.password);
            res.send({...customer, password:undefined});
        } catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .post('/register', async (req, res) => {
        try{
            const customer = await Customer.register(req.body);
            res.send({...customer, password:undefined});
        } catch(error){
            res.status(401).send({message: error.message});
        }
    })

    .delete('/delete', async (req, res) => {
        try{
            await Customer.deleteCustomer(req.body.customerId);
            res.send({success: "BYEEEEEEEEE :("});
        }catch(error){
            res.status(401).send({messgae: error.message});
        }
    })

    .put('/edit', async (req, res) => {
        try{
            const customer = Customer.editEmail(req.body);
            res.send({...email, password: undefined});
        }catch(error){
            res.status(401).send({message: error.message});
        }
    })

module.exports = router;