// Esta seção pode ser editada como HTML.
// No TSX, usamos className no lugar de class.

export default function Empresa() {
  return (
    <section className="wrap section" id="empresa">
      <div className="company">
        <div>
          <div className="eyebrow">
            Somos a Lúmina
          </div>

          <h2>
            Educação que se move
            <br />
            com o futuro.
          </h2>

          <p className="belief">
            Nossa ideia começa com uma pergunta: como ampliar o apoio a cada
            aluno em uma sala de aula?
          </p>
        </div>

        <div className="company-text">
          <p>
            A Lúmina Educação propõe soluções que aproximam tecnologia e
            aprendizagem. O HoloTutor é a expressão dessa ideia: apoio
            individual que vai até o estudante.
          </p>

          <p>
            A falta de professores é um desafio global. Segundo o Relatório
            Global sobre Professores da UNESCO, publicado em 2024, o mundo
            precisará de cerca de 44 milhões de professores adicionais até
            2030 para alcançar a educação primária e secundária universal.
            Diante desse cenário, o HoloTutor explora como a inteligência
            artificial pode apoiar educadores e ampliar o acompanhamento
            individual dos alunos.
          </p>

          <p>
            A proposta prevê acompanhamento de educadores: a tecnologia
            oferece apoio, enquanto a orientação pedagógica e as decisões
            sobre a aprendizagem permanecem com pessoas.
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
          Revisitar o produto
          <span aria-hidden="true"> ↗</span>
        </a>
      </div>
    </section>
  );
}