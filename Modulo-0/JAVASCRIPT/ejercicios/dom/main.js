//Número de divs en la página
let divs = document.querySelectorAll('div');
console.log('Número de divs en la página: ' + divs.length);

//Numero de elementos con la clase 'animated'
let classAnimated = document.getElementsByClassName('animated');
console.log('Numero de elementos con la clase \"animated"\: ' + classAnimated.length);

//Dirección web donde enlaza el enlace con id 'home'
let enlace = document.getElementById('home').href;
console.log('Dirección web donde enlaza el enlace con id \"home"\: ' + enlace);

//Número de párrafos (p) en la segunda seccion (section)
let numPa = document.getElementsByTagName("section")[1].querySelectorAll('p');
console.log('Número de párrafos (p) en la segunda seccion (section): ' + numPa.length);