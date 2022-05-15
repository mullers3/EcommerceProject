import { getCurrentCustomer, setCurrentCustomer, removeCurrentCustomer, logout, fetchData } from "./main.js";

let customer = getCurrentCustomer();
if(!customer) window.location.href = "login.html"

let account = document.getElementById("account");
account.innerHTML = `
<h2>Welcome back, ${customer.email}!</h2>
<div>
  <p class="error"></p>
  <button class="btn" id="delete">Delete Account</button>
</div>
`;

document.getElementById("delete").addEventListener('click', deleteAccount);
function deleteAccount() {
    if(confirm('Are you sure you want to delete your account???')) {
      fetchData('/customer/delete', {customerId: customer.customerId}, "DELETE")
      .then((data) => {
        if(!data.message) {
          console.log(data.success)
          logout();
          window.location.href = "account.html"
        }
      })
      .catch((error) => {
        const errText = error.message;
        document.querySelector("#account div p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
      })
    }
  }

document.getElementById("orders").addEventListener('click', getCustOrders);
function getCustOrders(){
  fetchData('/order/getCustOrders', {email: customer.email}, "POST")
  .then((data) =>{
    console.log(data);
    let output = `<h2>Orders</h2>`;
    for(let i=0; i<data.length; i++){
      let title =data[i].orderId;
      output += `<a href="output.html" onclick="setId('${title}')">"Order Number: ${title}"</a> <br> <br>`;
    }
    document.getElementById("orderRefs").innerHTML = output;
  })
  .catch((error)=>{
    console.log(error.message);
  })
}
