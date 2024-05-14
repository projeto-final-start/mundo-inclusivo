import styles from './Header.module.css'

function Header () {
    return (
        <header className={styles.header}>
            {/* <span>Sintonia Mental</span> */}
            <span><img src="./src/assets/logo.png" alt="Logo" /></span>
            <nav>
                <a href="">Home</a>
                <a href="">Contato</a>
                <a href="">Tratamento</a>                
            </nav>
                <button>Login/Cadastro</button>
                

        </header>
    )
}

export default Header