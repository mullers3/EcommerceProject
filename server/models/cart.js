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

async function getCartProd(productName){
  console.log(productName);
  const sql = `SELECT * FROM products WHERE productName="${productName}"`
  console.log(sql);
  const cartProd = await con.query(sql);
  return cartProd;
}

module.exports = {getCartProd};

  