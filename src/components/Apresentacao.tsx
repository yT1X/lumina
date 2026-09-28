export default function Apresentacao() {
  return (
    <>
      <section className="hero wrap">
        <div className="eyebrow">
          Novas possibilidades para aprender
        </div>

        <h1>
          O conhecimento
          <br />
          vai <em>até você.</em>
        </h1>

        <div className="intro-row">
          <p>
            Um professor holográfico com inteligência artificial, criado para
            circular pela sala e ajudar cada aluno no seu próprio ritmo.
          </p>

          <a href="#holotutor" className="button">
            Conheça o HoloTutor
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="product" id="holotutor">
        <div className="wrap product-inner">
          <div className="product-top">
            <div className="eyebrow">
              Tecnologia com propósito
            </div>

            <span className="tag">
              Conheça o produto
            </span>
          </div>

          <div className="product-title">
            Holo<span>Tutor.</span>
          </div>

          <div className="product-desc">
            <h2>
              Presença na sala.
              <br />
              Atenção em cada dúvida.
            </h2>

            <p>
              A proposta reúne um professor virtual projetado como holograma e
              uma base redonda móvel. Enquanto a base se desloca pela sala, a
              inteligência artificial conversa com os estudantes, explica
              conteúdos e orienta atividades individualmente.
            </p>
          </div>

          <div className="specs">
            <div className="spec">
              <small>01 / INTERAÇÃO</small>

              <strong>
                Professor em holograma
              </strong>
            </div>

            <div className="spec">
              <small>02 / MOBILIDADE</small>

              <strong>
                Base circular móvel
              </strong>
            </div>

            <div className="spec">
              <small>03 / APRENDIZAGEM</small>

              <strong>
                Apoio individual com IA
              </strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}