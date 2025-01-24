import React from 'react';
import './mentorias.css';
import  { useState } from 'react';
import Monitoriacards from "../../components/cardsmentoria/cards"
import {v4} from "uuid"
import Formpost from '../../components/formpost/form';





function Mentorias() {
  const [isPostAreaVisible, setPostAreaVisible] = useState(false);

  const togglePostArea = () => {
    setPostAreaVisible(!isPostAreaVisible);
  };

  const [cardsmoni,setCardsmini] = useState([])

  

  const addNovoCardsmoni = (content) => {
    const novoCardsmoni={
      id: v4(),
      name: "Nome da monitoria",
      content,
      time:new Date().toDateString("pt-BR")
    }   
    setCardsmini((prevCardsmoni)=>[novoCardsmoni,...prevCardsmoni])
  }


  return (
    <div>
      <section>
        <div className="card-container">

          {/* Call to action */}
          <p>
            <h4>Quer ser um mentor? Crie seu anúncio
              <button id="postagem" onClick={togglePostArea}>aqui!</button>
            </h4>
          </p>

          {/* Área para criar post */}
          {isPostAreaVisible && (
            <Formpost onPost={(content) => addNovoCardsmoni(content)}/>
          )}
          <div>
            {cardsmoni.map(post =>(
              <Monitoriacards key={post.id} post = {post}/>
            ))}
          </div>  
        </div>
      </section>
    </div>
  );
}

export default Mentorias;
