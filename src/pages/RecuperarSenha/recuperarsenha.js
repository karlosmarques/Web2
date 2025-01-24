import React, { useState } from 'react';
import './recuperarsenha.css';
import { Link } from 'react-router-dom';


function RecuperarSenha() {

  const [email, setEmail] = useState("");

  const handlePostSubmit = (event) => {
    event.preventDefault();

    console.log("E-mail:", email); 
    console.log('E-mail enviado!');
  }

  return (
    <form onSubmit={handlePostSubmit}>
      <div className="recuperarsenhacontainer">
        <h1 className='titulorecuperarsenha'>Recuperar Senha</h1>
        
        <div className="inputsenha">
          <label htmlFor="emailInput" className="input-label">E-mail:</label>
          <input
            type="email"
            id="emailInput"
            className="input-field"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

       <Link to="/troca_de_senha"><button type="submit" className="butaorecuperarsenha" >Solicitar</button></Link> 
      </div>
    </form>
  );
}

export default RecuperarSenha;
