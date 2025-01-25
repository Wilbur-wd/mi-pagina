// Función para alternar la clase "open" en el menú
document.querySelector('.menu-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.icons'); // Seleccionar el menú
    menu.classList.toggle('open'); // Alternar la clase "open"
});
