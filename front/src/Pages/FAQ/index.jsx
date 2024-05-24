import "./FAQ.css";
import React, { useState } from "react";

function FAQ() {
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
    </section>
  );
}

export default FAQ;





