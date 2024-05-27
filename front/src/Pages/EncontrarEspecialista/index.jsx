import "./EncontrarEspecialista.css"
import Calendario from "../../components/Calendario/Calendario";


function EncontrarEspecialista() {
    return (
        <section>
            <div className="profissional-info-container-horizontal">
                <div className="card-especialista">
                    <div className="titulo-profissional-imagem">
                        <div>
                            <img src="src/assets/foto-perfil.png" alt="" />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="card-calendario"><Calendario /></div>

        </section >
    )
}


export default EncontrarEspecialista;