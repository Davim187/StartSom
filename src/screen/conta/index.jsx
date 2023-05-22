import React, { useState } from 'react';
import Header from '../../componentes/header';
import './style.css';

import perfil from '../../img/perfil.png';
import mais from '../../img/+.png';
function Conta() {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const [InputTarefas, setInputTarefas] = useState('');

  var numeroAleatorio = getRandomIntInclusive(0, 10000000);
  const Lista = ['a'];
  function adicionar() {
    // window.document.getElementById('list').innerHTML = .join('');
  }

  return (
    <>
      <Header />
      {/* <!----------------------------------- Perfil ----------------------------------> */}
      <div class="PerfilC">
        <img src={perfil} alt="Perfil" />
        <h2 id="nome1">'name'</h2>
        <button class="sairUser" onclick="SairUserLogin()">
          Sair
        </button>
        <button id="loginUser" onclick="loginUser()">
          login
        </button>
      </div>
      <hr />
      <article>
        <div class="informaçao">
          <h3>Nome</h3>
          <p id="nome">'name'</p>
          <h3>Email</h3>
          <p id="email">'email'</p>
          <h3>Sobre mim:</h3>
          <textarea class="sobreMim"></textarea> <br />
        </div>
        <hr />
        {/* <!----------------------------------- Lista de atividades ----------------------------------> */}
        <div class="container">
          <div class="lista">
            <h1>Lista de tarefas</h1>
            <input
              type="text"
              id="text"
              onChange={(e) => {
                setInputTarefas(e.target.value);
              }}
            />
            <button type="submit" onClick={adicionar()}>
              <img src={mais} alt="Adicionar" style={{ cursor: 'pointer' }} />
            </button>

            <ul id="list">
              {Lista.map(() => (
                <li id="_${InputTarefas}_${numeroAleatorio}">
                  {' '}
                  {InputTarefas}
                  <button
                    id="deletar"
                    onclick="remove(_${InputTarefas}_${numeroAleatorio})"
                  >
                    {' '}
                    <img src="/Imagens/lixo.png" alt="" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!----------------------------------- footer ----------------------------------> */}
        <footer class="midia">
          <p>
            {' '}
            Copyright - StartSom | Todos os direitos reservados | Desenvolvido
            por Davi Morais
          </p>
        </footer>
      </article>
    </>
  );
}

export default Conta;
