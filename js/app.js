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
document.addEventListener("DOMContentLoaded", () => {
    const movieName = document.getElementById("search-bar");
    const searchButton = document.querySelector(".search-button");
    const gridContainer = document.getElementById("results");

    searchButton.addEventListener("click", () => {
        const url = `https://api.tvmaze.com/search/shows?q=${movieName.value}`;

        axios.get(url)
        .then(response => {
            // Aquí definimos correctamente la variable `data`
            const data = response.data; // data es la respuesta de la API

            // Limpiar el grid antes de agregar nuevos resultados
            gridContainer.innerHTML = '';

            // Iterar sobre la respuesta de la API y agregar cada show al grid
            data.forEach(show => {
                const showDiv = document.createElement("div");
                showDiv.classList.add("show-item");
                console.log(data);


                // Obtener la imagen, si existe, sino usa una imagen predeterminada
                const imgSrc = show.show.image ? show.show.image.medium : 'https://via.placeholder.com/200x400?text=No+Image';
                

                // Crear el contenido HTML para cada show
                showDiv.innerHTML = `
                    <img src="${imgSrc}" alt="${show.show.name}">
                    <h3>${show.show.name}</h3>
                    <p>${show.show.summary ? show.show.summary : 'No hay descripción disponible.'}</p>
                `;

                // Añadir el show al grid
                gridContainer.appendChild(showDiv);
            });
        })
        .catch(error => console.error("Error al obtener los datos de Movies:", error));
    });
});