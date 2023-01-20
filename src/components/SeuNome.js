function SeuNome({setNomeS}) {
    return (
        <>
            <input type="text" onChange={(e) => setNomeS(e.target.value)}/>
        </>
    )
}

export default SeuNome