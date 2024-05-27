import "./EncontrarEspecialista.css"
import Calendario from "../../components/Calendario/Calendario";



function EncontrarEspecialista() {
    return (
        <section>
            <div className="search-tag"><p> <img src="src/assets/icones/search.png" alt="" />  Procure por nome, especialidade, motivo...</p></div>
            <div className="pagina-especialista">

                <div className="card-especialista">
                    <img src="src/assets/foto-perfil.png" alt="" className="avatar"></img>
                    <h2>Confúcio Dos Santos</h2>
                    <p>Terapeuta - 24 anos de experiência - Pós-Graduado(a)</p>
                    <div className="tags">
                        <span className="tag">Ansiedade</span>
                        <span className="tag">Assertividade</span>
                        <span className="tag">Autoconhecimento</span>
                    </div>
                    <div className="description-especialista">
                        <p>“Olá, sou Terapeuta há vários anos e a minha abordagem é a Hipnoterapia Neurassistêmica. Especialista em ansiedade, medos, dores da alma... Atendo homens, mulheres e adolescentes que buscam se entender melhor e ter uma vida mais equilibrada e saudável. Se permita, te ajudarei nessa Transformação”</p>
                    </div>
                    <div className="ratings">
                        <div>
                            <span>⭐ 4.9 (20 comentários)</span><br />
                            <span>📅 115 Atendimentos</span>
                        </div>
                        <div className="price">R$ 100</div>
                    </div>
                    <div className="session">
                        <p>Sessão 50 min</p>
                    </div>
                </div>
                <div className="card-especialista"><Calendario></Calendario>
                    <button className="btn-agendar">Agendar</button>
                </div>
            </div>
            <div className="pagina-especialista">
                <div className="card-especialista">

                    <img src="src/assets/foto-perfil.png" alt="" className="avatar"></img>
                    <h2>Carolina Souza da Silva</h2>
                    <p>Psicologia - 3 anos de experiência - Graduado(a)</p>
                    <div className="tags">
                        <span className="tag">Ansiedade</span>
                        <span className="tag">Autoestima</span>
                        <span className="tag">Autoconhecimento</span>
                    </div>
                    <div className="description-especialista">
                        <p>"Seja muito bem vindo(a) !Sou psicóloga com certificação sobre o trauma e psicanalista. Já realizei
                            mais de duas mil sessões e meu propósito é seguir transformando vidas.Ansiedade? Depressão? Trauma? Nada disso te define.Te ofereço um tempo para cuidar dessas e outras questões 💕"</p>
                    </div>
                    <div className="ratings">
                        <div>
                            <span>⭐ 5.0 (33 comentários)</span><br />
                            <span>📅 365 Atendimentos</span>
                                   </div>
                        <div className="price">R$ 100</div>
                    </div>
                    <div className="session">
                        <p>Sessão 50 min</p>
                    </div>
                </div>
                <div className="card-especialista"><Calendario></Calendario>
                <button className="btn-agendar">Agendar</button>
                </div>
            </div>
        </section>
                    );
}

export default EncontrarEspecialista;
