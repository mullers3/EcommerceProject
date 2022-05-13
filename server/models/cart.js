const res = require("express/lib/response");
const con = require ("./db_connect")

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS carts (
      cartId INT NOT NULL AUTO_INCREMENT,
      customerId INT NOT NULL,
      productIds JSON NOT NULL,
      CONSTRAINT cart_pk PRIMARY KEY(cartId)
    )`;
    await con.query(sql);
  }
  createTable();

async function addToCart(){
    console.log("in add to cart");
}

async function addCartToDb(cart){
    let customer = getCurrentCustomer();
    let sql = `INSERT INTO carts (customerId, productIds) VALUES("${customer.customerId}", "${cart}")` 
    console.log(sql);
    return await con.query(sql);
}

module.exports = {addToCart, addCartToDb};

  