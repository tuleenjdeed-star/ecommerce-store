let buttons = document.querySelectorAll(".product-card button");

let cart = [];

buttons.forEach(function(button){

button.addEventListener("click", function(){

let product = button.parentElement;

let name = product.querySelector("h3").innerText;
let price = product.querySelector("p").innerText;

let item = {
name: name,
price: price
};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

alert(name + " added to cart");

});

});