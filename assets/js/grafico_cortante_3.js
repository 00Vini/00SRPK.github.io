// layout inicial
let layout_v3 = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de esforço cortante [V]",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_v3 = {
  equations: [`${va_3} - p*x`, `(p * (a + b -x)/2) - ${vb_3}`],
  ranges: [[0, 2], [2, 7]]
}

// prepara equação de estado inicial
let pre_equation1_v3 = expression_v3.equations[0]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)
let pre_equation2_v3 = expression_v3.equations[1]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)

let pre_expression_v3 = {
  equations: [pre_equation1_v3, pre_equation2_v3],
  ranges: [[0, 2], [2, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_v3 = new Plot('plot-cortante3', pre_expression_v3, layout_v3, 'green')

// desenhamos ele antes de qualquer alteração
grafico_v3.draw(document.getElementById('c1_3').value)

function update_v3(a, b) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_v3.equations[0].replace(/a/g, a).replace(/b/g, b)
  let equation2 = expression_v3.equations[1].replace(/a/g, a).replace(/b/g, b)
  // modifica o layout caso a resultante seja maior
  layout_v3.xaxis.range[1] = (+a) + (+b)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [+a, (+a) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_v3.setExpression(new_expression)
  // plota
  grafico_v3.draw(document.getElementById('c1_3').value)
}
