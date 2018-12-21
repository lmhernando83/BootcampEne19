const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

// Condicional if
if (num1 - num2 < 0){
    alert("El resultado de la resta es: Menor a Cero");
}else{
    alert("El resultado de la resta es: " + (num1 - num2));
}

// if ternario
alert('El resultado de la resta es: ' + (num1 - num2 < 0 ? 'Menor a Cero' : num1 - num2));