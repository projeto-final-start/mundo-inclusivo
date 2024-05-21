import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useState } from 'react'
import Modal from '../Modal/modal'


function Header() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <header className={styles.header}>
            <Link to="/">
                <span><img src="./src/assets/logo.png" alt="Logo" /></span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/tratamento">Tratamento</Link>
            </nav>            
            <button onClick={() => setOpenModal(true)}>Login/Cadastro</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <h3>
                    Para visualizar suas consultas e agendar, <br />
                    acesse sua conta:
                </h3>
                <div>
                    <div className={styles.modalIcones}>
                        <img src="./src/assets/icones/icone-paciente.svg" alt="" />
                        <h4>Cliente</h4>
                    </div>
                    <Link to="/login">Entrar</Link> <br />
                    <Link to="/cliente">Criar Conta</Link> 
                </div>
                <div>
                    <div className={styles.modalIcones}> 
                        <img src="./src/assets/icones/icone-profissional.svg" alt="" />
                        <h4>Profissional da Saúde</h4>
                    </div>    
                        <Link to="/login">Entrar</Link> <br />
                        <Link to="/cadastro-especialista">Criar Conta</Link> <br /> <br />                    
                </div>
            </Modal>
        </header>

    )
}

export default Header