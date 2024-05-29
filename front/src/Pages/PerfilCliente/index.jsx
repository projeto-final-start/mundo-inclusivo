import { Link } from "react-router-dom"
import "./PerfilCliente.css"

function PerfilCliente() {
    return (
        <section>
            <div className="saudacao-cliente">
                <h1>Boa tarde, Gabrielle Nascimento!</h1>
            </div>

            <div className="agendamento-cliente">
                <ul>
                    <li>
                        <h3>
                            Agende sua sessão
                        </h3>
                    </li>
                    <li>
                        <p>
                            Escontre especialistas utilizando a busca
                        </p>
                    </li>
                </ul>
                <Link to="/encontrarespecialista" className="btn-perfil-cliente">Encontrar especialista</Link>
            </div>
            <div className="imagem-cliente">
                <img src="/src/assets/img-perfil-cliente.svg" alt="" />
            </div>

        </section>
    )
}

export default PerfilCliente
