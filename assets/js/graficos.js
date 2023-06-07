class Plot {
  constructor(element, expressions, layout, color) {
    this.element = element;
    this.layout = layout;
    this.color = color;
    this.expression = expressions
  }
  element = ""
  color = ""
  expression = {}
  layout = {}
  draw(valor) {
    let expression_v1 = `${this.expression.equations[0]}`.replace(/p/g, valor)
    let expression_v2 = `${this.expression.equations[1]}`.replace(/p/g, valor)
    try {
      // compile the expression once
      const expr1 = math.compile(expression_v1)
      const expr2 = math.compile(expression_v2)
      let expressions = this.expression
      // evaluate the expression repeatedly for different values of x
      const xValues = math.range(this.layout.xaxis.range[0], this.layout.xaxis.range[1], 0.01).toArray()
      const yValues = xValues.map(function (x) {
        if (x >= expressions.ranges[0][0] && x < expressions.ranges[0][1])
          return expr1.evaluate({ x: x })
        else return expr2.evaluate({ x: x })
      })

      // render the plot using plotly
      const trace1 = {
        x: xValues,
        y: yValues,
        type: 'scatter',
        fill: 'tozeroy',
        marker: {
          color: this.color
        }
      }
      const data = [trace1]
      Plotly.newPlot(this.element, data, this.layout, { displayModeBar: false, displayLogo: false })
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }
  setColor(color) {
    this.color = color
  }
  setExpression(expressions) {
    this.expression = expressions
  }
}
/*
let layout = {
  xaxis: { range: [0, 7], title: "comprimento [m]" },
  yaxis: { range: [-10, 10], title: "esforço [kN]" },
  title: "diagrama de cortante",
}

let expression = {
  equations: ["(p * b)/(a + b)", "(-p * a)/(a + b)"],
  ranges: [[0, 2], [2, 7]]
}

grafico1 = new Plot('plot', expression, layout, 'green')

grafico1.draw(document.getElementById('eq').value)
document.getElementById('form').onsubmit = function (event) {
  event.preventDefault()
  let a = document.getElementById('a').value
  let b = document.getElementById('b').value
  let equation1 = expression.equations[0].replace(/a/g, a).replace(/b/g, b)
  let equation2 = expression.equations[1].replace(/a/g, a).replace(/b/g, b)
  let new_expression = {
    equations: [equation1, equation2],
    ranges: [[0, +a], [+a, (+a) + (+b)]]
  }
  grafico1.setExpression(new_expression)
  grafico1.draw(document.getElementById('eq').value)
}
*/