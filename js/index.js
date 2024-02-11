function toggleCaja(elemento) {
    var caja = elemento.parentElement;
    var contenido = caja.querySelector(".contenido");
    var flecha = elemento.querySelector(".flecha");

    if (contenido.style.maxHeight) {
        contenido.style.maxHeight = null;
        contenido.style.visibility = "hidden";
        flecha.innerHTML = '&#9658;'; // Flecha apuntando a la derecha
    } else {
        contenido.style.maxHeight = contenido.scrollHeight + "px";
        contenido.style.visibility = "visible";
        flecha.innerHTML = '&#9660;'; // Flecha apuntando hacia abajo
    }
}
