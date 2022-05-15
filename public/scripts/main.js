
export async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`${url}`, {
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
    <li class="dropdown"><a href="#products">Products</a> 
        <ul class="products">
            <li><a href="warm.html">Warm Tones</a> </li>   
            <li><a id="coolPage" href="cool.html">Cool Tones</a> </li> 
            <li><a href="gray.html">Gray Tones</a> </li>
        </ul>
    </li>
    <li><a href="cart.html">Cart</a> </li>
    <li><a href="checkout.html">Checkout</a> </li>
</ul>
    `
}else{
    nav.innerHTML = `
    <ul>
    <li><a href="home.html">Home</a> </li>
    <li><a href="login.html">Login</a> </li>
    <li><a href="register.html">Register</a> </li>
    <li class="dropdown"><a href="#products">Products</a> 
        <ul class="products">
            <li><a href="warm.html">Warm Tones</a> </li>   
            <li><a id="coolPage" href="cool.html">Cool Tones</a> </li> 
            <li><a href="gray.html">Gray Tones</a> </li>
        </ul>
    </li>
    <li><a href="cart.html">Cart</a> </li>
    <li><a href="checkout.html">Checkout</a> </li>
</ul>
    `;
}


export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentCustomer();
  window.location.href = "login.html";
}









