let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame la hora'));


if(hora >= 0 && hora <= 23 && minuto >= 0 && minuto <= 58) {
    minuto = ++minuto;
    alert(hora + ":" + minuto);
}else if(hora === 23 && minuto === 59){
        hora = 00;
        minuto = 00;
        alert(hora + ":" + minuto);
}else if(hora >= 0 && hora <= 23 && minuto === 59){
    hora = ++hora;
    minuto = 00;
   alert(hora + ":" + minuto);
}else{
    alert('La hora o los minutos no son correctos');
}



