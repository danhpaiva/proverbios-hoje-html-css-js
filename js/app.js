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

  var botaoTema = document.getElementById("botao-tema");

  function temaEfetivo() {
    var salvo = document.documentElement.getAttribute("data-theme");
    if (salvo === "light" || salvo === "dark") {
      return salvo;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  botaoTema.setAttribute("aria-pressed", String(temaEfetivo() === "dark"));

  botaoTema.addEventListener("click", function () {
    var novoTema = temaEfetivo() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", novoTema);
    localStorage.setItem("tema", novoTema);
    botaoTema.setAttribute("aria-pressed", String(novoTema === "dark"));
  });
})();
