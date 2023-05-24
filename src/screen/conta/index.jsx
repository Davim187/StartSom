import React, { useEffect, useRef, useState } from 'react';
import Header from '../../componentes/header';
import './style.css';
import Swal from 'sweetalert2';
import perfil from '../../img/perfil.png';
import mais from '../../img/+.png';
import lixo from '../../img/lixo.png';
import { Await } from 'react-router-dom';

function Conta() {
  const [id, setId] = useState(1);
  const [InputTarefas, setInputTarefas] = useState('');
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const atualizar = localStorage.getItem('TarefaUser');
    setLista(JSON.parse(atualizar));
  }, []);
  setTimeout(() => {
    console.log(lista);
    localStorage.setItem('TarefaUser', JSON.stringify(lista));
  }, 500);
  const adicionar = () => {
    if (InputTarefas === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha o campo corretamente',
      });
    } else {
      setId(id + 1);
      setLista([
        ...lista,
        { id: '_' + InputTarefas + '_' + id, NomeTarefa: InputTarefas },
      ]);
      setInputTarefas('');
    }
  };
  const remove = (id) => {
    const filterDelet = lista.filter((todo) => todo.id !== id);
    setLista(filterDelet);
    localStorage.setItem('TarefaUser', JSON.stringify(filterDelet));
  };
  return (
    <>
      <Header />
      {/* <!----------------------------------- Perfil ----------------------------------> */}
      <div className="PerfilC">
        <img src={perfil} alt="Perfil" />
        <h2 id="nome1">'name'</h2>
        <button className="sairUser" onclick="SairUserLogin()">
          Sair
        </button>
        <button id="loginUser" onClick="loginUser()">
          login
        </button>
      </div>
      <hr />
      <article>
        <div className="informaçao">
          <h3>Nome</h3>
          <p id="nome">'name'</p>
          <h3>Email</h3>
          <p id="email">'email'</p>
          <h3>Sobre mim:</h3>
          <textarea className="sobreMim"></textarea> <br />
        </div>
        <hr />
        {/* <!----------------------------------- Lista de atividades ----------------------------------> */}
        <div className="container">
          <div className="lista">
            <h1>Lista de tarefas</h1>
            <input
              type="text"
              id="text"
              value={InputTarefas}
              onChange={(e) => {
                setInputTarefas(e.target.value);
              }}
            />
            <button type="submit" onClick={() => adicionar()}>
              <img src={mais} alt="Adicionar" style={{ cursor: 'pointer' }} />
            </button>
            <ul id="list" style={{ listStyle: 'none' }}>
              {lista.map((t) => {
                return (
                  <li
                    id={`_${t.NomeTarefa}_${t.id}`}
                    key={`_${t.NomeTarefa}_${t.id}`}
                  >
                    {' '}
                    {t.NomeTarefa}
                    <button id="deletar" onClick={() => remove(t.id)}>
                      <img src={lixo} alt="Lixo" />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* <!----------------------------------- footer ----------------------------------> */}
        <footer className="midia">
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
