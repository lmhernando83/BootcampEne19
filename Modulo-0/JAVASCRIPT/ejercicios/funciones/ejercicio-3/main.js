const radio = parseFloat(prompt('Introduce el radio:'));

function area(radio){
    return Math.PI * Math.pow(radio,2);
}

function perimetro(radio){
    return 2 * Math.PI * radio;
}

alert('El Area de la Circuferencia es: ' + area(radio).toFixed(2) + '\n' + 'Y el premitro es: ' + perimetro(radio).toFixed(2));
console.log('El Area de la Circuferencia es: ', area(radio).toFixed(2), '\n', 'Y el premitro es: ', perimetro(radio).toFixed(2));