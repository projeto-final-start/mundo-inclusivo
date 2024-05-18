import React, { useState } from "react";
import "./Cadastro.css";

function CadastroEspecialista() {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <>
            <div className="cadastro-page">
                <figure>
                    <img src="" alt="imagem de fundo" />
                </figure>

                <div className="box-cad1">
                    <h1 className="cadastro">Cadastro</h1>
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
                        <input
                            className="numero-cad"
                            type="text"
                            id="numero"
                            placeholder="Número de celular"
                        />
                        <input
                            className="cpf-cad"
                            type="text"
                            id="CPF"
                            placeholder="CPF"
                        />
                        <select className="genero-cad" id="genero">
                            <option value="genero">Gênero</option>
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </form>
                </div>

                <div className="Botao">
                    <div
                        className={`tab ${activeTab === 'psicologo' ? 'active' : ''}`}
                        onClick={() => setActiveTab('psicologo')}
                    >
                        Psicólogo(a)
                    </div>
                    <div
                        className={`tab ${activeTab === 'psicanalista' ? 'active' : ''}`}
                        onClick={() => setActiveTab('psicanalista')}
                    >
                        Psicanalista
                    </div>
                </div>

                {activeTab && (
                    <div className="form-direita">
                        {activeTab === 'psicologo' && (
                            <form>
                                <input className="crp-cad" type="text" id="crp" placeholder="CRP" />
                                <input className="ano-cad" type="text" id="ano" placeholder="Em que ano você começou a realizar consulta" />
                            </form>
                        )}

                        {activeTab === 'psicanalista' && (
                            <form>
                                <input className="crp-cad" type="text" id="crp" placeholder="CRP" />
                                <input className="ano-cad" type="text" id="ano" placeholder="Em que ano você começou a realizar consulta" />

                            </form>
                        )}
                    </div>
                )}

                <button className="botao-cadastro" type="submit">
                Quero me cadastrar
                </button>
            </div>
        </>
    );
}

export default CadastroEspecialista;

