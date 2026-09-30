const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
  let curtir = false;
  botao.addEventListener("click", botaoClicado);
  function botaoClicado() {
    console.log("fui clicado");
    let texto = botao.querySelector("span");
    if (curtir === false) {
      texto.textContent++;
      curtir = true;
    }
    else {
      texto.textContent--;
      curtiu = false;
    }
  }
}
)