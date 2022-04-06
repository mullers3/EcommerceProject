//I wrote it as Customer instead of User because that felt better for an shopping site
//also my keys and attributes are different, I need to update my ER diagram
class Customer{
    constructor(id, fname, lname, email, password, birthday){
        this.customerId = id;
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.pass = password;
        this.birthday = birthday;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }

    getEmail(){
        return this.email;
    }

    getBirthday(){
        return this.birthday;
    }

    getPassword(){
        return this.pass;
    }

    setFirstName(fname){
        this.firstName = fname;
    }

    setLastName(lname){
        this.lastName = lname;
    }

    setEmail(email){
        this.email = email;
    }

    setPassword(password){
        this.pass = password;
    }

    setBirthday(birthday){
        this.birthday = birthday;
    }

}

const regForm = document.getElementById("regForm");
try{
    regForm.addEventListener('submit', createCustomer);
}catch(error){
    console.log(error);
}

function createCustomer(e){
    console.log("got here")
    e.preventDefault(); 

    let id = 1; //I though that Id came from the database so I just set it as 1 for now
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value; 
    let password = document.getElementById("pass").value;
    let birthday = document.getElementById("bday").value;


    let customer = new Customer(id, fname, lname, email, password, birthday);
    console.log(customer);

}

const logForm = document.getElementById("logForm");
try{
    logForm.addEventListener('submit', getLogInfo);
}catch(error){
    console.log(error);
}

function getLogInfo(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;

    console.log(email +" "+ pass);
}




