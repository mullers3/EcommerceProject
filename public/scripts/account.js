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
  console.log(customer);
  console.log(customer.customerId);
    if(confirm('Are you sure you want to delete your account???')) {
      fetchData('/customer/delete', {customerId: customer.customerId}, "DELETE")
      .then((data) => {
        if(!data.message) {
          console.log(data.success)
          logout();
          window.location.href = "register.html"
        }
      })
      .catch((error) => {
        const errText = error.message;
        document.querySelector("#account div p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
      })
    }
    console.log("jghv,gjcg");
  }
