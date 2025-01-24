import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail:", email);
    console.log("Senha:", senha);
    console.log("Envio realizado.");
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="h1login">Login</h1>

          <div className="input-group">
            <label htmlFor="email" className="form-label">E-mail:</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Digite seu e-mail" 
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha" className="form-label">Senha:</label>
            <input 
              type="password" 
              id="senha" 
              className="form-input" 
              value={senha} 
              onChange={(e) => setSenha(e.target.value)} 
              placeholder="Digite sua senha" 
            />
          </div>

          <div className="links">
            <Link to="recuperarsenha">Esqueceu a senha?</Link>
          </div>
          <br></br>
          <div className="naoconta">
                Não possui uma conta?<Link to="Registro">Criar conta</Link>
          </div>
          <br></br>
          
          <button type="submit" className="submit-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
