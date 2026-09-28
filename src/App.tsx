import Cabecalho from "./components/Cabecalho";
import Apresentacao from "./components/Apresentacao";
import SalaVirtual from "./components/SalaVirtual";
import ComoFunciona from "./components/ComoFunciona";
import Empresa from "./components/Empresa";
import Rodape from "./components/Rodape";

// A ordem dos componentes abaixo é a ordem das seções na página.
export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip">
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo">
        <Apresentacao />
        <SalaVirtual />
        <ComoFunciona />
        <Empresa />
      </main>

      <Rodape />
    </>
  );
}