import React from 'react';
import './cards.css';
import cartaz from "../../pages/img/img-mentoria.png"

function Monitoriacards({ post }) {
  return (
  
    <div className="corpo-monitoria">
      <div className="publicacao-monitoria">
        <div className="card">
          <span className="nome-monitoria">{post.name}</span>
          <span className="time-monitoria">{post.time}</span>
          <div>
            <img src={cartaz} width={300} alt=''/>
          </div>
          <div>
            <p className="monitoraia-post">{post.content}</p>
          </div>
          <button>clique aqui</button>
        </div>
      </div>
    </div>
);
}

export default Monitoriacards;
