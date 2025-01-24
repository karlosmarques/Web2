import React, { useState } from 'react'
import "./troca.css"


function Troca() {
    const [novasenha,setNovasenha] = useState("")
    const [confirma,setConfimra] = useState("")

    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log("novasenha:", novasenha)
        console.log("confirmação:",confirma)
    }

  return (
    <div className='corpotroca'>
  <form className='geraltroca' onSubmit={handleSubmit}>
    <div className='inputs'>
      <h1 className='cabeçalho'>Redefinir senha</h1>
      <div className="grupo-input">
        <label htmlFor="senha" className="rotulo-formulario">Senha:</label>
        <input 
          type="password" 
          id="senha" 
          className="entrada-formulario" 
          value={novasenha} 
          onChange={(e) => setNovasenha(e.target.value)} 
          placeholder="Digite sua senha" 
        />
      </div>
      <div className="grupo-input">
        <label htmlFor="senha" className="rotulo-formulario">Confirmar Senha:</label>
        <input 
          type="password" 
          id="senha" 
          className="entrada-formulario" 
          value={confirma} 
          onChange={(e) => setConfimra(e.target.value)} 
          placeholder="Digite novamente sua senha" 
        />
      </div>
      <button type='submit' className='botao-submit'>Recuperar senha</button>
    </div>
  </form>
</div>

  )
}

export default Troca;
