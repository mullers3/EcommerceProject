const res = require("express/lib/response");
const con = require ("./db_connect")

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS carts (
      cartId INT NOT NULL AUTO_INCREMENT,
      products JSON NOT NULL,
      CONSTRAINT cart_pk PRIMARY KEY(cartId)
    )`;
    await con.query(sql);
  }
  createTable();

async function getCartProd(productName){
  const sql = `SELECT * FROM products WHERE productName="${productName}"`
  const cartProd = await con.query(sql);
  return cartProd;
}

async function addCartToDB(cart){
  let products = cart["products"];
  console.log(products);
  let sql = `INSERT INTO carts (products) VALUES('${products}')`; 
  console.log(sql);
  return await con.query(sql);
}

async function getCartFromDB(cartId){
  
  let sql = `SELECT * FROM carts WHERE cartId="${cartId}"`;
  console.log(sql);
  return await con.query(sql);
}

module.exports = {getCartProd, addCartToDB, getCartFromDB};

  