import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6"

function Footer() {
    return (
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h2>Redes</h2>
                    <p>Siga-nos</p>

                    <div id="footer_social_media">
                        <a href="https://www.facebook.com/" target="_blank" className="footer-link" id="facebook"> <FaFacebookF /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer-link" id="instagram"><FaInstagram /></a>
                        <a href="https://github.com/projeto-final-start/projeto-final" target="_blank" className="footer-link" id="whatsapp"><FaSquareGithub /></a>
                    </div>
                </div>
                <ul className="footer-list">
                    <li>
                        <h3>Cliente</h3>
                    </li>
                    <li>
                        <Link to="/login" className="footer-link">Entrar</Link>
                    </li>
                    <li>
                        <Link to="/cliente" className="footer-link">Criar Conta</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Especialista</h3>
                    </li>
                    <li>
                        <Link to="/login" className="footer-link">Entrar</Link>
                    </li>
                    <li>
                        <Link to="/cadastroespecialista" className="footer-link">Criar Conta</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Ajuda</h3>
                    </li>
                    <li>
                        <Link to="/faq" className="footer-link">Faq</Link>
                    </li>
                    <li>
                        <Link to="/termos" className="footer-link">Termos de Uso</Link>
                    </li>
                    <li>
                        <Link to="/politicaprivacidade" className="footer-link">Política de privacidade</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Empresa</h3>
                    </li>
                    <li>
                        <Link to="/quemsomos" className="footer-link">Quem Somos</Link>
                    </li>
                    <li>
                        <Link to="/formapagamento" className="footer-link">Forma de Pagamento</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h1>Contatos</h1>
                    </li>
                    <li>
                        <a href="mailto:voluntariamentefigma@gmail.com" className="footer-link">Entre em contato.</a>
                    </li>
                    <li className="footer-link">telefone:(81)90000-0000</li>
                </ul>
            </div>

            <div id="footer_copyright">
                © 2024 Mundo Inclusivo. Todos os direitos reservados
            </div>
        </footer >

    )
}

export default Footer