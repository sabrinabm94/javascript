let box = document.getElementById('boxg');
let counter = 0;
let button = document.getElementById('sum');

button.onclick = function() {
  if(box) {
    count();
    box.innerHTML = counter;
  }

  function count() {
    counter++;
  }
};