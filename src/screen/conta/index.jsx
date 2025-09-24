import React, { useEffect, useState } from "react";
import Header from "../../componentes/header";
import "./style.css";
import Swal from "sweetalert2";

import perfil from "../../img/conta/perfil.png";
import mais from "../../img/conta/+.png";
import lixo from "../../img/conta/lixo.png";

function Conta() {
  const [InputTarefas, setInputTarefas] = useState("");
  const [lista, setLista] = useState([]);
  const [getAtitivades, setGetAtividades] = useState([]);
  const [User, setUser] = useState([]);
  var id;
  var AttAtividades;
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("User")));
    const atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    const atividadesUser = atividades.filter(
      (t) => t.userId === User.id && t.status === 1
    );
    setGetAtividades(atividadesUser);

    if (!localStorage.getItem("User")) {
      window.location.href = "#/";
    }
  }, [lista]);

  function SairUserLogin() {
    localStorage.removeItem("User");
    window.location.href = "#/";
  }
  const adicionar = async () => {
    if (InputTarefas === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha o campo corretamente",
      });
    } else if (InputTarefas.length <= 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Minimo de 4 digitos",
      });
    } else {
      try {
        id = parseInt(Math.random() * 10000000000) + String(User.id);

        let atividades = JSON.parse(localStorage.getItem("atividades")) || [];
        Swal.fire({
          title: "Aguarde",
          text: "Cadastrando tarefa",
          timer: 2000,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then(async () => {
          Swal.fire({
            icon: "success",
            title: "Sucesso",
            text: "Tarefa ja cadastrada",
          });
          const novaAtividade = {
            id: id,
            atividade: InputTarefas,
            status: 1,
            userId: User.id,
          };
          atividades.push(novaAtividade);
          localStorage.setItem("atividades", JSON.stringify(atividades));
          setLista(atividades);
          setInputTarefas("");
        });
      } catch (error) {
        const status = error.response.status;
        if (status === 401) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Tarefa ja cadastrada",
          });
        }
      }
    }
  };
  const remove = async (codigo) => {
    let atividades = JSON.parse(localStorage.getItem("atividades")) || [];
    

      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Tarefa deletada",
      })
    AttAtividades = atividades.map((t) => {
  
      if (t.id === codigo) {
        t.status = 0;
      }
      return t;
    });
    
    localStorage.setItem("atividades", JSON.stringify(AttAtividades));
    setLista(AttAtividades);

  };
  return (
    <>
      <Header />
      {/* <!----------------------------------- Perfil ----------------------------------> */}
      <div className="PerfilC">
        <img src={perfil} alt="Perfil" />
        <h2 id="nome1"> {User ? User.usuario : "nome"}</h2>
        <button className="sairUser" onClick={() => SairUserLogin()}>
          Sair
        </button>
      </div>
      <hr />
      <article>
        <div className="informaçao">
          <h3>Nome</h3>
          <p id="nome"> {User ? User.usuario : "nome"}</p>
          <h3>Email</h3>
          <p id="email">{User ? User.email : "email"}</p>
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
              <img src={mais} alt="Adicionar" style={{ cursor: "pointer" }} />
            </button>
            <ul id="list" style={{ listStyle: "none" }}>
              {getAtitivades.map((t) => {
                return (
                  <li id={`${t.codigo}`} key={`_${t.atividade}_${t.id}`}>
                    {" "}
                    {t.atividade}
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
            {" "}
            Copyright - StartSom | Todos os direitos reservados | Desenvolvido
            por Davi Morais
          </p>
        </footer>
      </article>
    </>
  );
}

export default Conta;
