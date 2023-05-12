import React, { useState } from "react";
import "./style.css";
import imgLogo from "../../img/violao.png";
import mostrarSenha from "../../img/padlock_open_icon_237099.png";
import ocultarSenha from "../../img/padlock_icon_237100.png";

import Swal from "sweetalert2";

function Cadastro() {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [ConfirmarSenha, setConfirmarSenha] = useState("");
  const [Error, setError] = useState(false);
  const [AparecerSenha, setAparecerSenha] = useState("password");
  const [AparecerConfirmarSenha, setAparecerConfirmarSenha] =
    useState("password");

  function MostrarSenha(e) {
    e.preventDefault();
    AparecerSenha === "password"
      ? setAparecerSenha("text")
      : setAparecerSenha("password");
  }
  function MostrarConfirmarSenha(e) {
    e.preventDefault();
    AparecerConfirmarSenha === "password"
      ? setAparecerConfirmarSenha("text")
      : setAparecerConfirmarSenha("password");
  }

  function entrar(e) {
    e.preventDefault();
    if (User === "" || Email === "" || Senha === "" || ConfirmarSenha === "") {
      setError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Preencha todos os campos",
      });
    } else if (Senha.length < 5 || Senha.length > 10) {
      setError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senha com minimo de 5 digitos e maximo de 10",
      });
    } else if (Senha !== ConfirmarSenha ) {
      setError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Senhas diferentes",
      });
    } else {
      setError(false);
      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Bem vindo ao StartSom",
      });
      console.log("Usuario:", User);
      console.log("Senha:", Email);
      console.log("Usuario:", Senha);
      console.log("Senha:", ConfirmarSenha);
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
          <h1>Cadastrar</h1>
          <hr />
          <br />
          <input
            type="text"
            name="User"
            id={Error === false ? "User" : "UserError"}
            placeholder="Usuario"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <input
            type="email"
            name="User"
            id={Error === false ? "Email" : "EmailError"}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          {AparecerSenha === "text" ? (
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
            id={Error === false ? "Senha" : "SenhaError"}
            placeholder="Senha"
            onChange={(e) => {
              setSenha(e.target.value);
            }}
          />
          <br />
          {AparecerConfirmarSenha === "text" ? (
            <img
              className="StatusConfirmarSenha"
              src={mostrarSenha}
              alt="ViolaoLogo"
              onClick={MostrarConfirmarSenha}
            />
          ) : (
            <img
              className="StatusConfirmarSenha"
              src={ocultarSenha}
              alt="ViolaoLogo"
              onClick={MostrarConfirmarSenha}
            />
          )}
          <input
            type={AparecerConfirmarSenha}
            name="Senha"
            id={Error === false ? "ConfirmarSenha" : "ConfirmarSenhaError"}
            placeholder="Senha"
            onChange={(e) => {
              setConfirmarSenha(e.target.value);
            }}
          />
          <br />
          <button id="btnAcessar" onClick={entrar}>
            Acessar
          </button>
          <br />
          <h5>
            <a href="/">Ja tenho cadastro!!</a>
          </h5>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
