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

class Product{// does it need a pic variable
    constructor(id, pName, pPrice){
        this.productId = id;
        this.productName = pName;
        this.productPrice = pPrice;
    }

    getProductName(){
    return this.productName;    
    }

    getProductPrice(){
        return this.productPrice;
    }

    setProductName(pName){
        this.productName = pName;
    }

    setProductPrice(pPrice){
        this.productPrice = pPrice;
    }
}

class Cart{
    constructor(id){
        this.cartId = id;
    }
}

export async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }

export function setCurrentCustomer(customer){
    localStorage.setItem('customer', JSON.stringify(customer));
}

export function getCurrentCustomer(){
    return JSON.parse(localStorage.getItem('customer'));
}

export function removeCurrentCustomer(){
    localStorage.removeItem('customer');
}

const nav = document.querySelector('nav');
if(getCurrentCustomer()){
    nav.innerHTML =`
    <ul>
    <li><a href="home.html">Home</a> </li>
    <li><a id="logout">Logout</a> </li>
    <li><a href="register.html">Register</a> </li>
    <li><a href="checkout.html">Checkout</a> </li>
    <li class="dropdown"><a href="#products">Products</a> 
        <ul class="products">
            <li><a href="warm.html">Warm Tones</a> </li>   
            <li><a href="cool.html">Cool Tones</a> </li> 
            <li><a href="gray.html">Gray Tones</a> </li>
        </ul>
    </li>
</ul>
    `
}else{
    nav.innerHTML = `
    <ul>
    <li><a href="home.html">Home</a> </li>
    <li><a href="login.html">Login</a> </li>
    <li><a href="register.html">Register</a> </li>
    <li><a href="checkout.html">Checkout</a> </li>
    <li class="dropdown"><a href="#products">Products</a> 
        <ul class="products">
            <li><a href="warm.html">Warm Tones</a> </li>   
            <li><a href="cool.html">Cool Tones</a> </li> 
            <li><a href="gray.html">Gray Tones</a> </li>
        </ul>
    </li>
</ul>
    `;
}


export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentCustomer();
  window.location.href = "login.html";
}


/*//fix using if statement when have time

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
*/




