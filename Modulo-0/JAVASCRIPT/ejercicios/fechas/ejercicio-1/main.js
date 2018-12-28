function fecha(dia, mes, ano) {
    
    if (ano <= 0) {
        return false;
    }
    if (mes < 0 || mes > 11) {
        return false;
    }
    if (dia < 1 || dia > 31) {
        return false;
    }
    
    if (!(ano % 4 === 0 && ano % 100 !== 0) && mes === 1 && dia >= 29) {
        return false;
    }
  
    if ((mes === 1 || mes === 3 || mes === 5 || mes === 8 || mes === 10 ) && dia >= 30) {
        return false;
    }

    return new Date(ano, mes, dia);
  
}

console.log(fecha(28,1,2019));