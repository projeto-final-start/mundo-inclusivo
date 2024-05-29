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
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Qtd. de sessões</th>
              <th>Última sessão</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    );
  }
export default ClienteEspecialista