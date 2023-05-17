import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../screen/login';
import Cadastro from '../screen/cadastro';
import Home from '../screen/home'

function Routers() {
  return (
    // --------------------------------- Rotas  --------------------------------- // 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastroUsuario" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routers />);
export default Routers;
