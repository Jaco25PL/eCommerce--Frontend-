// INDEX
setProducts();

const store = getProducts();
const productsCont = document.querySelector("#productsCont");
const categoryBtn = document.querySelectorAll(".category__items");
const catTitle = document.querySelector("#categoryTitle");
const userLogBtn = document.querySelector(".log-btn");

const logOut = document.querySelector(".log-out-cont");
const logOutBtn = document.querySelector(".log-out-btn");
// CARRITO
const getBag = getProductsBag();
let btnRemove = document.querySelectorAll(".btn-remove");
const showBag = document.querySelector("#showBag");
const bagAmount = document.querySelector("#totalAmount");
const bagAmountCont = document.querySelector("#bagAmountCont");
// FORM
const form = document.querySelector("#form");
const sendForm = document.querySelector("#sendForm");
const userName = document.querySelector("#formUserName");
const alertUserName = document.querySelector("#alertUserName");
const userTel = document.querySelector("#formUserTel");
const alertUserTel = document.querySelector("#alertUserTel");



catProduct(getProducts());
selectCategory();

total();
renderBagProducts();

userChange();
scrollBottom()
