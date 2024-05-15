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

                <Link to="Tratamento">Tratamento</Link>       
                <Link to="Cadastro-especialista">Cadastro</Link>            

            </nav>
            <button onClick={() => setOpenModal(true)}>Login/Cadastro</button>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <h3>
                    Para visualizar suas consultas e agendar, <br />
                    acesse sua conta:
                </h3>
                <ul>
                    <h4>Pacientes</h4>
                    <Link to="/login">Entrar</Link> <br /> 
                    <Link to="/cadastro">Criar Conta</Link> <br /> <br />
                </ul>
                <ul>
                    <h4>Profissional da Saúde</h4>
                    <Link to="/login">Entrar</Link> <br /> 
                    <Link to="/cadastro-profissional">Criar Conta</Link> <br /> <br />
                </ul>
            </Modal>
        </header>
        
    )
}

export default Header