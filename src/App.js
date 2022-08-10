import "./App.css";
import Header from "./components/header/Header";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Lista from "./components/Lista";
import Evento from "./components/Evento";

import React, { useState } from "react";

function App() {
  function clicar(){
    alert('Ola Mundo')
  }


  const nome = "react";
  const cursoA = "Vuejs";
  const [num, setNum] = useState("Elias");

  return (
    <div className="App">
      <Header nome={nome} />
      <Evento clicar={clicar} nomeButton='Primeiro Emit' />
      <Lista nome={num} curso={cursoA} />
      <button onClick={() => setNum("Voce clicou")}>Alterar num</button>
      <SayMyName nome={nome} />
      <Pessoa
        nome="rodrigo"
        idade="28"
        profissao="programador"
        foto="https://via.placeholder.com/300"
      />
    </div>
  );
}

export default App;
