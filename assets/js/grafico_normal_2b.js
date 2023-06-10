// layout inicial
let layout_n2b = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de esforço Normal [N] trecho b-c",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_n2b = {
  equations: ["0", "0"],
  ranges: [[0, 7], [909, 910]]
}

// prepara equação de estado inicial
let pre_equation1_n2b = expression_n2b.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_n2b = expression_n2b.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_n2b = {
  equations: [pre_equation1_n2b, pre_equation2_n2b],
  ranges: [[0, 7], [909, 910]]
}

// cria o gráfico utilizando a expressão acima
grafico_n2b = new Plot('plot-normal2b', pre_expression_n2b, layout_n2b, 'red')

// desenhamos ele antes de qualquer alteração
grafico_n2b.draw(document.getElementById('c1_2').value)

function update_n2b(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_n2b.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_n2b.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_n2b.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, ((+b) + (+c))], [0, 0]]
  }
  // seta a nova expressão no objeto plot
  grafico_n2b.setExpression(new_expression)
  // plota
  grafico_n2b.draw(document.getElementById('c1_2').value)
}
