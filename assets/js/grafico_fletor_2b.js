// layout inicial
let layout_m2b = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Momento [kNm]" },
  title: "Diagrama de Momento Fletor [M] no trecho b-c",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_m2b = {
  equations: ["(-p*a^2 -2*p*c)*(c + b + x)/(2*(b+c)) + p * (c - x)", "(-p*a^2 -2*p*c)*(c + b + x)/(2*(b+c))"],
  ranges: [[0, 5], [5, 7]]
}

// prepara equação de estado inicial
let pre_equation1_m2b = expression_m2b.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_m2b = expression_m2b.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_m2b = {
  equations: [pre_equation1_m2b, pre_equation2_m2b],
  ranges: [[0, 5], [5, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_m2b = new Plot('plot-fletor2b', pre_expression_m2b, layout_m2b, 'orange')

// desenhamos ele antes de qualquer alteração
grafico_m2b.draw(document.getElementById('c1_2').value)

function update_m2b(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_m2b.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_m2b.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_m2b.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +c], [+c, (+c) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_m2b.setExpression(new_expression)
  // plota
  grafico_m2b.draw(document.getElementById('c1_2').value)
}