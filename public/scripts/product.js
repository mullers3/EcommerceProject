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

function deleteProduct(){
    productName = document.getElementById("badProd");
    if(confirm('Do you want to delete ' + productName + ' ?')){
        fetchData('/product/delete', {productName : productName}, "DELETE")
        .then((data) => {
            if(!data.message){
                document.querySelector("deletePForm p.works").innerHTML = data.success;
            }
        })
        .catch((error) => {
            const errText = error.message;
            document.querySelector("#deletePForm p.error").innerHTML = errText;
        })
    }
}