import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./RecuperacaoSenha.css";

function RecuperacaoSenha() {
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setEmailSent(true);
    };

    return (
        <div className='recup-page'>
            <figure>
            <img src="/src/assets/fotologin.svg" alt="Foto" className="fotologin" />
          </figure>
            <form className="recuperacao-senha" onSubmit={handleSubmit}>
                <h2 className='h2rs'>Recuperação de Senha</h2>
                <h3 className='h3rs'>Para recuperar sua senha, preencha o campo abaixo <br /> com o seu e-mail cadastrado</h3>
                <input
                    className="email-rec"
                    type="email"
                    id="email-senha"
                    placeholder="E-mail"
                    required
                />
                <button type="submit" className="btn-rec">Enviar</button>
                <Link to="/" className="btn-senha-volta">Voltar</Link>
            
            {emailSent && (
                <div className="mensagem-confirmacao">
                    <p>Um e-mail com instruções foi <br /> enviado para o endereço solicitado.</p>
                </div>
            )}
            </form>
        </div>
    );
}

export default RecuperacaoSenha;
