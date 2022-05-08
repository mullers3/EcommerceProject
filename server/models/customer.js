const con = require ("./db_connect")
const customers = [{
    customerId: 1,
    email: "cathy123@gmail.com", 
    password: "passOne"
},
{
    customerId: 2,
    email: "notcathy@gmail.com",
    password: "passTwo"
}
];

//get all customers 
let getCustomers = async () => {
    const sql = `SELECT * FROM users`;
    return await con.query(sql);
  };
  
  async function getCustomer(customer) {
    let sql;
    if(customer.customerId) {
      sql = `SELECT * FROM customers
        WHERE customer_id = ${customer.customerId}
      `;
    } else {
      sql = `SELECT * FROM customers
        WHERE email = "${customer.email}"
      `;
    }
    return await con.query(sql);
  }
  
  

function login(email, password){
    const customer = customers.filter((u) => u.email === email);
    if(!customer[0]) throw Error('User not found');
    if(customer[0].password != password) throw Error("Wrong Password");
    return customer[0];
}

async function register(customer) {
    const u = customerExists(customer.email);
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
  WHERE customer_id = ${customerId}
`;
await con.query(sql);
}

//function editEmail(){}//finish 

module.exports = {getCustomers, getCustomer, login, register, deleteCustomer};