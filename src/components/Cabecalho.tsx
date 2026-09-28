export default function Cabecalho() {
  return (
    <header>
      <nav className="wrap" aria-label="Navegação principal">
        <a className="brand" href="#" aria-label="Lúmina Educação, início">
          lúmina<span>.</span>
          <small>EDUCAÇÃO</small>
        </a>

        <div className="navlinks">
          <a href="#holotutor">HoloTutor</a>
          <a href="#demonstracao">Demonstração</a>
          <a href="#funcionamento">Como funciona</a>
          <a href="#empresa">A empresa</a>
        </div>
      </nav>
    </header>
  );
}
