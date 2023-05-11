import React, { useState } from 'react';
import './style.css';
import imgLogo from '../../img/violao.png';
import mostrarSenha from '../../img/padlock_open_icon_237099.png';
import ocultarSenha from '../../img/padlock_icon_237100.png';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login() {
  const [AparecerSenha, setAparecerSenha] = useState('password');
  const [User, setUser] = useState('password');
  const [Senha, setSenha] = useState('password');
  const [Error, setError] = useState(false);

  function MostrarSenha(e) {
    e.preventDefault();
    AparecerSenha === 'password'
      ? setAparecerSenha('text')
      : setAparecerSenha('password');
  }

  function entrar(e) {
    e.preventDefault();
    if (User === '' || Senha === '') {
      setError(true);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos',
      });
    } else {
      setError(false);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Bem vindo ao StartSom',
      });
      console.log('Usuario:', User);
      console.log('Senha:', Senha);
    }
  }

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
          <br />
          <input
            type="text"
            name="User"
            id={Error === false ? 'User' : 'UserError'}
            placeholder="Usuario"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <div className="senha"></div>
          {AparecerSenha === 'text' ? (
            <img
              className="StatusSenha"
              src={mostrarSenha}
              alt="ViolaoLogo"
              onClick={MostrarSenha}
            />
          ) : (
            <img
              className="StatusSenha"
              src={ocultarSenha}
              alt="ViolaoLogo"
              onClick={MostrarSenha}
            />
          )}
          <input
            type={AparecerSenha}
            name="Senha"
            id={Error === false ? 'Senha' : 'SenhaError'}
            placeholder="Senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />

          <br />
          <button id="btnAcessar" onClick={entrar}>
            Acessar
          </button>
          <br />
          <h5>
            <a href="/cadastroUsuario">Nao tenho cadastro!!</a>
          </h5>
        </form>
      </div>
    </>
  );
}

export default Login;
