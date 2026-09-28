export default function ComoFunciona() {
  return (
    <section className="wrap section" id="funcionamento">
      <div className="section-head">
        <div className="eyebrow">Como funcionaria</div>

        <h2>
          Uma nova forma de estar
          <br />
          perto de quem aprende.
        </h2>
      </div>

      <div className="steps">
        <article className="step">
          <span className="number">01</span>
          <h3>Vai até o aluno</h3>

          <p>
            A base circular permitiria levar o HoloTutor até a carteira do
            estudante, aproximando a explicação de quem precisa de ajuda.
          </p>
        </article>

        <article className="step">
          <span className="number">02</span>
          <h3>Entende a dúvida</h3>

          <p>
            Por meio de uma conversa, a inteligência artificial buscaria
            identificar a dificuldade e adaptar a explicação ao nível do aluno.
          </p>
        </article>

        <article className="step">
          <span className="number">03</span>
          <h3>Explica de outro jeito</h3>

          <p>
            Exemplos e orientações passo a passo ajudariam o estudante a
            praticar e compreender o raciocínio, com supervisão pedagógica.
          </p>
        </article>
      </div>
    </section>
  );
}
