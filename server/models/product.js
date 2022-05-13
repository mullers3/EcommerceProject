const res = require("express/lib/response");
const con = require ("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS products (
    productId INT NOT NULL AUTO_INCREMENT,
    productName VARCHAR(255) NOT NULL UNIQUE,
    productDesc VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    productPrice FLOAT(10) NOT NULL,
    CONSTRAINT product_pk PRIMARY KEY(productId)
  )`;
  await con.query(sql);
}
createTable();

async function addProduct(product){
    let sql = `INSERT INTO products (productName, productDesc, category, image, productPrice) VALUES
    ("${product.productName}", "${product.productDesc}", "${product.category}", "${product.image}", "${product.productPrice}")`
    
    console.log(sql)
    return await con.query(sql);
    
}

async function deleteProduct(productName){
  const sql = `DELETE FROM products WHERE productName = "${productName}"`;
  await con.query(sql);
}

async function getProducts(category) {
  const sql = `SELECT * FROM products WHERE category=${category}`;
  return await con.query(sql)
};






module.exports = {addProduct, deleteProduct, getProducts};