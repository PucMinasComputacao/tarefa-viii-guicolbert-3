const catalogo = [
  {
    id: 1,
    titulo: "Inception",
    tipo: "filme",
    ano: 2010,
    generos: ["ação", "ficção"],
    nota: 9,
    assistido: true
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime"],
    nota: 10,
    assistido: true
  },
  {
    id: 3,
    titulo: "Interstellar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção"],
    nota: 8.5,
    assistido: false
  },
  {
    id: 4,
    titulo: "The Office",
    tipo: "serie",
    ano: 2005,
    generos: ["comédia"],
    nota: 8.7,
    assistido: true
  },
  {
    id: 5,
    titulo: "Avatar",
    tipo: "filme",
    ano: 2009,
    generos: ["aventura", "ação"],
    nota: 7.8,
    assistido: false
  },
  {
    id: 6,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["terror", "ficção"],
    nota: 8.9,
    assistido: false
  }
];
console.log("Catálogo completo:", catalogo);

console.log("Primeiro título:", catalogo[0].titulo);

console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

if (catalogo[2].generos.length > 1) {
  console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
  console.log("O terceiro item não possui segundo gênero.");
}

console.log("\nLista de itens:");
catalogo.forEach(item => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("\nTítulos em maiúsculo:", titulosEmCaixaAlta);
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log("\nQuantidade de não assistidos:", naoAssistidos.length);
const melhorItem = catalogo.find(item => item.nota >= 9);

if (melhorItem) {
  console.log("\nPrimeiro com nota >= 9:", melhorItem.titulo, "-", melhorItem.nota);
} else {
  console.log("\nNenhum item com nota >= 9");
}

const somaNotas = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos = somaAssistidos / assistidos.length;

console.log("\nMédia geral:", mediaGeral.toFixed(2));
console.log("Média dos assistidos:", mediaAssistidos.toFixed(2));
const existeAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);
console.log("\nExiste item antes de 2000?", existeAntigo);
console.log("Todos têm pelo menos 1 gênero?", todosTemGenero);
const output = document.getElementById("output");
const total = catalogo.length;
const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;
const ranking = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);

output.innerHTML = `
  <p><strong>Total de itens:</strong> ${total}</p>
  <p><strong>Filmes:</strong> ${filmes} | <strong>Séries:</strong> ${series}</p>
  <p><strong>Não assistidos:</strong> ${naoAssistidos.length}</p>
  <p><strong>Média geral:</strong> ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3 melhores avaliações:</h3>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} - Nota: ${item.nota}</li>`).join("")}
  </ul>
`;