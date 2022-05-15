const con = require ("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS customers (
    customerId INT NOT NULL AUTO_INCREMENT,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255),
    bday DATE,
    CONSTRAINT customer_pk PRIMARY KEY(customerId)
  )`;
  await con.query(sql);
}
createTable();

//get all customers 
let getCustomers = async () => {
    const sql = `SELECT * FROM customers`;
    return await con.query(sql);
  };
  
  async function getCustomer(customer) {
    let sql;
    if(customer.customerId) {
      sql = `SELECT * FROM customers
        WHERE customerId = ${customer.customerId}
      `;
    } else {
      sql = `SELECT * FROM customers
        WHERE email = "${customer.email}"
      `;
    }
    return await con.query(sql);
  }
  
  

  async function login(email, password) {
    const customer = await customerExists(email);
    if(!customer[0]) throw Error('Customer not found')
    if(customer[0].pass !== password) throw Error("Password is incorrect");
  
    return customer[0];
  }

async function register(customer) {
    const u = await customerExists(customer.email);
    if(u.length>0) throw Error("Email already exists");
    const sql = `INSERT INTO customers(fname, lname, email, pass, bday)
      VALUES ("${customer.fname}", "${customer.lname}", "${customer.email}", "${customer.pass}", "${customer.bday}")
    `;
  
    const insert = await con.query(sql);
    const newCustomer = await getCustomer(customer);
    return newCustomer[0];
  }

  async function customerExists(email) {
    const sql = `SELECT * FROM customers
      WHERE email = "${email}"
    `;
    return await con.query(sql);
  }

async function deleteCustomer(customerId){
  const sql = `DELETE FROM customers 
  WHERE customerId = ${customerId}
`;
await con.query(sql);
}


module.exports = {getCustomers, getCustomer, login, register, deleteCustomer};