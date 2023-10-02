var lamp = window.document.getElementById("Lampada");
function estaQuebrada() {
  return lamp.src.indexOf("quebrada") > -1;
}

function Ligar() {
  if (!estaQuebrada()) {
    lamp.src = "Ligada.svg";
  }
}
function desligar() {
  if (!estaQuebrada()) {
    lamp.src = "desligada.svg";
  }
}

lamp.addEventListener("click", Quebrar);
function Quebrar() {
  lamp.src = "quebrada.svg";
}
