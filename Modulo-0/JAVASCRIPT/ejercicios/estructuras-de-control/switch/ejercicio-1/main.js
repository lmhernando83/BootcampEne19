const mes = prompt('Dame el nombre del mes');

switch (mes.toLowerCase()) {
    case 'enero': case 'marzo': case 'mayo': case 'julio': case 'agosto': case 'octubre': case 'diciembre':
        numDias = 31;
        alert('El mes de ' + mes + ' tiene ' + numDias);
        break;
    case 'abril': case 'junio': case 'septiembre': case 'noviembre':
        numDias = 30;
        alert('El mes de ' + mes + ' tiene ' + numDias);
        break;
    case 'febrero':
        numDias = 28;
        alert('El mes de ' + mes + ' tiene ' + numDias);
        break;
    default:
        alert('El mes ' + mes + ' no es existe');
        break;
}