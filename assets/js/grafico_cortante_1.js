// layout inicial
let layout_c1 = {
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
let expression_c1 = {
  equations: ["(p * b)/(a + b)", "(-p * a)/(a + b)"],
  ranges: [[0, 2], [2, 7]]
}

// prepara equação de estado inicial
let pre_equation1_c1 = expression_c1.equations[0]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)
let pre_equation2_c1 = expression_c1.equations[1]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)

let pre_expression_c1 = {
  equations: [pre_equation1_c1, pre_equation2_c1],
  ranges: [[0, 2], [2, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_c1 = new Plot('plot-cortante1', pre_expression_c1, layout_c1, 'green')

// desenhamos ele antes de qualquer alteração
grafico_c1.draw(document.getElementById('eq').value)

function update_c1(a, b){
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_c1.equations[0].replace(/a/g, a).replace(/b/g, b)
  let equation2 = expression_c1.equations[1].replace(/a/g, a).replace(/b/g, b)
  // modifica o layout caso a resultante seja maior
  layout_c1.xaxis.range[1] = (+a) + (+b)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [+a, (+a) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_c1.setExpression(new_expression)
  // plota
  grafico_c1.draw(document.getElementById('eq').value)
}
