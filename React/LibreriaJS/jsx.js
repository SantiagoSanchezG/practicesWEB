//JSX

const Logo = () =>{
    return(
        <div id="main-logo">
            <img src="./images/logo.png" alt="Logo" className="logo"/>
        </div>
    )
}

//Regla JSX 1: Solo se puede renderizar o almacenar 1 elemento
//Regla JSX 2: Usar fragmentos
const saludo = (
    <>
        <h1>Hi!</h1>
        <img src="./images/logo.png"/>
    </>
)

//Regla JSX 3: Todo etiqueta debe cerrarse
const miClase = "main"
const MiLogo = <img src="logo.svg" alt="Logo Principal"/>
const divVacio = <div className="container" id={miClase}/>

//Regla JSX 4: Todo atributo compuesto de convierte en camelCase
const miBoton = <button id="boton1" onClick="">Click me</button>