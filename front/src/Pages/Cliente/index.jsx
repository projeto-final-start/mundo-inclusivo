import React, { useState } from "react";
import "./Cliente.css";
import { Link } from "react-router-dom";

function Cliente() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      <div className="cadastro-cliente">

        <div className="box-cliente">
          <h1 className="cadastre">Cadastre-se</h1>
          <form>
            <input
              className="nome-cliente"
              type="text"
              id="nome"
              placeholder="Nome e Sobrenome"
            />
            <input
              className="email-cliente"
              type="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              className="senha-cliente"
              type="password"
              id="senha"
              placeholder="Senha"
            />
          </form>


          <div className="Btn-cliente"></div>
          <Link className="botaocliente">
            Quero me cadastrar
          </Link>
        </div>
        <figure className="fotocliente">
            <img src="/src/assets/fotologincliente.svg" alt="Foto" className="foto" />
          </figure>
      </div>
    </>
  );
}

export default Cliente;
