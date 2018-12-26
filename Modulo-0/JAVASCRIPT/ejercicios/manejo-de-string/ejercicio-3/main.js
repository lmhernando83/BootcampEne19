let cadena = 'JavaScript es un lenguaje de programación que nacio en 1995. JavaScript no tiene que ver en nada con Java';

let buscar = 'JavaScript';

let pos = cadena.indexOf(buscar);

while (pos !== -1) {
    cadena = cadena.replace(buscar, 'JAVASCRIPT');
    pos = cadena.indexOf(buscar, pos + 1);
}

console.log('Resultado: ', cadena);




