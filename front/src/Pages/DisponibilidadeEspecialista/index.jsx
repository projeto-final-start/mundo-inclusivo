import { Link } from "react-router-dom"
import "./Disponibilidade.css"


function DisponibilidadeEspecialista() {
    return (
        <section>
            <div className="saudacao-disp">
                <h1>Gerenciar Disponibilidades</h1>
                <Link to="/" className="btn-perfil-disp">Adicionar</Link>
            </div>

            <div className="agendamento-disp">
                <ul>
                    <li>
                        <h3>
                            DE: SEXTA-FEIRA, 10 DE MAIO DE 2024
                            <p></p>
                            ATÉ: QUARTA-FEIRA, 5 DE JUNHO DE 2024
                        </h3>
                    </li>
                </ul>
                <div className="acoes">
                            <button className="editar-btn">✏️</button>
                            <button className="excluir-btn" onClick={() => removerDisponibilidade(index)}>❌</button>
                        </div>
            </div>
            <div className="imagem-disp">
                <img src="/src/assets/FOTODISPESP.svg" alt="" />
            </div>

        </section>
    )
}

export default DisponibilidadeEspecialista
