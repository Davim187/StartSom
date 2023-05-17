import React, { useState } from 'react';
import './style.css';
import Title from '../../componentes/title';
import mostrarSenha from '../../img/padlock_open_icon_237099.png';
import ocultarSenha from '../../img/padlock_icon_237100.png';
import Swal from 'sweetalert2';

function Login() {
  // --------------------------------- Constantes --------------------------------- //

  const [AparecerSenha, setAparecerSenha] = useState('password');
  const [User, setUser] = useState('');
  const [Senha, setSenha] = useState('');
  const [Error, setError] = useState(false);

  // --------------------------------- Função senha --------------------------------- //

  function MostrarSenha(e) {
    e.preventDefault();
    AparecerSenha === 'password'
      ? setAparecerSenha('text')
      : setAparecerSenha('password');
  }

  // --------------------------------- Funçoes login --------------------------------- //

  function entrar(e) {
    e.preventDefault();
    if (User === '' || Senha === '') {
      setError(true);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos',
      });
    } else if (Senha.length < 5 || Senha.length > 10) {
      setError(true);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Senha com minimo de 5 digitos e maximo de 10',
      });
    } else {
      setError(false);
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Bem vindo ao StartSom',
      }).then((resp) => {
        setTimeout(() => {
          window.location.href = '/home';
        }, 500);
      });
      console.log('Usuario:', User);
      console.log('Senha:', Senha);
    }
  }

  // --------------------------------- Dsigner Tela --------------------------------- //

  return (
    <>
      <div id="main">
        <div id="imgLogo">
        <Title/>
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
