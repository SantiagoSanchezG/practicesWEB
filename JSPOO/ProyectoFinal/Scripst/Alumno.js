import Usuario from "./Usuario.js"

export default class Alumno extends Usuario{
    constructor(n, a, c, ac, cursosTomados){
        super(n,a,c,ac)
        this.cursosTomados = cursosTomados
    }
    getCursosTomados(){return this.cursosTomados}
    setCursosTomados(cd){this.cursosTomados = cd}
}