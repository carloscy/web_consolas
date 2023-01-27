// Selecciona el botón
const topButton = document.querySelector("#top-button");

// Añade un evento de clic al botón
topButton.addEventListener("click", function () {
    // Utiliza la función scrollTo() para ir al inicio de la página
    window.scrollTo({
        top: 0, // posición superior de la página
        left: 0, // posición izquierda de la página
        behavior: "smooth" // desplazamiento suave
    });
});

// Añade un evento de scroll al documento
document.addEventListener("scroll", function () {
    // Comprueba si el usuario se ha desplazado más allá de una cierta distancia
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Muestra el botón
        topButton.style.display = "block";
    } else {
        // Oculta el botón
        topButton.style.display = "none";
    }
});
