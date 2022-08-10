import { useState } from "react";

function Evento({clicar, nomeButton}) {
    const [nome, setNome] = useState('')
  return (
    <div>
      <button onClick={clicar}>{nomeButton}</button>
        <p>{nome}</p>
      <input type="text" onChange={(e) => setNome(e.target.value)} />
    </div>
  );
}

export default Evento;
