import React from 'react';
import "./PerfilCompleto.css";

function PerfilCompleto() {
  return (
    <div className="container-perfil-completo">
      <div className="header-perfil-completo">
        <h1>Jenifer Soares Bezerra</h1>
        <p>Terapeuta</p>
      </div>
      <div className="agendamento">
        <table>
          <thead>
            <tr>
              <th>QUI</th>
              <th>SEX</th>
              <th>SAB</th>
              <th>DOM</th>
              <th>SEG</th>
            </tr>
            <tr>
              <th>09 MAI</th>
              <th>10 MAI</th>
              <th>11 MAI</th>
              <th>12 MAI</th>
              <th>13 MAI</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td>11:00</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td>11:30</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td>12:00</td>
            </tr>
            <tr>
              <td>12:30</td>
              <td></td>
              <td></td>
              <td></td>
              <td>12:30</td>
            </tr>
            <tr>
              <td>13:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td>13:00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="info-perfil-completo">
        <p>
          As nossas sessões são voltadas para trabalhar seu corpo e mente para
          lidar com situações de raiva, stress, insonia e falta de foco.
          Trazendo através do Yoga, flexibilidade para seu corpo físico e
          mental, além de melhorar seu sistema imunológico. Também atuo com
          Reiki entre outras terapias
        </p>
        <div className="avaliacao-perfil-completo">
          <span>5 (5 comentários)</span>
          <span>45 @tendimentos</span>
        </div>
        <div className="detalhes-perfil-completo">
          <span>Sessão 50 min</span>
          <span>R$ 60</span>
        </div>
      </div>
      <div className="analisador-perfil">
        <h2>Perfil</h2>
        <hr />
        <h3>EXPERIÊNCIA</h3>
        <ul>
          <li>Ansiedade</li>
          <li>Burnout</li>
          <li>Dor</li>
          <li>Estresse</li>
          <li>Excesso de peso</li>
          <li>Falta de Desejo</li>
          <li>Falta de Prazer</li>
          <li>Meditação / Mindfulness</li>
        </ul>
        <hr />
        <h3>ESPECIALIDADES</h3>
        <ul>
          <li>Meditação</li>
          <li>TERAPIA DE Florais</li>
          <li>Yoga</li>
        </ul>
        <hr />
        <h3>FORMAÇÃO</h3>
        <ul>
          <li>Curso de Yoga -Conclusão em 2009</li>
          <li>Graduação - Pedagogia - UNISA - Conclusão em 2011</li>
          <li>Curso - Terapia Floral - IbratH - Conclusão em 2024</li>
        </ul>
        <hr />
        <h3>DESCRIÇÃO PESSOAL</h3>
        <ul>
          <li>
            Sou formada em pedagogia com especialização em neurociências e
            psicopedagogia clínica. Encontrei o caminho do Yoga em 2006 e me
            formei em 2009. Estou no caminho das terapias desde 2005, sou Mestre
            em Reiki e formada em Yoga, com foco em Yogaterapia e Meditação.
            Também atuo com florais de bach. Trabalho com sagrado feminino e com
            mulheres que desejam despertar suas potencialidades, melhorar sua
            energia sexual e iniciar com a técnica de Yoni Eggs. Também com
            técnicas naturais para limpezas energéticas. Além disso, conduzo
            meditação e também processos de relaxamentos para melhorar a
            qualidade do sono. Agende sua sessão.
          </li>
        </ul>
        <hr />
        <h3>POLÍTICA DE REMARCAÇÃO</h3>
        <ul>
            <li>Remarcações podem ocorrer até 1 hora antes sem custo adicional</li>
        </ul>
        <div className="container-avaliacoes">
      <h1>Minhas Avaliações</h1>
      <p>Baseado em 5 opiniões</p>
      <div className="avaliacoes-perfil">
        <div className="analise-perfil">
          <h2>Daniela</h2>
          <p>
            Daniela é atenciosa, sensível e conduz a sessão de forma muito gentil. A prática com ela me ajudou a me fazer mais presente e ter mais clareza mental e me lembrar como é bom e importante me proporcionar esses momentos de autocuidado.
          </p>
          <p>Juliane - Maio, 08 2024</p>
        </div>
        <div className="analise-perfil">
          <h2>Francielly</h2>
          <p>
            Super recomendo. Profissional super empática, olha com cuidado para cada questão e te faz sentir única e especial em cada sessão.
          </p>
          <p>Francielly - Maio, 03 2024</p>
        </div>
        <div className="analise-perfil">
          <h2>Fabíola</h2>
          <p>Excelente profissional! Eu recomendo com certeza!</p>
          <p>Fabíola - Abril, 30 2024</p>
        </div>
      </div>
      <button>Agendar Sessão</button>
    </div>
      </div>
    </div>
  );
}

export default PerfilCompleto;
