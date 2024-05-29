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
<<<<<<< HEAD
=======

>>>>>>> 4611f927d73d2870e658eddb5b06a3854ae3b731
        <div className="cartao-credito">
          <input type="radio" id="cartao" name="pagamento" value="cartao" />
          <label htmlFor="cartao">Cartão de Crédito (Mastercard / Visa)</label>
          <br />
          <input type="radio" id="cartao" nome-="pagamento" value="cartao" />
<<<<<<< HEAD
          <label htmlFor="cartao">Cartão de Débito (Mastercard / Visa)</label>         
=======
          <label htmlFor="cartao">Cartão de Débito (Mastercard / Visa)</label>
          <br />

>>>>>>> 4611f927d73d2870e658eddb5b06a3854ae3b731
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
<<<<<<< HEAD
        <img src="src/assets/perfilformadepagamento.jpg" alt="Perfil" />
        <div className="perfil-detalhes">
          <h3>Gabrielle Nascimento</h3>
=======
        <img src="src/assets/fotoperfilcompleto.jpg" alt="Perfil" />
        <div className="perfil-detalhes">
          <h3>Jenifer Soares Bezerra</h3>
>>>>>>> 4611f927d73d2870e658eddb5b06a3854ae3b731
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
<<<<<<< HEAD
          <img src="src/assets/mastercard.png" alt="Mastercard" />
          <img src="src\assets\visa.png" alt="Visa" />
          <img src="src/assets/pix.png" alt="Pix" />
=======
          <img src="src/assets/mastercard.jpg" alt="Mastercard" />
          <img src="src\assets\visa.jpg" alt="Visa" />
          <img src="src/assets/pix.jpg" alt="Pix" />
>>>>>>> 4611f927d73d2870e658eddb5b06a3854ae3b731
        </div>
      </div>
    </div>
  );
}

export default FormaPagamento;


// import { Link } from 'react-router-dom'
// import "./FormaPagamento.css";

// const FormaPagamento = () => {
//   return (
//     <div>
//       <div className="forma-pagamento">
//         <div className="forma-pagamento-section">
//           <h3>Planos</h3>
//           <p>Benefício Pacto Global</p>
//           <p>R$ 70,00 de desconto</p>
//         </div>
//         <div className="forma-pagamento-section">
//           <h3>Métodos de Pagamento</h3>
//           <div className="forma-pagamento-grupo">
//             <input type="radio" id="cartao-credito" name="metodo-pagamento" defaultChecked />
//             <label htmlFor="cartao-credito">Cartão de Crédito (Mastercard / Visa)</label>
//           </div>
//           <div className="forma-pagamento-entrada">
//             <label htmlFor="nome-titular">Nome do titular do cartão</label>
//             <input type="text" id="nome-titular" />
//           </div>
//           <div className="forma-pagamento-entrada">
//             <label htmlFor="numero-cartao">Número do cartão</label>
//             <input type="text" id="numero-cartao" />
//           </div>
//           <div className="forma-pagamento-entrada">
//             <label htmlFor="validade-cartao">Validade</label>
//             <input type="text" id="validade-cartao" />
//           </div>
//           <div className="forma-pagamento-grupo">
//             <label htmlFor="codigo-seguranca">Código de segurança</label>
//             <input type="text" id="codigo-seguranca" />
//           </div>
//           <div className="forma-pagamento-salvar-cartao">
//             <input type="checkbox" id="salvar-cartao" />
//             <label htmlFor="salvar-cartao">Salvar Cartão para próxima sessão?</label>
//           </div>
//           <div className="forma-pagamento-grupo">
//             <input type="radio" id="pix" name="metodo-pagamento" />
//             <label htmlFor="pix">Pix</label>
//           </div>
//         </div>
//         <div className="forma-pagamento-section">
//           <h3>Resumo do Agendamento</h3>
//           <div className="forma-pagamento-tabela">
//             <tr>
//               <td>Valor da sessão</td>
//               <td>R$ 140,00</td>
//             </tr>
//             <tr>
//               <td>Desconto pelo plano</td>
//               <td>-R$ 70,00</td>
//             </tr>
//             <tr>
//               <td>Total</td>
//               <td>R$ 70,00</td>
//             </tr>
//           </div>
//           <button type="submit">CONFIRMAR PAGAMENTO</button>
//         </div>
//         <div className="forma-pagamento-section">
//           <h3>Pagamento Seguro</h3>
//           <img src="https://www.visa.com/dam/VCOM/regional/emea/emea_visa_logo.png" alt="VISA" />
//           <img src="https://www.mastercard.us/dam/mccom/global/en/images/mastercard-logo.png" alt="Mastercard" />
//           <img src="https://www.pix.gov.br/img/pix-logo-full.svg" alt="Pix" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FormaPagamento;