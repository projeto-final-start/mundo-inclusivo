import React, { useState } from "react";

function Cliente() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <>
      <div className="cadastro-page1">
        <figure>
          <img src="" alt="imagem de fundo" />
        </figure>

        <div className="box-cad1">
          <h1 className="cadastro">Cadastro Cliente</h1>
          <form className="form-esquerda">
            <input
              className="nome-cad"
              type="text"
              id="nome"
              placeholder="Nome e Sobrenome"
            />
            <input
              className="email-cad"
              type="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              className="senha-cad"
              type="password"
              id="senha"
              placeholder="Senha"
            />
          </form>
        </div>

        <div className="Botao"></div>

        <button className="botao-cadastro" type="submit">
          Quero me cadastrar
        </button>
      </div>
    </>
  );
}

export default Cliente;
