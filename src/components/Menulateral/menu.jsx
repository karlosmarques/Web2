
import { Link } from 'react-router-dom';
import './menu.css';
import "./funcoes"

function MenuLateral() {
 
  return (
    <nav className="menu-lateral">
      <div className="btn-expandir">
        <i className="bi bi-list" id="btn-expandir"></i>
        <ul>
          <li className="item-menu ativo">
            <Link to="/perfil">
              <span className="icone">
                <i className="bi bi-person"></i>
              </span>
              <span className="texto-link">Meu Perfil</span>
            </Link>
          </li>

          <li className="item-menu">
            <Link to="/comunidade">
              <span className="icone">
                <i className="bi bi-people-fill"></i>
              </span>
              <span className="texto-link">Comunidade</span>
            </Link>
          </li>

          <li className="item-menu">
            <Link to="/vagas">
              <span className="icone">
                <i className="bi bi-pass-fill"></i>
              </span>
              <span className="texto-link">Vagas</span>
            </Link>
          </li>

          <li className="item-menu">
            <Link to="/mentorias">
              <span className="icone">
                <i className="bi bi-book-fill"></i>
              </span>
              <span className="texto-link">Mentorias</span>
            </Link>
          </li>

          <li className="item-menu">
            <Link to="/eventos">
              <span className="icone">
                <i className="bi bi-calendar-check-fill"></i>
              </span>
              <span className="texto-link">Eventos & Workshops</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuLateral;
