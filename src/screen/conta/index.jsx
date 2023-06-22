import React, { useEffect, useState } from 'react';
import Header from '../../componentes/header';
import './style.css';
import Swal from 'sweetalert2';
import api from '../../services/api';

import perfil from '../../img/conta/perfil.png';
import mais from '../../img/conta/+.png';
import lixo from '../../img/conta/lixo.png';

function Conta() {
  const [InputTarefas, setInputTarefas] = useState('');
  const [lista, setLista] = useState([]);
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('User')));
  var id;
  useEffect(() => {
    if (!localStorage.getItem('User')) {
      window.location.href = '/';
    }
  }, []);
  setTimeout(() => {
    console.log(lista);
    localStorage.setItem('TarefaUser', JSON.stringify(lista));
  }, 500);
  function SairUserLogin() {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    window.location.href = '/';
  }
  const adicionar = async () => {
    if (InputTarefas === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha o campo corretamente',
      });
    } else {
      id = parseInt(Math.random() * 10000000000) + String(User.id);
      await api
        .post('/cadastraAtividade', {
          codigo: id,
          idUsuario: User.id,
          atividade: InputTarefas,
          status: 1,
        })
        .then((res) => {
          console.log(res.data);
          setLista([...lista, { id: id, NomeTarefa: InputTarefas }]);
          setInputTarefas('');
        });
    }
  };
  const remove = async (id) => {
    await api
      .patch(`/deletAtividade/${id}`, {
        status: 2,
      })
      .then((res) => {
        console.log(res.data);
        const filterDelet = lista.filter((todo) => todo.id !== id);
        setLista(filterDelet);
      });
  };
  return (
    <>
      <Header />
      {/* <!----------------------------------- Perfil ----------------------------------> */}
      <div className="PerfilC">
        <img src={perfil} alt="Perfil" />
        <h2 id="nome1"> {User ? User.usuario : 'nome'}</h2>
        <button className="sairUser" onClick={() => SairUserLogin()}>
          Sair
        </button>
      </div>
      <hr />
      <article>
        <div className="informaçao">
          <h3>Nome</h3>
          <p id="nome"> {User ? User.usuario : 'nome'}</p>
          <h3>Email</h3>
          <p id="email">{User ? User.email : 'email'}</p>
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
                  <li id={`${t.id}`} key={`_${t.NomeTarefa}_${t.id}`}>
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
