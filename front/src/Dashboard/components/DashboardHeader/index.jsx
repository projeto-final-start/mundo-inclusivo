import { Link } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";
import styles from '../DashboardHeader/DashboardHeader.module.css';
import { useState } from 'react'
import Modal from '../../../components/Modal/modal';
import { FaHandHoldingHeart } from "react-icons/fa6"
import { FaHeartPulse } from "react-icons/fa6"


function DashboardHeader() {
  const [openModal, setOpenModal] = useState(false)
  const signOut = useSignOut()
  const navigate = useNavigate()

  function logout() {
    signOut();
    navigate('/login');
  }
  
  return (
    <header className={styles.header}>
      <Link to="/">
        <span><img src="../src/assets/logo.png" alt="Logo" /></span>
      </Link>
      <nav>
        <Link to="/">Home</Link> {/*Testando navlink para estilizar caso não de apagar import do navlink e retornar para link */}
        <Link to="/contato">Contato</Link>
        <Link to="/tratamento">Tratamento</Link>
        <Link to="/recuperacaosenha">SenhaTeste</Link> {/*Enquanto não se faz rota correta */}
        <Link to="/encontrarespecialista">Especialistas</Link> {/*Enquanto não se faz rota correta */}
      </nav>
      <button onClick={() => setOpenModal(true)}>Login/Cadastro</button>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <h3>
          Para visualizar suas consultas e agendar, <br />
          acesse sua conta:
        </h3>
        <div>
          <div className={styles.modalIcones}>
            <FaHandHoldingHeart />
            <h4>Cliente</h4>  
          </div>
          <Link to="/login">Entrar</Link> <br />
          <Link to="/cliente">Criar Conta</Link>
        </div>
        <div>
          <div className={styles.modalIcones}>
            <FaHeartPulse />
            <h4>Profissional da Saúde</h4>
          </div>
          <Link to="/login">Entrar</Link> <br />
          <Link to="/cadastroespecialista">Criar Conta</Link> <br /> <br />
        </div>
        <div>
            <button type='button' onClick={logout}>Sair</button>
        </div>
      </Modal>
    </header>

  )
}

export default DashboardHeader