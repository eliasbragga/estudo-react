function Pessoa({foto,nome,idade,profissao}){
    return (
        <div>
            <img src={foto} alt="foto Pessoa" />
            <h2>Nome: {nome}</h2>
            <h2>idade: {idade}</h2>
            <h2>profissao: {profissao}</h2>
        </div>
    )
}

export default Pessoa