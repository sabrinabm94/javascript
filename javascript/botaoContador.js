let box = document.getElementById('boxg');
let contador = 0;
let botao = document.getElementById('somar');

botao.onclick = function() {
  if(box) {
    contar();
    box.innerHTML = contador;
  }

  function contar() {
    contador++;
  }
};