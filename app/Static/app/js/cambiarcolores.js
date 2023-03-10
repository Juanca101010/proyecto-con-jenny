// seleccionamos el botón y lo almacenamos en una variable
const boton = document.querySelector('#toggleButton');
var boton2 = document.getElementById("toggleButton");
// agregamos un event listener al botón para que cuando se haga clic, se ejecute la función
boton.addEventListener('click', function() {
  // seleccionamos todos los elementos que deseamos cambiar de color y los almacenamos en variables
  const header = document.querySelector('header');
  const boxes = document.querySelectorAll('.box');
  const boxhs = document.querySelectorAll('.box:hover');
  const headerh2 = document.querySelector('.header h2');
  const menuas = document.querySelectorAll('.menu a');
  const menuahs = document.querySelectorAll('.menu a:hover');
  const contenido1 = document.querySelector('.contenido1');
  const likeprovars = document.querySelectorAll('.btn-like,.btn-probar');
  const likeprovarhs = document.querySelectorAll('.btn-like:hover,.btn-probar:hover');

  // cambiamos los colores d    e los elementos seleccionados

  if (this.checked) {
    header.style.backgroundColor = '#fff';
    header.style.color = '#580203';
    headerh2.style.backgroundColor = '#580203';
    headerh2.style.color = '#fff';
    boxes.forEach(box => {
      box.style.backgroundColor = '#580203';
      box.style.color = '#fff';
    });
    boxhs.forEach(boxh => {
      boxh.style.backgroundColor = '#fff';
      boxh.style.color = '#580203';
    });

    menuas.forEach(menua => {
      menua.style.backgroundColor = '#fff';
      menua.style.color = '#580203';
    });
    menuahs.forEach(menuah => {
      menuah.style.backgroundColor = '#580203';
      menuah.style.color = '#fff';
    });

    contenido1.style.backgroundColor = '#580203';

    likeprovars.forEach(likeprovar => {
      likeprovar.style.backgroundColor = '#fff';
      likeprovar.style.color = '#580203';
    });
    likeprovarhs.forEach(likeprovarh => {
      likeprovarh.style.backgroundColor = '#580203';
      likeprovarh.style.color = '#fff';
    });

  } else {
    header.style.backgroundColor = '#580203';
    header.style.color = '#fff';
    headerh2.style.backgroundColor = '#fff';
    headerh2.style.color = '#580203';
    boxes.forEach(box => {
      box.style.backgroundColor = '#fff';
      box.style.color = '#580203';
    });
    boxhs.forEach(boxh => {
      boxh.style.backgroundColor = '#580203';
      boxh.style.color = '#fff';
    });

    menuas.forEach(menua => {
      menua.style.backgroundColor = '#580203';
      menua.style.color = '#fff';
    });
    menuahs.forEach(menuah => {
      menuah.style.backgroundColor = '#fff';
      menuah.style.color = '#580203';
    });

    contenido1.style.backgroundColor = '#fff';

    likeprovars.forEach(likeprovar => {
      likeprovar.style.backgroundColor = '#580203';
      likeprovar.style.color = '#fff';
    });
    likeprovarhs.forEach(likeprovarh => {
      likeprovarh.style.backgroundColor = '#fff';
      likeprovarh.style.color = '#580203';
    });
  }
});
