import './PerfilCompleto.css'

function PerfilCompleto() {
  return (
    <div className="container">
      <header className="header">
        <div className="perfil">
          <img src="src/assets/fotoperfilcompleto.jpg" alt="Perfil" className="perfil-img" />
          <div className="perfil-info">
            <h1>Jenifer Soares Bezerra</h1>
            <h2>Psicóloga</h2>
            <p>As nossas sessões são voltadas para trabalhar seu corpo e mente para lidar com situações de raiva, stress, insônia e falta de foco. Trazendo através do Yoga, flexibilidade para seu corpo físico e mental, além de melhorar seu sistema imunológico. Também atuo com Reiki entre outras terapias.</p>
            <p>⭐ Avaliações: (5/5)</p>
            <p>✉ 45 Atendimentos</p>
            <p>Sessão 50 min</p>
            <p>R$ 60,00</p>
          </div>
        </div>
        <div className="agendar">
          <table>
            <thead>
              <tr>
                <th>Seg 27/05</th>
                <th>Ter 28/05</th>
                <th>Qua 29/05</th>
                <th>Qui 30/05</th>
                <th>Sex 31/05</th>
                <th>Sáb 01/06</th>
                <th>Dom 02/06</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00</td>
                <td>9:00</td>
                <td>9:00</td>
                <td>9:00</td>
                <td>9:00</td>
                <td>9:00</td>
                <td>9:00</td>
              </tr>
              <tr>
                <td>10:00</td>
                <td>10:00</td>
                <td>10:00</td>
                <td>10:00</td>
                <td>10:00</td>
                <td>10:00</td>
                <td>10:00</td>
              </tr>
              <tr>
                <td>11:00</td>
                <td>11:00</td>
                <td>11:00</td>
                <td>11:00</td>
                <td>11:00</td>
                <td>11:00</td>
                <td>11:00</td>
              </tr>
              <tr>
                <td>12:00</td>
                <td>12:00</td>
                <td>12:00</td>
                <td>12:00</td>
                <td>12:00</td>
                <td>12:00</td>
                <td>12:00</td>
              </tr>
              <tr>
                <td>13:00</td>
                <td>13:00</td>
                <td>13:00</td>
                <td>13:00</td>
                <td>13:00</td>
                <td>13:00</td>
                <td>13:00</td>
              </tr>
              <tr>
                <td>14:00</td>
                <td>14:00</td>
                <td>14:00</td>
                <td>14:00</td>
                <td>14:00</td>
                <td>14:00</td>
                <td>14:00</td>
              </tr>
              <tr>
                <td>15:00</td>
                <td>15:00</td>
                <td>15:00</td>
                <td>15:00</td>
                <td>15:00</td>
                <td>15:00</td>
                <td>15:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>

      <main>
        <section className="perfil-detalhes">
          <h2>Perfil</h2>
          <div className="experiência">
            <h3>EXPERIÊNCIA</h3>
            <ul>
              <li>Ansiedade</li>
              <li>Burnout</li>
              <li>Dor</li>
              <li>Estresse</li>
              <li>Excesso de Peso</li>
              <li>Falta de Desejo</li>
              <li>Falta de Prazer</li>
              <li>Meditação/Mindfulness</li>
            </ul>
            <hr />
          </div>
          <div className="especialidades">
            <h3>ESPECIALIDADES</h3>
            <ul>
              <li>Meditação</li>
              <li>Terapia de Florais</li>
              <li>Yoga</li>
            </ul>
            <hr />
          </div>
          <div className="formação">
            <h3>FORMAÇÃO</h3>
            <p>Curso: Yoga - Conclusão em 2009</p>
            <p>Curso: Psicologia - Conclusão em 2011</p>
            <p>Graduação - Pedagogia - UNISA - Conclusão em 2011</p>
            <p>Curso - Terapia Floral - IbratH - Conclusão em 2024</p>
          </div>
          <hr />
          <div className="descrição-pessoal">
            <h3>Descrição Pessoal</h3>
            <p>Sou formada em pedagogia com especialização em neurociências e psicopedagogia clínica. Encontrei o caminho do Yoga em 2006 e me formei em 2009. Estou no caminho das terapias desde 2005, sou Mestre em Reiki e formada em Yoga, com
              foco em Yogaterapia e Meditação. Também atuo com florais de bach. Trabalho com técnicas naturais para limpezas energéticas. Além disso, conduzo meditação e também processos de relaxamentos para melhorar a qualidade
              do sono. Agende sua sessão. </p>
          </div>
          <hr />
        </section>

        <section className="reviews">
          <h2>Minhas avaliações</h2>
          <p>Realize uma sessão com Jenifer Soares Bezerra para deixar uma avaliação</p>


          <Link className="reviews-button" to="/formapagamento">Agendar Sessão</Link>
          
          <div className="review-cards">
            <div className="review-card">
              <p>Ótima profissional...</p>
            </div>
            <div className="review-card">
              <p>Excelente atendimento...</p>
            </div>
            <div className="review-card">
              <p>Recomendo a todos...</p>
            </div>
          </div>
        </section >
      </main >
    </div >
  );
}

export default PerfilCompleto;
