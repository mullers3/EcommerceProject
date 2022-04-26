const products = [
    {
        productId: 1,
        productName: "red",
        productPrice: 16.99

    },
    {
        productId: 2,
        productName: "blue",
        productPrice: 15.99
    }
]

let getAllProducts = () => products; 

function addProduct(product){
    const newProd = {
        productId: products[products.length-1].productId + 1,
        productName: product.productName,
        productPrice: product.productPrice
    }
    products.push(newProd)
    return newProd;
}

module.exports = {getAllProducts, addProduct}