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
  const [getAtitivades, setGetAtividades] = useState(
    JSON.parse(localStorage.getItem('TarefaUse'))
  );
  const [User, setUser] = useState(JSON.parse(localStorage.getItem('User')));
  var id;
  var AttAtividades;
  useEffect(() => {
    if (!localStorage.getItem('User')) {
      window.location.href = '/';
    }
  }, []);

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
    } else if (InputTarefas.length <= 3) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Minimo de 4 digitos',
      });
    } else {
      try {
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
            setInputTarefas('');
            Swal.fire({
              title: 'Aguarde',
              text: 'Cadastrando tarefa',
              timer: 2000,
              didOpen: () => {
                Swal.showLoading();
              },
            }).then(async () => {
              Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Tarefa ja cadastrada',
              }).then(() => {
                window.location.reload();
              });
              await api.get(`/pegarAtividade/${User.id}`).then((res) => {
                console.log(res.data.tarefas);
                localStorage.setItem(
                  'TarefaUse',
                  JSON.stringify(res.data.tarefas)
                );
                console.log(getAtitivades);
              });
            });
          });
      } catch (error) {
        const status = error.response.status;
        if (status === 401) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tarefa ja cadastrada',
          });
        }
      }
    }
  };
  const remove = async (codigo) => {
    await api
      .patch(`/deletAtividade/${codigo}`, {
        status: 2,
      })
      .then(async () => {
        await api
          .get(`/pegarAtividade/${User.id}`)
          .then((res) => {
            localStorage.setItem('TarefaUse', JSON.stringify(res.data.tarefas));
            console.log(res.data.tarefas);
            console.log(getAtitivades);
          })
          .then(() => {
            Swal.fire({
              title: 'Aguarde',
              text: 'Deletando tarefa',
              timer: 3300,
              didOpen: () => {
                Swal.showLoading();
              },
            }).then(async () => {
              Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Tarefa deletada',
              }).then(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              });
            });
          });
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
              {getAtitivades.map((t) => {
                return (
                  <li id={`${t.codigo}`} key={`_${t.atividade}_${t.id}`}>
                    {' '}
                    {t.atividade}
                    <button id="deletar" onClick={() => remove(t.codigo)}>
                      <img src={lixo} alt="Lixo" />
                    </button>
                  </li>
                );
              })}
              {/* { getAtividade()} */}
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
