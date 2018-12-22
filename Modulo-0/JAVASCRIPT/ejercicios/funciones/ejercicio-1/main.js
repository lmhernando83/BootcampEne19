function numPar(numero) {

    if (numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}

alert('El numero 4 es: ' + numPar(4));
alert('El numero 11 es: ' + numPar(11));

console.log('El numero 4 es: ', numPar(4));
console.log('El numero 11 es: ', numPar(11));
