// src/routers/routers.js
import { HashRouter, Routes, Route } from 'react-router-dom';

// Importando seus componentes reais
import Login from '../screen/login';
import Cadastro from '../screen/cadastro';
import Home from '../screen/home';
import Recomendados from '../screen/ViolaoRecomendados';
import Aprender from '../screen/apender';
import Conta from '../screen/conta';

function Routers() {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recomendados" element={<Recomendados />} />
          <Route path="/aprender" element={<Aprender />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>
    </HashRouter>
  );
}

export default Routers;
