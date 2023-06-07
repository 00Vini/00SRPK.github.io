// layout inicial
let layout_n1 = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de Esforço normal [N]",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_n1 = {
  equations: ["0", "0"],
  ranges: [[0, 9999], [0, 0]]
}

// cria o gráfico utilizando a expressão acima
grafico_n1 = new Plot('plot-normal1', expression_n1, layout_n1, 'red')

// desenhamos ele antes de qualquer alteração
grafico_n1.draw(document.getElementById('eq').value)

function update_n1(){
  grafico_n1.draw(document.getElementById('eq').value)
}