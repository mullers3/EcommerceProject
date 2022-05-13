import { getCurrentCustomer, fetchData } from "./main.js";

let cartContents = {};
function updateCart(){
    sessionStorage.setItem("cart", cartContents);
}

/*const addButton = document.getElementById("addToCart");
if(addButton) addButton.addEventListener('onclick', addToCart)
export function addToCart(){
    console.log("add to cart");
    let productId = document.getElementById("productId").value;
    fetchData('/cart/addToCart', {productId: productId})
    updateCart();
}*/

export function addToCart(){
    console.log("hello world");
}




