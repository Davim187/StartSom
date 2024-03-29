import React, { useEffect, useState } from 'react';
import './style.css';
import Title from '../../componentes/title';
import mostrarSenha from '../../img/padlock_open_icon_237099.png';
import ocultarSenha from '../../img/padlock_icon_237100.png';
import Swal from 'sweetalert2';
import api from '../../services/api';
import { Await } from 'react-router-dom';

function Login() {
  useEffect(() => {
    if (localStorage.getItem('User')) {
      window.location.href = '/home';
    }
  });

  // --------------------------------- Constantes --------------------------------- //

  const [AparecerSenha, setAparecerSenha] = useState('password');
  const [Email, setEmail] = useState('');
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

  async function entrar(e) {
    e.preventDefault();
    if (Email === '' || Senha === '') {
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
      try {
        await api
          .post('login', {
            email: Email,
            senha: Senha,
          })
          .then((res) => {
            console.log(res.data);
            var token = res.data.token;
            var usuario = res.data.user;
            console.log(token);
            setError(false);
            localStorage.setItem('Token', JSON.stringify(token));
            localStorage.setItem('User', JSON.stringify(usuario));
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Bem vindo ao StartSom',
            }).then(() => {
              setTimeout(() => {
                window.location.href = '/home';
              }, 500);
            });
          });
      } catch (error) {
        console.log(error);
        const status = error.response.status;
        if (status === 501) {
          console.log('Verifique se os campos estao preenchido corretamente');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Verifique se os campos estao preenchido corretamente',
          });
        } else if (status === 404) {
          console.log('Usuario nao encontrado');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario nao encontrado',
          });
        } else if (status === 422) {
          console.log('Senha invalida');
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Senha invalida',
          });
        }
      }
    }
  }

  // --------------------------------- Dsigner Tela --------------------------------- //

  return (
    <>
    <div id="body">
      <div id="main">
        <div id="imgLogo">
          <Title />
        </div>
        <form id="FormLogin">
          <h1>LOGIN</h1>
          <br />
          <input
            type="email"
            name="email"
            id={Error === false ? 'User' : 'UserError'}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
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
            <a href="Cadastro">Nao tenho cadastro!!</a>
          </h5>
        </form>
      </div>
      </div>
    </>
  );
}

export default Login;
