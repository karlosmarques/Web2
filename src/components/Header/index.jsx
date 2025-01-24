import React from 'react';
import Logo from '../../pages/img/logo.jpeg';
import "./index.css" 
import { Link } from 'react-router-dom';

const Cabecalho = () => {
  return (
    <header>
      <div className="cabecalho">
        <img src={Logo} alt="" title="" className="logo" />
        <h1>Connecta IFPE</h1>
      </div>
      <nav className='nav'>
        <p><Link to ='/comunidade'>Comunidade</Link></p>
        <p><Link to= '/eventos'>Eventos</Link></p>
        <p><Link to ='/mentorias'>Mentorias</Link></p>
        <p><Link to='/perfil'>Perfil</Link></p>
        <p><Link to='/vagas'>Vagas</Link></p>
      </nav>
    </header>
    
  );
}

export default Cabecalho;
