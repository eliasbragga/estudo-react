function Saudacao({nomeS}){
    function RetornaNome(algumNome){
        return `Ola,${algumNome}. Seja Bem vindo!`
    }
    return (
        <>
            {nomeS && <p>{RetornaNome(nomeS)}</p>}
        </>
    )
}

export default Saudacao