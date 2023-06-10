// layout inicial
let layout_n3 = {
  xaxis: { range: [0, 7], title: "Comprimento [m]" },
  yaxis: { autorange: true, title: "Esforço [kN]" },
  title: "Diagrama de Esforço normal [N]",
  plot_bgcolor: 'black',
  paper_bgcolor: 'black',
  font: {
    color: 'white'
  }
}

// expressão inicial da cortante
let expression_n3 = {
  equations: ["0", "0"],
  ranges: [[0, 9999], [0, 0]]
}


let va_3 = "(2*p*b^2 + 6*p*b*a + 3*p*a^2)/(6*(a+b))"
let vb_3 = "(3*p*a^2 + 3*p*b*a + p*b^2)/(6*(a+b))"

// cria o gráfico utilizando a expressão acima
grafico_n3 = new Plot('plot-normal3', expression_n3, layout_n3, 'red')

// desenhamos ele antes de qualquer alteração
grafico_n3.draw(document.getElementById('c1_3').value)

function update_n3() {
  grafico_n3.draw(document.getElementById('c1_3').value)
}

document.getElementById('form_3').onsubmit = function (event) {
  // toda vez que o form for aceito, modificamos os valores
  event.preventDefault()
  // obtemos valores a e b novos
  let a_3 = document.getElementById('a_3').value
  let b_3 = document.getElementById('b_3').value

  if ((+a_3) > 0 && (+b_3) > 0) {
    update_n3()
    update_v3(a_3, b_3)
    update_m3(a_3, b_3)
  }

  else alert("⚠️Os Valores de comprimento das barras devem ser positivos!!!!")
}