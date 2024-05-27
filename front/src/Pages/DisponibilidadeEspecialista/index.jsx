import { Link } from "react-router-dom"
import "./Disponibilidade.css"

function DisponibilidadeEspecialista() {
    return (
        <section>
            <div className="saudacao-cliente">
                <h1>Gerenciar Disponibilidades</h1>
                <Link to="/" className="btn-perfil-cliente">Encontrar especialista</Link>
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
                
            </div>
            <div className="imagem-cliente">
                <img src="/src/assets/img-perfil-cliente.svg" alt="" />
            </div>

        </section>
    )
}

export default DisponibilidadeEspecialista