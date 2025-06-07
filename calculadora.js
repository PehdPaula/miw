function calcular() {
  const valorInicial = parseFloat(document.getElementById("valorInicial").value);
  const aporteMensal = parseFloat(document.getElementById("valorMensal").value);
  let taxa = parseFloat(document.getElementById("taxa").value) / 100;
  let tempo = parseFloat(document.getElementById("tempo").value);

  const tipoTaxa = document.getElementById("tipoTaxa").value;
  const tipoTempo = document.getElementById("tipoTempo").value;
  const tipoRentabilidade = document.getElementById("tipoRentabilidade").value;
  const tipoInvestimento = document.getElementById("tipoInvestimento").value;

  if (
    isNaN(valorInicial) || valorInicial < 0 ||
    isNaN(aporteMensal) || aporteMensal < 0 ||
    isNaN(taxa) || taxa < 0 ||
    isNaN(tempo) || tempo <= 0
  ) {
    document.getElementById("resultado").innerHTML =
      "Por favor, preencha todos os campos corretamente (valores não podem ser negativos e tempo deve ser maior que zero).";
    return;
  }

  const CDI = 0.0135;
  const IPCA = 0.004;

  if (tipoTaxa === "anual") {
    taxa = Math.pow(1 + taxa, 1 / 12) - 1; 
  }

  if (tipoTempo === "anos") {
    tempo = tempo * 12; 
  }

  if (tipoRentabilidade === "posFixado") {
    taxa = taxa * CDI;
  } else if (tipoRentabilidade === "ipca") {
    taxa = taxa + IPCA;
  }

  const montanteInicial = valorInicial * Math.pow(1 + taxa, tempo);
  const montanteMensal = aporteMensal * ((Math.pow(1 + taxa, tempo) - 1) / taxa);
  const valorFinalBruto = montanteInicial + montanteMensal;

  const totalInvestido = valorInicial + (aporteMensal * tempo);
  let valorFinalLiquido = valorFinalBruto;

  if (tipoInvestimento === "cdp/lc" || tipoInvestimento === "tesouro") {
    const aliquota = 0.15;
    const rendimento = valorFinalBruto - totalInvestido;
    const imposto = rendimento * aliquota;
    valorFinalLiquido -= imposto;
  }

  const juros = valorFinalLiquido - totalInvestido;

  document.getElementById("resultado").innerHTML =
    `Valor Final: R$ ${valorFinalLiquido.toFixed(2)}<br>` +
    `Total Investido: R$ ${totalInvestido.toFixed(2)}<br>` +
    `Total de Juros: R$ ${juros.toFixed(2)}`;
}
