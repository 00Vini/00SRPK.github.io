// layout inicial
let layout_m1 = {
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
let expression_m1 = {
  equations: ["-(x * p * b)/(a + b)", "(p * a^2 + p * a * b + p * a * x)/(a + b)"],
  ranges: [[0, 2], [2, 7]]
}

// prepara equação de estado inicial
let pre_equation1_m1 = expression_m1.equations[0]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)
let pre_equation2_m1 = expression_m1.equations[1]
  .replace(/a/g, document.getElementById('a').value)
  .replace(/b/g, document.getElementById('b').value)

let pre_expression_m1 = {
  equations: [pre_equation1_m1, pre_equation2_m1],
  ranges: [[0, 2], [2, 7]]
}

// cria o gráfico utilizando a expressão acima
grafico_m1 = new Plot('plot-fletor1', pre_expression_m1, layout_m1, 'orange')

function update_m1(a, b) {
  // gera as novas equações
  let equation1 = expression_m1.equations[0].replace(/a/g, a).replace(/b/g, b)
  let equation2 = expression_m1.equations[1].replace(/a/g, a).replace(/b/g, b)
  // modifica o layout caso a resultante seja maior
  layout_m1.xaxis.range[1] = (+a) + (+b)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [+a, (+a) + (+b)]]
  }
  // seta a nova expressão no objeto plot
  grafico_m1.setExpression(new_expression)
  // plota
  grafico_m1.draw(document.getElementById('eq').value)
}

// desenhamos ele antes de qualquer alteração
grafico_m1.draw(document.getElementById('eq').value)

document.getElementById('form').onsubmit = function (event) {
  // toda vez que o form for aceito, modificamos os valores
  event.preventDefault()
  // obtemos valores a e b novos
  let a = document.getElementById('a').value
  let b = document.getElementById('b').value
  if ((+a) > 0 && (+b) > 0) {
    update_n1
    update_c1(a, b)
    update_m1(a, b)
  }
  else alert("⚠️Os Valores de comprimento das barras devem ser positivos!!!!")
}
