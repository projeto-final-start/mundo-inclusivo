import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaSquareGithub } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa6"

function Footer() {
    return (
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h1>Redes</h1>
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
                        <Link to="/cadastro-paciente" className="footer-link">Criar Conta</Link>
                    </li>
                    <li>
                        <Link href="#" className="footer-link">Especialistas</Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">App</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Desktop</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Cloud</a>
                    </li>                    
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Products</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">App</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Desktop</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Cloud</a>
                    </li>                    
                </ul>
                <div id="footer_subscribe">
                    <h3>Subscribe</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div id="input_group">
                        <input type="email" id="email" />
                        <button>
                            <FaEnvelope />
                        </button>
                    </div>
                </div>
            </div>

            <div id="footer_copyright">
                © 2024 Mundo Inclusivo. Todos os direitos reservados
            </div>
        </footer >

    )
}

export default Footer