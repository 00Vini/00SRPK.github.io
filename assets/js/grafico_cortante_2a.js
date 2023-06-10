// layout inicial
let layout_v2a = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de esforço Cortante [V] trecho a",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_v2a = {
  equations: ["p * a - p * x", "a"],
  ranges: [[0, 7], [909, 910]]
}

// prepara equação de estado inicial
let pre_equation1_v2a = expression_v2a.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_v2a = expression_v2a.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_v2a = {
  equations: [pre_equation1_v2a, pre_equation2_v2a],
  ranges: [[0, 7], [909, 910]]
}

// cria o gráfico utilizando a expressão acima
grafico_v2a = new Plot('plot-cortante2a', pre_expression_v2a, layout_v2a, 'green')

// desenhamos ele antes de qualquer alteração
grafico_v2a.draw(document.getElementById('c1_2').value)

function update_v2a(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_v2a.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_v2a.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_v2a.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [0, 0]]
  }
  // seta a nova expressão no objeto plot
  grafico_v2a.setExpression(new_expression)
  // plota
  grafico_v2a.draw(document.getElementById('c1_2').value)
}