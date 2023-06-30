import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../screen/login';
import Cadastro from '../screen/cadastro';
import Home from '../screen/home';
import Recomendados from '../screen/ViolaoRecomendados';
import Aprender from '../screen/apender';
import Conta from '../screen/conta';

function Routers() {
  return (
    // --------------------------------- Rotas  --------------------------------- //
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Cadastro" element={<Cadastro />} />
          <Route path="Home" element={<Home />} />
          <Route path="Recomendados" element={<Recomendados />} />
          <Route path="Aprender" element={<Aprender />} />
          <Route path="Conta" element={<Conta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routers />);
export default Routers;
