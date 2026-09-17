const tabelaFios = [
  { correnteMax: 15.5, bitola: "1,5 mm²", disjuntor: "10A" },
  { correnteMax: 21, bitola: "2,5 mm²", disjuntor: "16A" },
  { correnteMax: 28, bitola: "4 mm²", disjuntor: "20A" },
  { correnteMax: 36, bitola: "6 mm²", disjuntor: "25A" },
  { correnteMax: 50, bitola: "10 mm²", disjuntor: "40A" },
];
const valp = document.getElementById("potencia");
const valt = document.getElementById("tensao");
const valc = document.getElementById("valcorrente");
const button = document.getElementById("btnCalcular");
const resultado = document.getElementById("res");

button.addEventListener("click", function () {
  const potencia = Number(valp.value);
  const tensao = Number(valt.value);

  if (isNaN(potencia) || potencia <= 0) {
    resultado.textContent = "Por favor, digite um valor de potência válido.";
    return;
  }
  const corrente = potencia / tensao;
  const fioEncontrado = buscarFio(corrente);

  if (fioEncontrado === null) {
    resultado.textContent =
      "Corrente muito alta para esta tabela de referência.";
  } else {
    resultado.textContent = `Corrente calculada: ${corrente.toFixed(2)}A | Bitola recomendada: ${fioEncontrado.bitola} | Disjuntor: ${fioEncontrado.disjuntor}`;
  }
});

function buscarFio(correnteInformada) {
  for (i = 0; i < tabelaFios.length; i++) {
    if (correnteInformada <= tabelaFios[i].correnteMax) {
      return tabelaFios[i];
    }
  }
  return null;
}
