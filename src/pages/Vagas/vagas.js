import React, { useState } from 'react';
import './vagas.css';
import { v4 } from 'uuid';
import Formpost from '../../components/formpost/form';
import Cardsvagas from '../../components/cardsvagas/cardsvagas';

function Vagas() {
  const [showPostArea, setShowPostArea] = useState(false); // Estado para controlar a visibilidade da área de postagem
 

  const handlePostAreaToggle = () => {
    setShowPostArea(!showPostArea);
  };

    const [cardsvagas,setCardvagas] = useState([])

    const addNovoCardsvagas = (content) =>{
      const novoCardsvagas ={
        id:v4(),
        nome:"vaga destinada",
        content,
        time: new Date().toDateString("pt-br")
      }
      setCardvagas((prevCardsvagas) => [novoCardsvagas,...prevCardsvagas])
    }
    

  return (
    <div>
      <section className="jobs-section">
      
              {/* Botão para exibir a área de postagem */}
              <h4>Conhece alguma vaga? Envie
                <button type="button" onClick={handlePostAreaToggle} className="post-button">aqui!</button>
              </h4>

              {/* Área de postagem (visível quando `showPostArea` é true) */}
              {showPostArea && (
                <div>
                  <Formpost onPost={(content) => addNovoCardsvagas(content)}/>
                </div>
              )}
              <div>
               {cardsvagas.map(post =>(
                <Cardsvagas key={post.id} post = {post}/>
               ))}
              </div>
      </section>
    </div>
  );
}

export default Vagas;
