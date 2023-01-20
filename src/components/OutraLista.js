

function OutraLista({itens}) {
    return (
        <div>
            <h3>Lista generica</h3>
            {itens.length > 0 ?  (
                <ul>
                {itens.map((item, i) => (                
                    <li key={i}>{item.nome} estado : {item.estado}</li>             
                ))}
                </ul>
            ) : (
                <p>Nao ha itens na lista</p>
            ) }
            
        </div>
    )
}

export default OutraLista