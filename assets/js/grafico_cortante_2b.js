// layout inicial
let layout_v2b = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de esforço Cortante [V] trecho b-c",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_v2b = {
  equations: ["(-p*a^2 -2*p*c)/(2*(b+c)) + p", "(-p*a^2 -2*p*c)/(2*(b+c))"],
  ranges: [[0, 5], [5, 7]]
}

// prepara equação de estado inicial
let pre_equation1_v2b = expression_v2b.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_v2b = expression_v2b.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_v2b = {
  equations: [pre_equation1_v2b, pre_equation2_v2b],
  ranges: [[0, 5], [5, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_v2b = new Plot('plot-cortante2b', pre_expression_v2b, layout_v2b, 'green')

// desenhamos ele antes de qualquer alteração
grafico_v2b.draw(document.getElementById('c1_2').value)

function update_v2b(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_v2b.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_v2b.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_v2b.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +c], [+c, (+c) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_v2b.setExpression(new_expression)
  // plota
  grafico_v2b.draw(document.getElementById('c1_2').value)
}