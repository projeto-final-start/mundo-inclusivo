import "./QuemSomos.css";
import React, { useState } from "react";

function QuemSomos() {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const perguntas = [
    {
      id: 1,
      title: "Eu pago pelo agendamento?",
      description:
        "O agendamento assim como a utilização da plataforma ou aplicativo Mundo Inclusivo não possui custo, pagamentos só serão realizados por consultas ou teleconsultas particulares.",
    },
    {
      id: 2,
      title: "Posso agendar consulta pelo meu convênio?",
      description:
        "Sim. Existem profissionais de diversos convênios cadastrados no Mundo Inclusivo, basta escolher qual seu convênio quando for realizar uma busca e aparecerá uma lista de especialistas na sequência. Se você não encontrou seu convênio em nossa lista, não se preocupe. Envie uma solicitação para nosso e-mail: [E-mail da empresa] informando o nome do seu convênio e plano de saúde para que possamos analisar e fazer a inclusão.",
    },
    {
      id: 3,
      title: "Quais informações preciso fornecer para fazer meu agendamento?",
      description:
        "Você precisa preencher nome completo, e-mail, telefone, data de nascimento e gênero para criar uma conta no Mundo Inclusivo e realizar um agendamento.",
    },
    {
      id: 4,
      title: "É seguro marcar um agendamento online?",
      description:
        "Sim, é extremamente seguro. O Mundo Inclusivo segue padrões de segurança HIIPA e está atualizado quanto a LGPD, além de diversas proteções internas que garantem a segurança de seus dados e sua consulta.",
    },
    {
      id: 5,
      title: "Posso marcar consultas para a minha família?",
      description:
        "Pode sim, no Mundo Inclusivo é possível incluir dependentes e agendar consultas e teleconsultas para os mesmos.",
    },
  ];

  return (
    <section>
      <div className="container-quem-somos">
        <div className="introducao bg-introducao">
          <div className="info">
            <h1 className="main-title">Conheça o Mundo Inclusivo</h1>
            <h2 className="subtitle">
              A melhor plataforma para consultas online.
            </h2>
          </div>
          <div className="info-fundo">
            <img src="/src/assets/img-quem-somos.svg" alt="Imagem Quem Somos" />
          </div>
        </div>

        <div className="sobre">
          <div className="informacoes">
            <div className="especialidades">
              <h3 className="section-title">Diversas especialidades</h3>
              <p>
                Encontre o especialista que precisa em poucos cliques e agende
                Online. Os profissionais estarão prontos para te atender e você
                pode ver as avaliações de outros pacientes. Também é possível
                avaliar o atendimento após passar pela consulta ou Teleconsulta.
                Simples, prático e fácil!
              </p>
            </div>
            <div className="experiencias">
              <h3 className="section-title">Experiência Online</h3>

              <p className="text-quem-somos-2">
                Agende online Teleconsultas e acesse o link enviado instantes
                antes do horário marcado para realizar seu atendimento por
                vídeo. Tudo isso 100% online, com excelente qualidade de áudio e
                imagem, sem sair de casa!
              </p>
            </div>
          </div>
          <div className="informacoes-fundo">
            <img
              src="/src/assets/img-quem-somos-2.svg"
              alt="Imagem Quem Somos 2"
            />
          </div>
        </div>

        <div className="consultas">
          <h3 className="section-title text-center">
            Marque uma consulta, veja como é simples!
          </h3>
          <div className="passo-a-passo">
            <div className="passo">
              <h3 className="section-title">Faça sua busca</h3>
              <p>
                Na barra de busca selecione a especialidade ou exame, localidade
                e convênio desejado. Agora é só clicar no botão buscar.
              </p>
            </div>
            <div className="passo">
              <h3 className="section-title">Escolha o profissional</h3>
              <p>
                Você verá uma lista de profissionais e poderá analisar as
                avaliações, acessar o perfil de quantos profissionais quiser até
                fazer a sua escolha.
              </p>
            </div>
            <div className="passo">
              <h3 className="section-title">Agende com tranquilidade</h3>
              <p>
                Digite seu usuário e senha ou caso seja novo por aqui realize
                seu cadastro, é bem simples e rápido. Todo o seu histórico de
                consultas estará disponível na área do paciente de maneira
                segura. Logo após finalize agendamento.
              </p>
            </div>
            <div className="passo">
              <h3 className="section-title">Aguarde a confirmação</h3>
              <p>
                Em alguns instantes você receberá a confirmação do agendamento
              </p>
            </div>
          </div>
          <div className="footer-consultas">
            <img
              src="/src/assets/img-quem-somos-3.svg"
              alt="Imagem Quem Somos 3"
            />
          </div>

          <div className="passo-a-passo">
            <div className="passo">
              <h3 className="section-title">Agendas 24 x7</h3>
              <p>
                Esqueça o horário comercial! No Mundo Inclusivo você faz o
                agendamento quando quiser.
              </p>
            </div>

            <div className="passo">
              <h3 className="section-title">Avaliações</h3>
              <p>
                Veja as avaliações, comentários e pontos positivos do
                atendimento dos profissionais.
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="faq">
          <h3 className="section-title text-center">Perguntas Frequentes</h3>

          <div className="perguntas">
            {perguntas.map((pergunta, index) => (
              <div key={pergunta.id}>
                <button
                  className={`accordion ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => togglePanel(index)}
                >
                  {pergunta.title}
                </button>
                <div
                  className="panel"
                  style={{ display: activeIndex === index ? "block" : "none" }}
                >
                  <p>{pergunta.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuemSomos;
