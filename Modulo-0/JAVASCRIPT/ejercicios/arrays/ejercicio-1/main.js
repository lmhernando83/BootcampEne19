
const palabra = prompt('Palabra a buscar:');

const array = ['Todos','los','hombres','deben','morir','Jon','Snow','Pero','primero,','viviremos'];

let pos = -1;

for (let i = 0; i < array.length; i++) {
    if (array[i] === palabra) {
        pos = i;
        break;
    }
};

if (pos !== -1) {
    console.log(`La palabra ${palabra} esta en la posicion ${pos}`);
} else {
    console.log('La palabra no existe');
};