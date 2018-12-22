function menor(num1, num2, num3){

    if (num1 < num2 && num2 < num3){
        return num1;
    }else if (num1 > num2 && num3 > num2){
        return num2;
    }else{
        return num3;
    }
}

alert('El menor numero de (-5, 50, 500) es: ' + menor(-5, 50, 100));
alert('El menor numero de (30, 3, 5000) es: ' + menor(30, 3, 5000));

console.log('El menor numero de (-5, 50, 500) es: ', menor(-5, 50, 100));
console.log('El menor numero de (30, 300, 5000) es: ', menor(30, 300, 5000));