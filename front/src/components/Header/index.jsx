import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'
import { useState } from 'react'
import Modal from '../Modal/modal'
import { FaHandHoldingHeart } from "react-icons/fa6"
import { FaHeartPulse } from "react-icons/fa6"



function Header() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <header className={styles.header}>
            <Link to="/">
                <span><img src="./src/assets/logo.png" alt="Logo" /></span>
            </Link>
            <nav>
                 <NavLink to="/">Home</NavLink> {/*Testando navlink para estilizar caso não de apagar import do navlink e retornar para link */}
                <NavLink to="/contato">Contato</NavLink>
                <NavLink to="/tratamento">Tratamento</NavLink>
                <NavLink to="/perfilcliente">Perfil Cliente Teste</NavLink>
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
            </Modal>
        </header>

    )
}

export default Header