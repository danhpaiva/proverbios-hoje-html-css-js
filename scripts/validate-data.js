const assert = require("node:assert");
const PROVERBIOS_DATA = require("../js/data.js");

assert(Array.isArray(PROVERBIOS_DATA), "PROVERBIOS_DATA deve ser um array");
assert.strictEqual(PROVERBIOS_DATA.length, 31, "Devem existir exatamente 31 capítulos (1 a 31)");

const capitulosEncontrados = new Set();

PROVERBIOS_DATA.forEach(function (item, indice) {
  const contexto = "item[" + indice + "]";

  assert.strictEqual(typeof item.capitulo, "number", contexto + ".capitulo deve ser number");
  assert(item.capitulo >= 1 && item.capitulo <= 31, contexto + ".capitulo deve estar entre 1 e 31");
  assert(!capitulosEncontrados.has(item.capitulo), "Capítulo duplicado: " + item.capitulo);
  capitulosEncontrados.add(item.capitulo);

  assert(typeof item.versiculo === "string" && item.versiculo.length > 0, contexto + ".versiculo vazio");
  assert(typeof item.texto === "string" && item.texto.length > 0, contexto + ".texto vazio");
  assert(item.comentario && typeof item.comentario === "object", contexto + ".comentario ausente");
  assert(typeof item.comentario.autor === "string" && item.comentario.autor.length > 0, contexto + ".comentario.autor vazio");
  assert(typeof item.comentario.texto === "string" && item.comentario.texto.length > 0, contexto + ".comentario.texto vazio");
});

for (let capitulo = 1; capitulo <= 31; capitulo += 1) {
  assert(capitulosEncontrados.has(capitulo), "Falta o capítulo " + capitulo);
}

console.log("OK: js/data.js contém os 31 capítulos de Provérbios com versículo e comentário válidos.");
