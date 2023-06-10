// layout inicial
let layout_n2a = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de esforço Normal [N] trecho a",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_n2a = {
  equations: ["(-p*a^2 + 2*p*b)/(2*(c+b))", "a"],
  ranges: [[0, 7], [909, 910]]
}

// prepara equação de estado inicial
let pre_equation1_n2a = expression_n2a.equations[0]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)
let pre_equation2_n2a = expression_n2a.equations[1]
  .replace(/a/g, document.getElementById('a_2').value)
  .replace(/b/g, document.getElementById('b_2').value)
  .replace(/c/g, document.getElementById('c_2').value)

let pre_expression_n2a = {
  equations: [pre_equation1_n2a, pre_equation2_n2a],
  ranges: [[0, 7], [909, 910]]
}

// cria o gráfico utilizando a expressão acima
grafico_n2a = new Plot('plot-normal2a', pre_expression_n2a, layout_n2a, 'red')

// desenhamos ele antes de qualquer alteração
grafico_n2a.draw(document.getElementById('c1_2').value)

function update_n2a(a, b, c) {
  // obtemos os valores a e b novos
  // gera as novas equações
  let equation1 = expression_n2a.equations[0].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  let equation2 = expression_n2a.equations[1].replace(/a/g, a).replace(/b/g, b).replace(/c/g, c)
  // modifica o layout caso a resultante seja maior
  layout_n2a.xaxis.range[1] = (+a)
  // cria a nova expressão
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [0, 0]]
  }
  // seta a nova expressão no objeto plot
  grafico_n2a.setExpression(new_expression)
  // plota
  grafico_n2a.draw(document.getElementById('c1_2').value)
}

document.getElementById('form_2').onsubmit = function (event) {
  // toda vez que o form for aceito, modificamos os valores
  event.preventDefault()
  // obtemos valores a e b novos
  let a_2 = document.getElementById('a_2').value
  let b_2 = document.getElementById('b_2').value
  let c_2 = document.getElementById('c_2').value

  if ((+a_2) > 0 && (+b_2) > 0 && (+c_2) > 0) {
    update_n2a(a_2, b_2, c_2)
    update_n2b(a_2, b_2, c_2)
    update_v2a(a_2, b_2, c_2)
    update_v2b(a_2, b_2, c_2)
    update_m2a(a_2, b_2, c_2)
    update_m2b(a_2, b_2, c_2)
  }

  else alert("⚠️Os Valores de comprimento das barras devem ser positivos!!!!")
}