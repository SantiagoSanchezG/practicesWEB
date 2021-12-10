//Objetos Literales

const PERSONA = {/*Atributos*/ nombre: "Santiago", edad: 18, apellidos: "Sánchez Grisales",
    /*Métodos*/ presentarse(){console.log(`Hola mi nombre es ${this.nombre}`);}}
//PERSONA.presentarse()
console.log(typeof(PERSONA)); //Muestra de que tipo es la variable
//Crear objetos con variables
const NOMBRE = "Santiago";
const EDAD = 17
const Objeto ={NOMBRE, EDAD};

//Función constructura

// function Usuario(nombre, apellido, correo){
//     this.nombre = nombre
//     this.apellido = apellido
//     this.correo = correo
// }


class Usuario{
    constructor(nombre, apellido, correo){
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
    }
    presentar(){
        return `Hola, soy ${this.nombre}`
    }
}

//Herencia

class Profesor extends Usuario{
    constructor(nombre, apellido, correo, cursosDictados){
        super(nombre,apellido,correo)
        this.cursos = cursosDictados
    }
}

const b = new Profesor("f","f","f","f")
console.log(b.presentar())