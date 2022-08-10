import  PropType  from "prop-types"

function Lista ({nome,curso}) {
    return (
        <div>
            <ul>
                <li>{nome} : {curso}</li>
            </ul>
        </div>
    )
}

Lista.propTypes = {

    nome : PropType.string,
    curso : PropType.string

}

Lista.defaultProps = {
    nome : "Faltou nome",
    curso: "Faltou curso"
}

export default Lista