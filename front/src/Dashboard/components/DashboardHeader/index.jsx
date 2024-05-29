import { Link } from 'react-router-dom'
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";
import styles from '../DashboardHeader/DashboardHeader.module.css';
import { useState } from 'react'
import Modal from '../../../components/Modal/modal';
import { FaRegUser } from "react-icons/fa6";
import { FaHeartPulse } from "react-icons/fa6"
import { HiOutlineUserCircle } from "react-icons/hi2";


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
        <Link to="/">Agenda</Link> {/*Testando navlink para estilizar caso não de apagar import do navlink e retornar para link */}
        <Link to="/disponibilidadeespecialista">Disponibilidade</Link>
        <Link to="/clienteespecialista">Cliente</Link>
      </nav>
      <div className='btn-modal'>
      <button className="btn-perfil" onClick={() => setOpenModal(true)}><HiOutlineUserCircle /></button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div>
          <div className={styles.modalIcones}>
          <FaRegUser />
            <Link to="/login">  Minha conta</Link> <br />
          </div>
        </div>
        <div>
          <div className={styles.modalIcones}>
            <FaHeartPulse />
            <Link to="/login">Assinatura</Link> <br />
          </div>
          
        </div>
        <div className='btn-sair'>
            <button className="btn-sairmodal" type='button' onClick={logout}>Sair</button>
        </div>
      </Modal>
    </header>

  )
}

export default DashboardHeader