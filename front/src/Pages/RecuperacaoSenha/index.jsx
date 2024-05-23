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
        <div>
            <form className="recuperacao-senha" onSubmit={handleSubmit}>
                <h2>Recuperação de Senha</h2>
                <h3>Para recuperar sua senha, preencha o campo abaixo com o seu e-mail cadastrado</h3>
                <input
                    className="email"
                    type="email"
                    id="email-senha"
                    placeholder="E-mail"
                    required
                />
                <button type="submit" className="btn-senha">Enviar</button>
                <Link to="/" className="btn-senha-volta">Voltar</Link>
            </form>
            {emailSent && (
                <div className="mensagem-confirmacao">
                    <p>Um e-mail com instruções foi enviado para o endereço solicitado.</p>
                </div>
            )}
        </div>
    );
}

export default RecuperacaoSenha;
