const express = require('express');
const Customer = require('../models/customer');
const router = express.Router(); 

router.get('/', (req, res) => {
    try{
        const customers = Customer.getCustomers();
        res.send(customers);
    }catch(err){
        res.status(401).send({message: error.message});
    }
})

router.post('/login', async (req, res) => {
    try{
        const customer = await Customer.login(req.body.email, req.body.password);
        console.log(customer);
        res.send({...customer, password:undefined});
    } catch(error){
        res.status(401).send({message: error.message});
    }
})

router.post('/register', async (req, res) => {
    try{
        const customer = await Customer.register(req.body);
        res.send({...customer, password:undefined});
    } catch(error){
        res.status(401).send({message: error.message});
    }
})

.delete('/delete', (req, res) => {
    try{
        Customer.deleteCustomer(req.body.customerId);
        res.send({success: "BYEEEEEEEEE :("});
    }catch(error){
        res.status(401).send({messgae: error.message});
    }
})

.put('/edit', (req, res) => {
    try{
        const customer = Customer.editProfile(req.body);
        res.send({...email, password: undefined});
    }catch(error){
        res.status(401).send({message: error.message});
    }
})

module.exports = router;