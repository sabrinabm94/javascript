let inputValue = document.querySelector("#ImpDoc");
let inputSelect = document.querySelector("#odoc");

inputSelect.addEventListener("change", showValue);

function showValue() {
  console.log("Está ticado?: " + inputValue.checked);
  console.log("Valor selecionado: " + inputSelect.value);
}
