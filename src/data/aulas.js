export const alunos = [
  {
    id: "ana",
    nome: "Ana",
    tema: "Frações",
    resumo: "Como somar 1/2 + 1/4?",
    pergunta: "Como somar 1/2 + 1/4?",
    resposta:
      "Para somar, escrevemos as frações com o mesmo denominador. Como 1/2 = 2/4, temos 2/4 + 1/4 = 3/4.",
    exemplo:
      "Imagine uma pizza dividida em 4 partes iguais. Metade da pizza são 2 partes. Somando mais 1 parte, ficamos com 3 das 4 partes: 3/4.",
    x: 25,
    y: 60,
  },
  {
    id: "lucas",
    nome: "Lucas",
    tema: "Equações",
    resumo: "Como resolver 2x + 6 = 14?",
    pergunta: "Como resolver 2x + 6 = 14?",
    resposta:
      "Subtraímos 6 dos dois lados: 2x = 8. Depois, dividimos os dois lados por 2: x = 4. Conferindo: 2 × 4 + 6 = 14.",
    exemplo:
      "Duas caixas têm a mesma quantidade de lápis. Juntas com 6 lápis soltos, somam 14. Tirando os 6 soltos, sobram 8 nas duas caixas. Então cada caixa tem 4 lápis: x = 4.",
    x: 75,
    y: 60,
  },
  {
    id: "bia",
    nome: "Bia",
    tema: "Porcentagem",
    resumo: "Quanto é 20% de 150?",
    pergunta: "Quanto é 20% de 150?",
    resposta:
      "20% significa 20 de cada 100, ou 0,20. Multiplicamos: 0,20 × 150 = 30. Portanto, 20% de 150 é 30.",
    exemplo:
      "Podemos começar por 10%: basta dividir 150 por 10, obtendo 15. Como 20% é o dobro de 10%, fazemos 15 + 15 = 30.",
    x: 25,
    y: 94,
  },
  {
    id: "pedro",
    nome: "Pedro",
    tema: "Geometria",
    resumo: "Qual a área de um retângulo?",
    pergunta: "Qual é a área de um retângulo de 6 m por 4 m?",
    resposta:
      "Multiplicamos a base pela altura: A = 6 × 4 = 24 m². Usamos metros quadrados porque estamos medindo uma superfície.",
    exemplo:
      "Imagine cobrir esse retângulo com quadrados de 1 m de lado. Cabem 6 quadrados em cada fileira e 4 fileiras ao todo: 6 × 4 = 24 quadrados de 1 m².",
    x: 75,
    y: 94,
  },
];

export const aulaDaTurma = {
  id: "turma",
  nome: "Para toda a turma",
  tema: "Ordem das operações",
  tituloQuadro: "Qual operação vem primeiro?",
  textoQuadro: "3 + 2 × 4 = 3 + 8 = 11",
  resumo: "Por que 3 + 2 × 4 é igual a 11, e não a 20?",
  pergunta: "Por que 3 + 2 × 4 é igual a 11, e não a 20?",
  resposta:
    "Nessa expressão, fazemos a multiplicação antes da adição: 2 × 4 = 8. Depois, somamos 3 + 8 = 11. Com parênteses em (3 + 2) × 4, somamos primeiro e o resultado é 20.",
  exemplo:
    "Pense em 3 lápis soltos e 2 caixas com 4 lápis cada. As caixas têm 8 lápis; com os 3 soltos, são 11. Já (3 + 2) × 4 representa 5 grupos de 4, totalizando 20.",
  x: 50,
  y: 27,
};
