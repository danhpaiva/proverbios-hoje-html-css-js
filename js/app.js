(function () {
  var hoje = new Date();
  var dia = hoje.getDate();

  var entrada = PROVERBIOS_DATA.find(function (item) {
    return item.capitulo === dia;
  });

  var formatadorData = new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  document.getElementById("data-hoje").textContent = formatadorData.format(hoje);
  document.getElementById("referencia").textContent = "Provérbios " + entrada.versiculo;
  document.getElementById("versiculo-texto").textContent = entrada.texto;
  document.getElementById("comentario-autor").textContent = entrada.comentario.autor;
  document.getElementById("comentario-texto").textContent = entrada.comentario.texto;
})();
