//import { getCurrentCustomer } from "../../public/scripts/main.js";
const con = require ("./db_connect")

async function createTable() {
    //do the thing
}
createTable();

async function getCustOrders(){
    let customer = getCurrentCustomer();
    const sql = `SELECT * FROM orders WHERE customerID = "${customer.customerId}"`;
    //now I need to get and display the orders
    let orders = await con.query(sql);
    return orders;
    //how TF do i display these, should I send it to a <p> tag???
}
//maybe in admin have this to see how many orders on each day????
async function getOrderByDate(date){
    const sql = `SELECT * FROM orders WHERE orderDate = "${date}"`;
    let orders = await con.query(sql);
    return orders;
    //again how to I display thiiiiiiiiiiiis
}