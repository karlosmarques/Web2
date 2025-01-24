import Login from "./pages/Login/login";
import Registro from "./pages/Registro/registro";
import Eventos from './pages/Eventos/eventos';
import Comunidade from "./pages/Comunidade/comunidade";
import Mentorias from "./pages/Mentorias/mentorias";
import Vagas from "./pages/Vagas/vagas";
import RecuperarSenha from "./pages/RecuperarSenha/recuperarsenha";
import Perfil from "./pages/Perfil/perfil"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Troca from "./pages/Troca_de_senha/troca";



function App() {
  return (
    <div>
   
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/mentorias" element={<Mentorias />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/recuperarsenha" element={<RecuperarSenha />} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/troca_de_senha" element ={<Troca/>}/>
      </Routes>
    </div>
  );
}

export default App;
