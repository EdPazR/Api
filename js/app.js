

const mainMenu = document.getElementById("menuIcon");
console.log(mainMenu);
const navMenu = document.querySelector(".nav-menu");
console.log(navMenu);

mainMenu.addEventListener("click", () => {
    navMenu.classList.toggle("showMenu");
})


const closeMenu = document.getElementById("closeNav-icon");
console.log(closeMenu);

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("showMenu");
})

/////

const showUser = document.getElementById("userIcon");
console.log(showUser);

showUser.addEventListener("click", () => {
    userBox.classList.toggle("showUser-Box");
    
})

/////
const cartIcon = document.getElementById("header-cart");
console.log(cartIcon);
const cartBox = document.querySelector(".cart");
console.log(cartBox);

cartIcon.addEventListener("click", () => {
    cartBox.classList.toggle("showCart");
})

//////

