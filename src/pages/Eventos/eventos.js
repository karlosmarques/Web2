import React from 'react';
import './eventos.css';
import Cardseventos from '../../components/cardseventos/cardseventos';
import Formpost from '../../components/formpost/form';
import { useState } from 'react';
import { v4 } from 'uuid';



function Eventos() {

  const [showPostArea, setShowPostArea] = useState(false); // Estado para controlar a visibilidade da área de postagem
  
  const handlePostAreaToggle = () => {
      setShowPostArea(!showPostArea);
  };
  const [cardseventos, setCardseventos] = useState([])

    const addNovoCardseventos = (content) =>{
      const novoCardseventos ={
        id: v4(),
        nome:"nome do evento",
        content,
        time: new Date().toDateString("pt-br")
      }
      setCardseventos((prevCardseventos)=>[novoCardseventos,...prevCardseventos])
    }
    return (
      <div>
        <section>
        <h4>Conhece alguma vaga? Envie
                <button type="button" onClick={handlePostAreaToggle} className="post-button">aqui!</button>
              </h4>

        {showPostArea && (
                <div>
                  <Formpost onPost={(content)=>addNovoCardseventos(content)}/>
                </div>
              )}
              <div>
             {cardseventos.map(post =>(
              <Cardseventos key={post.id} post = {post}/>
             ))}
              </div>
              
        </section>
      </div>
    );
  }
export default Eventos;
