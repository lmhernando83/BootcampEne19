let dia1 = new Date(2019, 1, 1, 12, 2);
let dia2 = new Date(2018, 1, 1, 10, 2);

function diferencia2(dia1, dia2){

    direfencia2 = dia1 - dia2;

    return direfencia2 / (60 * 1000);

}

console.log('La diferencia son', diferencia2(dia1, dia2), 'minutos');

