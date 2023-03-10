var toggle = document.getElementById('container');

var body = document.querySelector('body');
var header = document.querySelector('header');
var boxes = document.querySelectorAll('.box');
var boxhs = document.querySelectorAll('.box:hover');
var headerh2 = document.querySelector('.header h2');
var menuas = document.querySelectorAll('.menu a');
var menuahs = document.querySelectorAll('.menu a:hover');
var contenido1 = document.querySelector('.contenido1');
var likeprovars = document.querySelectorAll('.btn-like,.btn-probar');
var likeprovarhs = document.querySelectorAll('.btn-like:hover,.btn-probar:hover');


toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}