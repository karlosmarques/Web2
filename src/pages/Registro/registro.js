import React, { useState } from "react";
import "./registro.css";


function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nascimento, setNascimento] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Senha:", senha);
    console.log("nascimento:", nascimento);
    console.log("Envio realizado.");
  };

  return (
    <div className="corpo">
      <div className="form-container">
        <h1 className="titulo">Cadastre-se aqui!</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="name" className="rotulo">Nome:</label>
            <input
              type="text"
              className="campo-input"
              id="name"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="email" className="rotulo">E-mail:</label>
            <input
              type="email"
              className="campo-input"
              id="email"
              placeholder="exemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <small className="ajuda-texto">
              Nós nunca compartilharemos seu e-mail com terceiros.
            </small>
          </div>

          <div className="Campo">
              <label htmlFor="Nascimento" className="rotulo">Data de nascimento</label>
              <input
              type="date"
              className="campo-input"
              id="nascimento"
              value={nascimento}
              onChange={e => setNascimento(e.target.value)}
              ></input>
            </div>


          <div className="campo">
            <label htmlFor="password" className="rotulo">Senha:</label>
            <input
              type="password"
              className="campo-input"
              id="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="centrado">
            <button id="botao" type="submit" className="botao">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
