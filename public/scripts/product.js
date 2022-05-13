import { fetchData } from "./main.js";


const addPForm = document.getElementById("addPForm");
if(addPForm) addPForm.addEventListener('submit', addProduct)

function addProduct(e){
    e.preventDefault();
    console.log("heeelllllllloooooo")

    const productName = document.getElementById("productName").value;
    const productDesc = document.getElementById("productDesc").value;
    const category = document.getElementById("category").value;
    const image = document.getElementById("image").value;
    const productPrice = document.getElementById("productPrice").value;

    fetchData('/product/addProduct', {productName: productName, productDesc: productDesc, category: category, image: image, productPrice: productPrice}, "POST")
    .then((data) => {
        if(!data.message){
            document.querySelector("#addPForm p.works").innerHTML = `<p>Product Added</p>`
        }
    })
    .catch((error) => {
        const errText = error.message;
        document.querySelector("#addPForm p.error").innerHTML = errText;
        console.log(`Error! ${errText}`)
    });
}

const deletePForm = document.getElementById("deletePForm");
if(deletePForm) deletePForm.addEventListener('submit', deleteProduct)

function deleteProduct(e){
    e.preventDefault();
    let productName = document.getElementById("badProd").value;
    if(confirm('Do you want to delete ' + productName + ' ?')){
        fetchData('/product/delete', {productName : productName}, "DELETE")
        .then((data) => {
            if(!data.message){
                document.querySelector("#deletePForm p.works").innerHTML = data.success;
            }
        })
        .catch((error) => {
            const errText = error.message;
            document.querySelector("#deletePForm p.error").innerHTML = errText;
        })
    }
}

export function getProducts(category){
     fetchData('/product/getProducts', {category: category}, "POST")
    .then((data) => {
        if(!data.message){
            let myCont = document.getElementById("container");
            let output = "";
            for(let i=0; i < data.length; i++){
                output += ` <div class="${category}-product">
                <img src="${data[i].image}" alt="${data[i].productName}">
                <p>
                    ${data[i].productName}
                    <br>
                    Price: $${data[i].productPrice} 
                    <br>
                    Description: ${data[i].productDesc}
                    <button class="addToCart" onclick="addToCart(this)">Add to Cart</button>
                </p>
            </div>`
            }
            myCont.innerHTML = output
        }
    })
    .catch((error) => {
        const errText = error.message;
        console.log(`Error! ${errText}`)
    });
}



