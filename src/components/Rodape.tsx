// Esta seção pode ser editada como HTML.
// No TSX, usamos className no lugar de class.

export default function Rodape() {
  return (
    <footer>
      <div className="wrap footer-inner">
        <a
          className="brand"
          href="#"
          aria-label="Voltar ao início"
        >
          lúmina<span>.</span>
        </a>

        <p>
          Lúmina Educação · HoloTutor · Empresa e produto fictícios.
          <br />
          Apresentação conceitual, sem produto comercial ou desempenho
          comprovado.
        </p>
      </div>
    </footer>
  );
}