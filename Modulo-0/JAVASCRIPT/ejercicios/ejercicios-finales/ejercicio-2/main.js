const concepts = [];

function getDescripcion(){
    let descripcion = '';
    if(!descripcion){
        descripcion = window.prompt('Introduce descripción:');    
    }
       return descripcion;       
}

function getBase() {
    let base = ''; 
    if(!base) {
        base = Number(window.prompt("Introduce base:"));    
    }
    return base;
}

function addMore() {
    return window.confirm('¿Quieres introducir más conceptos?');
}

function showData() {
    let totalBase = 0;
    for (let i = 0; i < concepts.length; i++) {
        totalBase += concepts[i].base;
        console.log(`Concepto: ${concepts[i].description} \nBase: ${concepts[i].base}
        `);
    }  
    console.log(`Total Base: ${totalBase} \nIVA (21%): ${totalBase * 0.21} \nTotal: ${totalBase * 1.21}`);   
}

let more = true;

while (more) {
    const concept = {};
    concept.description = getDescripcion();
    concept.base = getBase();
    concepts.push(concept);
    more = addMore();
}

showData();

