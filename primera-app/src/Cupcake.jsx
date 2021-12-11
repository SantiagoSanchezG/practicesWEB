import "./index.css"

function Cupcake(props){
    return (
        <div className="gri">
            <div className="mar">
                <h2>{props.color}</h2>
                <p>{`Sabor: ${props.sabor}`}</p>
            </div>
        </div>
    )
}
export default Cupcake