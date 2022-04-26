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
let getCustomers = () => customers;

function login(email, password){
    const customer = customers.filter((u) => u.email === email);
    if(!customer[0]) throw Error('User not found');
    if(customer[0].password != password) throw Error("Wrong Password");
    return customer[0];
}

function register(customer){
    const c = customerExists(customer.email);
    if(c.length>0) throw Error('Username taken');
    const newCust = {
        customerId: customers[customers.length-1].customerId + 1,
        firstName: customer.firstName,
        lastName: customer.lastName,
        email: customer.email,
        password: customer.pass,
        birthday: customer.birthday
    }

    customers.push(newCust);

    return newCust;
}

function customerExists(email){
    return customers.filter((c) => c.email === email);
}

function deleteCustomer(customerId){
    let i = customers.map((customer) => customer.customerId).indexOf(customerId);
    customers.splice(i,1);
    console.log(customers);
}

function editEmail(){}//finish 

module.exports = {getCustomers, login, register, deleteCustomer};