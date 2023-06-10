// layout inicial
let layout_m3 = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Momento [kNm]" },
  title: "Diagrama de Momento Fletor [M]",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_m3 = {
  equations: [`${va_3}*x - (p * x^2)/2`, `((p * (a + b - x)^2)/3) - (a + b - x)*((p * (a + b -x)/2) - ${vb_3})`],
  ranges: [[0, 2], [2, 7]]
}

// prepara equação de estado inicial
let pre_equation1_m3 = expression_m3.equations[0]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)
let pre_equation2_m3 = expression_m3.equations[1]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)

let pre_expression_m3 = {
  equations: [pre_equation1_m3, pre_equation2_m3],
  ranges: [[0, 2], [2, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_m3 = new Plot('plot-fletor3', pre_expression_m3, layout_m3, 'orange')

// desenhamos ele antes de qualquer alteração
grafico_m3.draw(document.getElementById('c1_3').value)

function update_m3(a, b) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_m3.equations[0].replace(/a/g, a).replace(/b/g, b)
  let equation2 = expression_m3.equations[1].replace(/a/g, a).replace(/b/g, b)
  // modifica o layout caso a resultante seja maior
  layout_m3.xaxis.range[1] = (+a) + (+b)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [+a, (+a) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_m3.setExpression(new_expression)
  // plota
  grafico_m3.draw(document.getElementById('c1_3').value)
}
