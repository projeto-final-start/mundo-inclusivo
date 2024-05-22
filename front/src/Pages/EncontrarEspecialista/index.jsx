import "./EncontrarEspecialista.css"
import Calendario from "../../components/Calendario/Calendario";


function EncontrarEspecialista() {
    return (
        <section>
            <div className="container-encontre-especialistas">
                <div className="card-especialista">
                    <img src="/src/assets/perfil.png" alt="" />
                    <div className="lista-nome">
                        <ul>
                            <li>
                                <h2>Confúcio Dos Santos</h2> <br />
                            </li>
                            <li>
                                <p>
                                    Terapeuta - 24 anos de experiência - Pós-Graduado
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="lista-habilidades">
                        <ul>
                            <li>
                                <p>Ansiedade</p>
                            </li>
                            <li>
                                <p>Assetividade</p>
                            </li>
                            <li>
                                <p>Autoconhecimento</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card-calendario"><Calendario /></div>
            </div>
        </section>
    )
}


export default EncontrarEspecialista;