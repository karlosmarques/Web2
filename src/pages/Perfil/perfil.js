import React from 'react';
import './perfil.css'; 
import Perfil from "../img/avatar3.png"


const Profile = () => {
  return (
    <section className='sectionperfil'>
    <div className="container texto-centralizado">
      <div className="linha alinhar-itens">
        <div className="col-sm-4">
          <img className="foto-perfil" src={Perfil} alt="img" />
        </div>
        <div className="linha">
          <div className="col-sm-8" id="nome-usuario">
            <h2>Maria</h2>
            <p>
              <button type="button" className="botaoperfil">Editar perfil</button>
              <button type="button" className="botao2perfil">Acessar o currículo</button>
            </p>
          </div>
        </div>
        <div className="texto">
          <p>E-mail: exemplo@gmail.com</p>
          <p>Telefone: 0000-0000</p>
          <p>GitHub: </p>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Profile;
