import React from 'react'
import fotoeventos from "../../pages/img/eventos.webp"
import "./cardseventos.css"

 function Cardseventos({post}) {
  return (
    <section>
         <div className="cartao-evento">
                <div className="informacoes-evento">
                    <span>{post.time}</span>
                  <div className="descricao-evento">
                    <h2>{post.nome}</h2>
                    <img src={fotoeventos} width={440} alt=''/>
                    <span>{post.content}</span>
                   <button>oba</button>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default Cardseventos
