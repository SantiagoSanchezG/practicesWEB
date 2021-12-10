import Curso from "./Curso.js"
import Profesor from "./Profesor.js"
import Alumno from "./Alumno.js"

const html = new Curso("HTML", 
"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png", 10)
const css = new Curso("css", "https://www.returngis.net/wp-content/uploads/2012/05/logo_CSS3.png", 10)

const elem = document.getElementById("cursos")

function mostrarCurso(ob){
    const hijo = document.createElement("div")
    hijo.innerHTML =
    `
        <div class="cursoss">
        <img src="${ob.getPoster()}" aler="${ob.getNombre()}" class="Imagen"/>
        <h3>${ob.getNombre()}</h3>
        <p>Cantidad de clases: ${ob.getClases()}</p>
        </div>
    `
    elem.appendChild(hijo)
}

mostrarCurso(html)
mostrarCurso(css)

const formulario = document.getElementById("formCursos")
formulario.addEventListener("submit", e =>{
    e.preventDefault()
    const target = e.target
    const curso = new Curso(target.NombreCurso.value, target.Poster.value, target.clases.value)
    mostrarCurso(curso)
})

const profe = new Profesor("Sant", "Sanchez", "sanchezgrisaless@gmail.com", true, ["Mongo DB", "HTML"])
console.log(profe)