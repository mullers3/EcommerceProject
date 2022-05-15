import { fetchData } from "./main.js";

export function showCart(myElem){
    var cartValue=sessionStorage.getItem("cart");
    let cartObj = JSON.parse(cartValue);
    let myCart = document.getElementById(myElem);
    let output = `<h3>Cart</h3>`;
    let total = 0.00;
    for(let x in cartObj){
        fetchData('/cart/getCartProd', {productName : x}, "POST")
        .then((data) => {
            if(!data.message){
                total += parseFloat(data[0].productPrice) * parseInt(cartObj[x]);
                    output += `<div class="cart-product">
                    <img src="${data[0].image}" alt="${data[0].productName}">
                    <p>
                    ${data[0].productName}
                        <br>
                        Price: $${data[0].productPrice} 
                        <br>
                        Quantity: <input type="number" id="${data[0].productName}" name="${data[0].productName}" value=${cartObj[x]}>
                    </p>
                </div>`
            }
            sessionStorage.setItem("total", total);
            if(myElem === "cartForm"){
            myCart.innerHTML = output + `<p>Your Total is: ${total.toFixed(2)}</p>
            <button type="button" class="cartBtn" id="Update" onclick='buttonPressed("update")'>Update</button>
        <button type="button" class="cartBtn" id="Empty" onclick='buttonPressed("empty")'>Empty</button>
        <button type="button" class="cartBtn" id="checkout" onclick='buttonPressed("checkout")'>Checkout</button>
            `;}
            else{ myCart.innerHTML = output + `<p>Your Total is: ${total.toFixed(2)}</p>`;
                
            }
        })
    }
}
export function addCartToDB(){
    let cartValue=sessionStorage.getItem("cart");
    fetchData('/cart/addCartToDB', {products : cartValue}, "POST")
    .then((data) =>{
        sessionStorage.setItem("cartId", data.insertId);
        if(!data.message){
            console.log("added to DB");
        }
    })
    .catch((error) => {
        console.log(error.message);
    })

}

export function getCartFromDB(){
    let cartId = sessionStorage.getItem("cartId");
    console.log(cartId);
    fetchData('/cart/getCartFromDB', {cartId : cartId}, "POST")
    .then((data) =>{
        if(!data.message){
            console.log("retreived from DB");
            console.log(data);
        }
    })
    .catch((error) => {
        console.log(error.message);
    })
}











