const anibal = {
    Nombre: 'Merlin', 
    Clase: 'Mago', 
    Ataque: 5, 
    Sanación: 5, 
    Salud: 20,
    Ataca: function(merlin){
        merlin.Salud = merlin.Salud - this.Ataque;
    },
    Cura: function(){
        this.Salud += this.Sanación;
    },
    Informacion: function(){
        console.log('Nombre: ' + this.Nombre + '\n'
                    + 'Clase: ' + this.Clase + '\n'
                    + 'Ataque: ' + this.Ataque + '\n'
                    + 'Sanación:' + this.Sanación + '\n'
                    + 'Salud: ' + this.Salud);
    }
};


const merlin = {
    Nombre: 'Anibal', 
    Clase: 'Guerrero', 
    Ataque: 9, 
    Sanación: 1, 
    Salud: 22,
    Ataca: function(anibal){
        anibal.Salud = anibal.Salud - this.Ataque;
    },
    Cura: function(){
        this.Salud += this.Sanación;
    },
    Informacion: function(){
        console.log('Nombre: ' + this.Nombre + '\n'
                    + 'Clase: ' + this.Clase + '\n'
                    + 'Ataque: ' + this.Ataque + '\n'
                    + 'Sanación:' + this.Sanación + '\n'
                    + 'Salud: ' + this.Salud);
    }
};


anibal.Informacion();
merlin.Informacion();

console.log('++++++++++++++++++++++++++++');

anibal.Ataca(merlin);
merlin.Ataca(anibal);

anibal.Informacion();
merlin.Informacion();

console.log('++++++++++++++++++++++++++++');

anibal.Ataca(merlin);
merlin.Cura();

anibal.Informacion();
merlin.Informacion();

console.log('++++++++++++++++++++++++++++');

anibal.Ataca(merlin);

anibal.Informacion();
merlin.Informacion();