import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClienteEspecialista.css";


function ClienteEspecialista({ onAddClient }) {
    return (
      <div className="cliente-lista">
        <h1>Meus Clientes</h1>
        <div className="cliente-lista-header">
          <input type="text" placeholder="Procure clientes" />
          <Link className="add-cliente-btn" onClick={onAddClient}>Adicionar Clientes +</Link>
        </div>
        <div className="agendar">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Qtd. Sessões</th>
                <th>Ultima Sessão</th>
                <th>Status</th>
                <th>Situação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gabrielle Nascimento</td>
                <td>03</td>
                <td>20/04</td>
                <td>Evoluindo</td>
                <td>Convesação</td>
              </tr>
              <tr>
                <td>Neusa Gonçalves</td>
                <td>05</td>
                <td>03/05</td>
                <td>Evoluindo</td>
                <td>Crise Depressiva</td>
              </tr>
              <tr>
                <td>Anderson Lima</td>
                <td>01</td>
                <td>15/05</td>
                <td>Inicio</td>
                <td>Crise de Ansiedade</td>
              </tr>
              <tr>
                <td>Kelly Lins</td>
                <td>0</td>
                <td>29/05</td>
                <td>Primeira Consulta</td>
                <td>Primeira Consulta</td>
              </tr>
              <tr>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
export default ClienteEspecialista
