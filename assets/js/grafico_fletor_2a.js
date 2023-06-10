// layout inicial
let layout_m2a = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Momento [kNm]" },
  title: "Diagrama de Momento Fletor [M] no trecho a",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_m2a = {
  equations: ["p * a * x - (p * x^2)/2", "0"],
  ranges: [[0, 7], [5, 7]]
}

// prepara equação de estado inicial
let pre_equation1_m2a = expression_m2a.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_m2a = expression_m2a.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_m2a = {
  equations: [pre_equation1_m2a, pre_equation2_m2a],
  ranges: [[0, 7], [5, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_m2a = new Plot('plot-fletor2a', pre_expression_m2a, layout_m2a, 'orange')

// desenhamos ele antes de qualquer alteração
grafico_m2a.draw(document.getElementById('c1_2').value)

function update_m2a(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_m2a.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_m2a.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_m2a.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [0, 0]]
  }
  // seta a nova expressão no objeto plot
  grafico_m2a.setExpression(new_expression)
  // plota
  grafico_m2a.draw(document.getElementById('c1_2').value)
}