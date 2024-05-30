import React from 'react';
import './FormaPagamento.css';

function FormaPagamento() {
  return (
    <div className="container">
      <div className="planos">
        <h2>Planos</h2>
        <div className="plano-detalhe">
          <p>Benefício Pacto Global</p>
          <p>R$ 70,00 de desconto</p>
        </div>
      </div>
      <div className="metodos-pagamento">
        <h2>Métodos de Pagamento</h2>
        <div className="cartao-credito">
          <input type="radio" id="cartao" name="pagamento" value="cartao" />
          <label htmlFor="cartao">Cartão de Crédito (Mastercard / Visa)</label>
          <br />
          <input type="radio" id="cartao" nome-="pagamento" value="cartao" />

          <label htmlFor="cartao">Cartão de Débito (Mastercard / Visa)</label>

          <div className="cartao-detalhes">
            <label htmlFor="nome-cartao">Nome do titular do cartão</label>
            <input type="text" id="nome-cartao" />
            <label htmlFor="numero-cartao">Número do cartão</label>
            <input type="text" id="numero-cartao" />
            <label htmlFor="validade">Validade</label>
            <input type="text" id="validade" />
            <label htmlFor="codigo-seguranca">Código de segurança</label>
            <input type="text" id="codigo-seguranca" />
            <div className="salvar-cartao">
              <input type="checkbox" id="salvar-cartao" />
              <label htmlFor="salvar-cartao">Salvar Cartão para próxima sessão?</label>
            </div>
          </div>
        </div>
        <div className="pix">
          <input type="radio" id="pix" name="pagamento" value="pix" />
          <label htmlFor="pix">Pix</label>
        </div>
      </div>
      <div className="perfil">
        <img src="src/assets/perfilformadepagamento.jpg" alt="Perfil" />
        <div className="perfil-detalhes">
          <h3>Gabrielle Nascimento</h3>
          <p>Especialista | São Paulo</p>
          <p>Idade: 35 anos</p>
          <p>Fuso Horário: São Paulo (-3)</p>
          <p>Duração: 50 minutos</p>
        </div>
      </div>
      <div className="resumo-agendamento">
        <h2>Resumo do Agendamento</h2>
        <div className="resumo-detalhes">
          <p>Valor da sessão</p>
          <p>R$ 140,00</p>
          <p>Desconto pelo plano</p>
          <p>50%</p>
          <p>Total</p>
          <p>R$ 70,00</p>
        </div>
        <button>CONFIRMAR PAGAMENTO</button>
        <div className="pagamento-seguro">
          <p>Pagamento Seguro</p>
          <img src="src/assets/mastercard.png" alt="Mastercard" />
          <img src="src\assets\visa.png" alt="Visa" />
          <img src="src/assets/pix.png" alt="Pix" />
        </div >
      </div >
    </div >
  );
}

export default FormaPagamento;
