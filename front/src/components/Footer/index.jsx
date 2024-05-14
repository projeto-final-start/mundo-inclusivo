import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>

            <ul>
                <p>Cliente</p>
                <li>Entrar</li>
                <li>Criar conta</li>
                <li>Instituições de apoio</li>
                <li>Faq</li>
            </ul>
            <ul>
                <p>Especialista</p>
                <li>Entrar</li>
                <li>Criar conta</li>
            </ul>
            <ul>
                <p>Empresa</p>
                <li>Sobre nós</li>
                <li>Blog</li>
            </ul>
            <ul>
                <h3>Contato</h3>
                <li>Email: voluntariamentefigma@gmail.com</li>
                <li>Telefone:(81)9000-0000</li>
            </ul>

        </footer >
    )
}

export default Footer