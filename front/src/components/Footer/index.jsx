import "./Footer.css"
import { FaFacebookF } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa6"

function Footer() {
    return (
        <footer>
            <div id="footer_content">
                <div id="footer_contacts">
                    <h1>Logo</h1>
                    <p>It's all about your dreams</p>

                    <div id="footer_social_media">
                        <a href="#" className="footer-link" id="facebook"> <FaFacebookF /></a>
                        <a href="#" className="footer-link" id="instagram"><FaInstagram /></a>
                        <a href="#" className="footer-link" id="whatsapp"><FaWhatsapp /></a>
                    </div>
                </div>
                <ul className="footer-list">
                    <li>
                        <h3>Blog</h3>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Tech</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Adventures</a>
                    </li>
                    <li>
                        <a href="#" className="footer-link">Music</a>
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