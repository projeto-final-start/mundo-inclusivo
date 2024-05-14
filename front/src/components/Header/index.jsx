import {Link} from 'react-router-dom'
import styles from './Header.module.css'

function Header () {
    return (
        <header className={styles.header}>
            <Link to="/">
            <span><img src="./src/assets/logo.png" alt="Logo" /></span>
            </Link>            
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contato">Contato</Link>
                <Link to="Tratamento">Tratamento</Link>                
            </nav>
                <button>Login/Cadastro</button>
        </header>
    )
}

export default Header