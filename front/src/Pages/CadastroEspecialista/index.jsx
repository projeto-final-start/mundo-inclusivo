import React, { useState } from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";


function CadastroEspecialista() {
    const [activeTab, setActiveTab] = useState(null);

    return (
        <>
            <div className="cadastro-page">
            <figure>
                    <img src="/src/assets/fotologincad.svg" alt="Foto" className="fotocad" />
                </figure>

                <div className="box-cad1">
                    <h1 className="cadastro">Cadastro</h1>
                    <form>
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




                        <div className="Botao-tab">
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
                            <div>
                                {activeTab === 'psicologo' && (
                                    <form>
                                        <input className="crp-cad" type="text" id="crp" placeholder="CRP" />
                                        <input className="ano-cad" type="text" id="ano" placeholder="Em que ano você começou a realizar consulta?" />
                                    </form>
                                )}

                                {activeTab === 'psicanalista' && (
                                    <form>
                                        <input className="crp-cad" type="text" id="crp" placeholder="CRP" />
                                        <input className="ano-cad" type="text" id="ano" placeholder="Em que ano você começou a realizar consulta?" />

                                    </form>
                                )}
                            </div>
                        )}
                    </form>
                    <div className="btn-">
                        <Link to="/agendaespecialista" className="botao-cadastro">
                            Quero me cadastrar
                        </Link>
                    </div>
                   
                </div>
                
            </div>
        </>
    );
}

export default CadastroEspecialista;

