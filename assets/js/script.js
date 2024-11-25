/*navbar se vea a medida que se baje*/
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 1000) { // Ajusta el valor según cuándo quieras que cambie la opacidad
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-solid');
    } else {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-transparent');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar todos los tooltips
    var tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(function (tooltip) {
        new bootstrap.Tooltip(tooltip);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myform');
    var checkbox = document.getElementById('mycheck');
    var modalWarning = new bootstrap.Modal(document.getElementById('modalWarning'));
    var modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'));
    form.addEventListener('submit', function (event) {
        if (!checkbox.checked) {
            event.preventDefault(); // Evita el envío del formulario
            modalWarning.show(); // Muestra de modal
        }
        else{
            event.preventDefault();// Evita el envío después de mostrar el modal
            modalSuccess.show();
        }
    });
});
