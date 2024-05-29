import { Link } from 'react-router-dom'
import "./FormaPagamento.css";

const FormaPagamento = () => {
  return (
    <div>
      <div className="forma-pagamento">
        <div className="forma-pagamento-section">
          <h3>Planos</h3>
          <p>Benefício Pacto Global</p>
          <p>R$ 70,00 de desconto</p>
        </div>
        <div className="forma-pagamento-section">
          <h3>Métodos de Pagamento</h3>
          <div className="forma-pagamento-grupo">
            <input type="radio" id="cartao-credito" name="metodo-pagamento" defaultChecked />
            <label htmlFor="cartao-credito">Cartão de Crédito (Mastercard / Visa)</label>
          </div>
          <div className="forma-pagamento-entrada">
            <label htmlFor="nome-titular">Nome do titular do cartão</label>
            <input type="text" id="nome-titular" />
          </div>
          <div className="forma-pagamento-entrada">
            <label htmlFor="numero-cartao">Número do cartão</label>
            <input type="text" id="numero-cartao" />
          </div>
          <div className="forma-pagamento-entrada">
            <label htmlFor="validade-cartao">Validade</label>
            <input type="text" id="validade-cartao" />
          </div>
          <div className="forma-pagamento-grupo">
            <label htmlFor="codigo-seguranca">Código de segurança</label>
            <input type="text" id="codigo-seguranca" />
          </div>
          <div className="forma-pagamento-salvar-cartao">
            <input type="checkbox" id="salvar-cartao" />
            <label htmlFor="salvar-cartao">Salvar Cartão para próxima sessão?</label>
          </div>
          <div className="forma-pagamento-grupo">
            <input type="radio" id="pix" name="metodo-pagamento" />
            <label htmlFor="pix">Pix</label>
          </div>
        </div>
        <div className="forma-pagamento-section">
          <h3>Resumo do Agendamento</h3>
          <div className="forma-pagamento-tabela">
            <tr>
              <td>Valor da sessão</td>
              <td>R$ 140,00</td>
            </tr>
            <tr>
              <td>Desconto pelo plano</td>
              <td>-R$ 70,00</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>R$ 70,00</td>
            </tr>
          </div>
          <button type="submit">CONFIRMAR PAGAMENTO</button>
        </div>
        <div className="forma-pagamento-section">
          <h3>Pagamento Seguro</h3>
          <img src="https://www.visa.com/dam/VCOM/regional/emea/emea_visa_logo.png" alt="VISA" />
          <img src="https://www.mastercard.us/dam/mccom/global/en/images/mastercard-logo.png" alt="Mastercard" />
          <img src="https://www.pix.gov.br/img/pix-logo-full.svg" alt="Pix" />
        </div>
      </div>
    </div>
  );
};

export default FormaPagamento;