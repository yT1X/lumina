export default function Empresa() {
  return (
    <section className="wrap section" id="empresa">
      <div className="company">
        <div>
          <div className="eyebrow">Somos a Lúmina</div>

          <h2>
            Educação que se move
            <br />
            com o futuro.
          </h2>

          <p className="belief">
            Nossa ideia começa com uma pergunta: como manter o acesso à
            educação mesmo em um futuro com falta de professores?
          </p>
        </div>

        <div className="company-text">
          <p>
            A Lúmina Educação propõe soluções que aproximam tecnologia e
            aprendizagem. O HoloTutor é a expressão dessa ideia: um professor
            virtual capaz de ir até o estudante e acompanhar seu aprendizado.
          </p>

          <p>
            A falta de professores é um desafio global. Segundo o Relatório
            Global sobre Professores da UNESCO, publicado em 2024, o mundo
            precisará de cerca de 44 milhões de professores adicionais até
            2030 para alcançar a educação primária e secundária universal.
          </p>

          <p>
            A proposta do HoloTutor parte da possibilidade de que, no futuro,
            essa falta de profissionais se torne ainda mais grave. Nesse
            cenário, a tecnologia poderia ajudar a manter o acesso às aulas e
            assumir parte das funções de ensino quando não houver professores
            suficientes disponíveis.
          </p>

          <p className="source-note">
            Fonte: UNESCO — Global Report on Teachers, 2024.
          </p>
        </div>
      </div>

      <div className="closing">
        <p>
          Mais proximidade.
          <br />
          Mais caminhos para aprender.
        </p>

        <a href="#holotutor">
          Revisitar o produto <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
