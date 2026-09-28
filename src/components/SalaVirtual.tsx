import { useEffect, useRef, useState } from "react";
import { alunos, aulaDaTurma } from "../data/aulas.js";

type Aula = {
  id: string;
  nome: string;
  tema: string;
  resumo: string;
  pergunta: string;
  resposta: string;
  exemplo: string;
  x: number;
  y: number;
};

export default function SalaVirtual() {
  const [aula, setAula] = useState<Aula | null>(null);
  const [emMovimento, setEmMovimento] = useState(false);
  const [mostrarExemplo, setMostrarExemplo] = useState(false);

  const [posicao, setPosicao] = useState({
    x: 50,
    y: 27,
  });

  const temporizadores = useRef<number[]>([]);

  const paraTurma = aula?.id === "turma";

  function cancelarMovimento() {
    temporizadores.current.forEach((tempo) => {
      window.clearTimeout(tempo);
    });

    temporizadores.current = [];
  }

  useEffect(() => {
    return () => {
      temporizadores.current.forEach((tempo) => {
        window.clearTimeout(tempo);
      });
    };
  }, []);

  function selecionarAula(novaAula: Aula) {
    cancelarMovimento();

    setAula(novaAula);
    setMostrarExemplo(false);

    const reduzirMovimento = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduzirMovimento) {
      setPosicao({
        x: novaAula.x,
        y: novaAula.y,
      });

      setEmMovimento(false);
      return;
    }

    setEmMovimento(true);

    setPosicao((posicaoAtual) => ({
      x: 50,
      y: posicaoAtual.y,
    }));

    const movimentoVertical = window.setTimeout(() => {
      setPosicao({
        x: 50,
        y: novaAula.y,
      });
    }, 470);

    const movimentoHorizontal = window.setTimeout(() => {
      setPosicao({
        x: novaAula.x,
        y: novaAula.y,
      });
    }, 940);

    const fimDoMovimento = window.setTimeout(() => {
      setEmMovimento(false);
    }, 1410);

    temporizadores.current = [
      movimentoVertical,
      movimentoHorizontal,
      fimDoMovimento,
    ];
  }

  function reiniciar() {
    cancelarMovimento();

    setAula(null);
    setEmMovimento(false);
    setMostrarExemplo(false);

    setPosicao({
      x: 50,
      y: 27,
    });
  }

  let rotulo = "PRONTO PARA COMEÇAR";
  let titulo = "Quem vamos ajudar?";
  let status = "Selecione uma carteira ou escolha “Para a turma”.";
  let tituloQuadro = "Toda dúvida merece atenção.";
  let textoQuadro = "Escolha um aluno para iniciar o atendimento.";

  if (aula) {
    tituloQuadro = paraTurma
      ? aulaDaTurma.tituloQuadro
      : "Uma dúvida de cada vez.";

    textoQuadro = paraTurma
      ? aulaDaTurma.textoQuadro
      : `Agora: atendimento de ${aula.nome}.`;

    if (emMovimento) {
      rotulo = "EM DESLOCAMENTO";

      titulo = paraTurma
        ? "Vamos ao quadro"
        : `A caminho de ${aula.nome}`;

      status = paraTurma
        ? "Preparando uma explicação para todos."
        : "O HoloTutor vai até a carteira selecionada.";
    } else {
      rotulo = paraTurma
        ? "AULA PARA A TURMA"
        : "ATENDIMENTO INDIVIDUAL";

      titulo = paraTurma
        ? aula.tema
        : `Uma explicação para ${aula.nome}`;

      status = paraTurma
        ? "O mesmo conteúdo, compartilhado com todos."
        : "Cada aluno pode receber uma explicação no seu ritmo.";
    }

    if (mostrarExemplo) {
      status =
        "Uma nova abordagem para a mesma dúvida. Escolha outro aluno ou experimente o modo para a turma.";
    }
  }

  return (
    <section className="demo-section" id="demonstracao">
      <div className="wrap section">
        <div className="section-head">
          <div className="eyebrow">HoloTutor em ação</div>

          <h2>
            Diferentes
            <br />
            formas de aprender.
          </h2>
        </div>

        <p className="demo-intro">
          Explore dúvidas de matemática no atendimento individual ou acompanhe
          uma explicação para a turma inteira.
        </p>

        <div className="classroom-app">
          <div className="classroom-toolbar">
            <div>
              <strong>Sala de aula virtual</strong>
              <span>Matemática · demonstração</span>
            </div>

            <div
              className="mode-controls"
              role="group"
              aria-label="Modo de atendimento"
            >
              <button
                id="mode-individual"
                type="button"
                onClick={reiniciar}
                aria-pressed={!paraTurma}
              >
                Individual
              </button>

              <button
                id="mode-class"
                type="button"
                onClick={() => selecionarAula(aulaDaTurma)}
                aria-pressed={paraTurma}
              >
                Para a turma
              </button>
            </div>
          </div>

          <div className="demo-layout">
            <div className="room-shell">
              <div className="room-label">
                <span>SALA 01</span>

                <span id="room-mode">
                  {paraTurma
                    ? "EXPLICAÇÃO PARA A TURMA"
                    : "ATENDIMENTO INDIVIDUAL"}
                </span>
              </div>

              <div
                className="classroom"
                role="group"
                aria-label="Planta interativa da sala. Selecione uma carteira."
              >
                <div className="lesson-board">
                  <span id="board-label">
                    APRENDER, UM PASSO DE CADA VEZ
                  </span>

                  <strong id="board-title">{tituloQuadro}</strong>

                  <p id="board-text">{textoQuadro}</p>
                </div>

                <div className="aisle" aria-hidden="true" />

                {alunos.map((aluno) => (
                  <button
                    key={aluno.id}
                    type="button"
                    className="desk"
                    data-student={aluno.id}
                    aria-pressed={aula?.id === aluno.id}
                    onClick={() => selecionarAula(aluno)}
                  >
                    <span className="student-avatar">
                      {aluno.nome.charAt(0)}
                    </span>

                    <span className="student-info">
                      <strong>{aluno.nome}</strong>
                      <span>{aluno.tema}</span>
                    </span>

                    <span className="question-tag">
                      {aluno.resumo}
                    </span>

                    <span className="desk-state">
                      {aula?.id === aluno.id
                        ? emMovimento
                          ? "HoloTutor a caminho"
                          : "Em atendimento"
                        : "Chamar HoloTutor"}
                    </span>
                  </button>
                ))}

                <div
                  className="holo-token"
                  id="holo-token"
                  aria-hidden="true"
                  style={{
                    left: `${posicao.x}%`,
                    top: `${posicao.y}%`,
                    transition: aula ? undefined : "none",
                  }}
                >
                  <span>H</span>
                  <small>HOLOTUTOR</small>
                </div>
              </div>

              <div className="room-footer">
                <span>Selecione uma carteira para interagir</span>
                <span>Vista esquemática · 2D</span>
              </div>
            </div>

            <aside
              className="dialog-panel"
              aria-label="Atendimento do HoloTutor"
            >
              <div className="tutor-profile">
                <span className="tutor-avatar" aria-hidden="true">
                  H
                </span>

                <div>
                  <strong>HoloTutor</strong>
                  <span>Assistente de aprendizagem</span>
                </div>

                <span className="simulation-label">SIMULAÇÃO</span>
              </div>

              <div className="session-heading">
                <span id="session-label">{rotulo}</span>

                <h3 id="demo-title">{titulo}</h3>

                <p id="demo-status" role="status">
                  {status}
                </p>
              </div>

              <div
                className="conversation"
                id="conversation"
                aria-live="polite"
                aria-atomic="true"
              >
                {!aula && (
                  <div className="welcome-card">
                    <span>01 — ESCOLHA</span>
                    <p>Conheça a dúvida de um aluno.</p>

                    <span>02 — ACOMPANHE</span>
                    <p>Veja o HoloTutor se aproximar e explicar.</p>

                    <span>03 — APROFUNDE</span>
                    <p>Peça uma explicação mais simples.</p>
                  </div>
                )}

                {aula && !emMovimento && (
                  <>
                    <div className="bubble">
                      <strong>{aula.nome}</strong>

                      <p>
                        {mostrarExemplo
                          ? "Não entendi. Pode explicar de outro jeito?"
                          : aula.pergunta}
                      </p>
                    </div>

                    <div className="bubble tutor">
                      <strong>HoloTutor</strong>

                      <p>
                        {mostrarExemplo
                          ? aula.exemplo
                          : aula.resposta}
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="demo-controls">
                <button
                  id="demo-next"
                  type="button"
                  disabled={!aula || emMovimento || mostrarExemplo}
                  onClick={() => setMostrarExemplo(true)}
                >
                  {mostrarExemplo
                    ? "Explicação complementar exibida"
                    : "Não entendi · explicar melhor"}
                </button>

                <button
                  id="demo-reset"
                  type="button"
                  className="secondary"
                  onClick={reiniciar}
                >
                  Reiniciar demonstração
                </button>
              </div>
            </aside>
          </div>
        </div>

        <p className="demo-footnote">
          Demonstração conceitual com diálogos pré-definidos. O movimento é
          ilustrativo e não representa navegação real nem uma conversa com IA
          ao vivo.
        </p>
      </div>
    </section>
  );
}
