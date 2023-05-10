import React from 'react';
import './style.css';
import imgLogo from '../../img/violao.png';

function Login() {
  return (
    <>
      <div id="main">
        <div id="imgLogo">
          <div id="MainLogo">
            <img id="imgViolao" src={imgLogo} alt="ViolaoLogo" />
            <h1>StartSom</h1>
            <hr />
          </div>
        </div>
        <form id="FormLogin">
          <h1>LOGIN</h1>
          <hr />
          <label htmlFor="User">Usuario:</label>
          <br />
          <input type="text" name="User" id="User" />
          <br />
          <label htmlFor="Senha">Senha:</label>
          <br />
          <input type="text" name="Senha" id="Senha" />
          <br />
          <button>Acessar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
