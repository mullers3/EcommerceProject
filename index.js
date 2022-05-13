const express = require('express');
const app = express();
const path = require('path');

const customerRoutes = require("./server/route/customer");
const cartRoutes = require ("./server/route/cart");
const orderRoutes = require ("./server/route/order");
const productRoutes = require("./server/route/product");

app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'home.html')))

//app.get('/', (req, res) => res.sendFile('home.html'))

app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '/public', 'home.html'));
  })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
});

app.use("/customer", customerRoutes); 
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/product", productRoutes);

const PORT = process.env.PORT || 3000; 
//app.use(express.static(__dirname + "/public"))
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));