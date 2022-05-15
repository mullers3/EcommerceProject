import { fetchData } from "./main.js";
const checkoutForm = document.getElementById("checkoutForm");
checkoutForm.addEventListener('submit', checkout);

function checkout(e){
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const cnumber = document.getElementById("cnumber").value;
    const cvv = document.getElementById("cvv").value;
    const baddress = document.getElementById("baddress").value;
    const saddress = document.getElementById("saddress").value;
    const zip = document.getElementById("zip").value;
    const cartValue = sessionStorage.getItem("cart");
    const total = sessionStorage.getItem("total");

    fetchData('/order/checkout', {fname:fname, lname:lname, email:email, cnumber:cnumber, cvv:cvv, baddress:baddress, saddress:saddress, zip:zip, cart:cartValue, total:total}, "POST")
    .then((data) => {
        if(!data.message){
            sessionStorage.removeItem("cart");
            sessionStorage.setItem("cartId", data.insertId);
            window.location.href = "home.html"
        }
    })
    .catch((error) => {
        //window.location.href = "cart.html"
        console.log(error.message);
    })
}

