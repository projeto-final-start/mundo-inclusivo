import React from 'react';
import { FaSquareXmark } from "react-icons/fa6";

const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '1000',
  display: 'flex',
  padding: '20px',
  justifyContent: 'flex-end', // Alinha o modal à direita
  alignItems: 'center' // Centraliza verticalmente
};

const MODAL_STYLE = {
  position: 'relative', // Define a posição relativa para que se posicione dentro do container flexível
  marginRight: '0', // Garante que o modal esteja alinhado à direita
  width: '80vw', // Responsivo
  maxWidth: '400px', // Limita a largura máxima
  padding: '20px',
  backgroundColor: 'rgba(29, 154, 210, 0.68)',
  borderRadius: '15px'
};

const CLOSE_STYLE = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '2em',
  textAlign: 'right' // Alinha o ícone de fechar à direita
};

function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div style={{ marginBottom: '10px' }}>
            {children}
          </div>
          <div style={CLOSE_STYLE} onClick={setModalOpen}>
            <FaSquareXmark />
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
