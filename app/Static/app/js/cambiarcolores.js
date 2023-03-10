// Obtenemos el botón toggle
var toggleButton = document.getElementById('toggleButton');

// Agregamos un event listener al botón
toggleButton.addEventListener('click', function() {

    // Obtenemos el cuerpo del documento
    var body = document.getElementsByTagName('body')[0];

    // Comprobamos si la clase dark está presente
    var isDark = body.classList.contains('dark');

    // Si la clase dark está presente, la removemos y agregamos la clase light
    if (isDark) {
        body.classList.remove('dark');
        body.classList.add('light');
    } else { // Si la clase dark no está presente, la agregamos y removemos la clase light
        body.classList.remove('light');
        body.classList.add('dark');
    }
});
