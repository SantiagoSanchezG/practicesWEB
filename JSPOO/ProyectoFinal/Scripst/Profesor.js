import Usuario from "./Usuario.js"

export default class Profesor extends Usuario{
    constructor(n, a, c, ac, cd, calificacion){
        super(n,a,c,ac)
        this.cursosDictados = cd
        this.calificacion = calificacion
    }
    getCursosDictados(){return this.cursosDictados}
    getCalificacion(){return this.calificacion}
    setCursosDictados(cd){this.cursosDictados = cd}
    setCalificacion(c){this.calificacion = c}
}