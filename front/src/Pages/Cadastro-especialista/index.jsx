import "./Cadastro.css";

function CadastroEspecialista() {
  return (
    <>
      <div className="cadastro-page">
        <figure>
          <img src="front\public\backgroundlogin.svg" alt="imagem de fundo" />
        </figure>

        <div className="box-cad1">
          <h1 className="cadastro">Cadastro</h1>
          <form action="formulario1">
            <input
              className="nome-cad"
              type="text"
              id="nome"
              placeholder=" Nome e Sobrenome"
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
            <input
              className="numero-cad"
              type="text"
              id="numero"
              placeholder="Número de celular"
            />
            <input className="cpf-cad" type="text" id="CPF" placeholder="CPF" />
            <select className="genero-cad" type="text" id="genero">
              <option value="genero">Gênero</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro</option>
            </select>
          </form>
        </div>
        <div className="box-cad1">
          <form action="formulario2">
            <button
              type="image"
              src="front\src\assets\comunicacao.svg"
              alt=""
            ></button>
            <button
              type="image"
              src="front\src\assets\comunicacao.svg"
              alt=""
            ></button>
            <button
              type="image"
              src="front\src\assets\comunicacao.svg"
              alt=""
            ></button>
            <input
              className="crp-cad"
              type="number"
              id="crp"
              placeholder="CRP"
            />
            <input
              className="ano-cad"
              type="date"
              id="ano"
              placeholder="Em que ano você começou a realizar consulta"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastroEspecialista;
