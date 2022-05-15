import { fetchData } from "./main.js";
const checkoutForm = document.getElementById("checkoutForm");
if(checkoutForm) checkoutForm.addEventListener('submit', checkout);

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
            sessionStorage.setItem("orderId", data.insertId);
            window.location.href = "output.html"
        }
    })
    .catch((error) => {
        //window.location.href = "cart.html"
        console.log(error.message);
    })
}

export function getOrder(){
    let id = sessionStorage.getItem("orderId");
    fetchData('/order/getOrder', {orderId:id}, "POST")
    .then((data) =>{
        if(!data.message){
            document.getElementById("head").innerHTML = `Order Number is ${id}`
            document.getElementById("name").innerHTML = `${data[0].fname} ${data[0].lname}`
            document.getElementById("email").innerHTML = `${data[0].email}`
            document.getElementById("saddress").innerHTML = `${data[0].saddress}`
            let cart = JSON.stringify(data[0].cart)
            document.getElementById("cart").innerHTML = `${cart}`
            document.getElementById("total").innerHTML = `$${data[0].total}`
            
        }
    })

}

