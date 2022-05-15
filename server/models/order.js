//import { getCurrentCustomer } from "../../public/scripts/main.js";
const con = require ("./db_connect")

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS orders (
        orderId INT NOT NULL AUTO_INCREMENT,
        fname VARCHAR(255) NOT NULL,
        lname VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        cnumber VARCHAR(255) NOT NULL,
        cvv VARCHAR(255) NOT NULL,
        baddress VARCHAR(255) NOT NULL,
        saddress VARCHAR(255) NOT NULL,
        zip VARCHAR(255) NOT NULL,
        cart JSON NOT NULL,
        total FLOAT(16,2) NOT NULL,
        CONSTRAINT order_pk PRIMARY KEY(orderId)
      )`;
      await con.query(sql);
    }
createTable();

async function checkout(order){
    console.log("gets to order model");
    console.log(order);
    let orderCart = order["cart"]
    console.log(orderCart);
    console.log("in model/ordeer.js");
    const sql = `INSERT INTO orders(fname, lname, email, cnumber, cvv, baddress, saddress,zip, cart, total)
    VALUES("${order.fname}","${order.lname}", "${order.email}","${order.cnumber}","${order.cvv}",
    "${order.baddress}", "${order.saddress}", "${order.zip}",'${orderCart}',"${order.total}")`;
    console.log(sql);
    return await con.query(sql);
}

async function getCustOrders(email){
    const sql = `SELECT orderId FROM orders WHERE email = "${email}"`;
    let orders = await con.query(sql);
    return orders;
}
//maybe in admin have this to see how many orders on each day????
async function getOrderByDate(date){
    const sql = `SELECT * FROM orders WHERE orderDate = "${date}"`;
    let orders = await con.query(sql);
    return orders;
    //again how to I display thiiiiiiiiiiiis
}

async function getOrder(orderId){
    const sql = `SELECT * FROM orders WHERE orderId = "${orderId}"`;
    let order = await con.query(sql);
    return order;
}

module.exports = {checkout, getCustOrders, getOrder};