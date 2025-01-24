import React from 'react'
import foto from "../../pages/img/vaga.png"
import "./cardsvagas.css"


function Cardsvaga({post}) {
  return (
    <div className="coluna publicacao-vaga">
     <div className="cartao-vaga d-flex align-items-start">
      <img className="imagem-vaga" src={foto} alt="" />
      <div className="descricao-vaga">

        <span className='time-vagas'>{post.time}</span>
        <span className='-nome-vagas'>{post.nome}</span>
        <span className='content-vagas'>{post.content}</span>
        <button type="button" className="botao-acessar">Acessar vaga</button>
      </div>
    </div>
  </div>
  )
}

export default Cardsvaga;
