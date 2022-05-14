import { fetchData } from "./main.js";

export function showCart(){
    var cartValue=sessionStorage.getItem("cart");
    console.log(cartValue);
    let cartObj = JSON.parse(cartValue);
    console.log(cartObj);
    let myCart = document.getElementById("cartForm");
    let output = `<h3>Cart</h3>`;
    let total = 0.00;
    for(let x in cartObj){
        fetchData('/cart/getCartProd', {productName : x}, "POST")
        .then((data) => {
            if(!data.message){
                console.log(data);
                console.log(cartObj[x]);
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
            myCart.innerHTML = output + `<p>Your Total is: ${total.toFixed(2)}</p>
            <button type="button" class="cartBtn" id="Update" onclick='buttonPressed("update")'>Update</button>
        <button type="button" class="cartBtn" id="Empty" onclick='buttonPressed("empty")'>Empty</button>
        <button type="button" class="cartBtn" id="checkout" onclick='buttonPressed("checkout")'>Checkout</button>
            `;
        })
    }
}











