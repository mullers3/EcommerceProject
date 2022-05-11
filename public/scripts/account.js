import { getCurrentCustomer, setCurrentCustomer, removeCurrentCustomer, logout, fetchData } from "./main";

let customer = getCurrentCustomer();
if(!customer) window.location.href = "login.html"

let account = document.getElementById("account");
account.innerHTML = `
<h2>Welcome back, ${customer.email}!</h2>
<div>
  <p class="error"></p>
  <button class="btn" id="edit">Edit Info</button>
  <button class="btn" id="delete">Delete Account</button>
</div>
`;

document.getElementById("edit").addEventListener('click', editAccount);
document.getElementById("delete").addEventListener('click', deleteAccount);
function deleteAccount() {
   /* if(confirm('Are you sure you want to delete your account???')) {
      fetchData('/customers/delete', {customerId: customerId}, "DELETE")
      .then((data) => {
        if(!data.message) {
          console.log(data.success)
          logout();
          window.location.href = "register.html"
        }
      })
      .catch((error) => {
        const errText = error.message;
        console.log(`Error! ${errText}`)
      })
    }*/
    console.log("jghv,gjcg");
  }

  function editAccount(){
    console.log("bhejdg");
  }