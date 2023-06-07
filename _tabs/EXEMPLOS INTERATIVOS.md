---
# the default layout is 'page'
icon: fas fa-info-circle
order: 5
math: true
---

# Exemplo 1 
Calcule as reações de apoio e esforços solicitantes do problema a seguir:

<table><tr><td style="text-align: center;"><img src="/assets/img/ex1.png"></td></tr></table>


### Resolução:

<ol>
  <li>Desenhar o diagrama de corpo livre com as reações de apoio. 
  <table><tr><td style="text-align: center;">
<img src="/assets/img/ex1.1.png"></td></tr></table>
  </li>
  <li>Calcular as reações de apoio com as equações de equilíbrio.

$$ \sum F_x = 0 \implies H_a = 0$$ 
$$ \sum F_y = 0 \implies V_a + V_b - P = 0 \implies V_a + V_b = P $$ 
$$ \sum M_a = 0 \implies - P *a + V_b(a + b) = 0 \implies V_b = \frac{Pa}{a + b}$$

$$ V_a = P(1 - \frac{a}{a+b}) \implies V_a = P(\frac{a+b}{a+b}-\frac{a}{a+b}) \implies V_a = \frac{Pb}{a + b}$$
  </li>
  
  <li>Realizar os cortes para os esforços solicitantes
    <table><tr><td style="text-align: center;">
<img src="/assets/img/ex1.2.png"></td></tr></table>
Analisando à esquerda de C1 (x > 0 e x < a)
    <table><tr><td style="text-align: center;">
<img src="/assets/img/ex1.3.png"></td></tr></table>

$$ \sum F_x = 0 \implies H_a + N = 0 \implies N = - H_a \implies N = 0 $$
$$ \sum F_y = 0 \implies V_a + V = 0 \implies V = V_a \implies v = \frac{Pb}{a + b} $$
$$ \sum M_{C1} = 0 \implies M - V_a * x = 0 \implies M = V_ax \implies M = x\frac{Pb}{a+b}$$
   Analisar a direita de C2 (X > a e X < a+b)
      <table><tr><td style="text-align: center;">
<img src="/assets/img/ex1.4.png"></td></tr></table>

$$ \sum F_x = 0 \implies N = 0 $$
$$ \sum F_y = 0 \implies V_b + V = 0 \implies V = -V_b \implies V = \frac{-Pa}{a+b} $$
$$ \sum M_{C2} = 0 \implies -M + V_b(a + b - x) = 0 \implies M = V_b(a + b - x) $$
$$ M = aV_b + bV_b + xV_b \implies M = \frac{Pa²}{a+b} + \frac{Pab}{a+b} + \frac{Pax}{a+b}$$
  </li>
  
  <li>
  Traçar os diagramas dos esforços solicitantes (Você pode ver as diferenças nos diagramas e reações de apoio para diferentes valores de P, a e b, basta alterar os valores nos campos determinados)
  <style>
  .input-barra {
    width: 40px; /* Altere o valor para ajustar o tamanho da barra */
    height: 40px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.1);
    border-style: groove;
  }
  .draw-buttom {
    width: 80px; /* Altere o valor para ajustar o tamanho da barra */
    height: 50px;
    text-align: center;
    background-color: rgba(11, 156, 49, 0.8);
    border-style: outset;
    border-radius: 15px;
    font-size: 20px;
  }
  .table {
    max-width: 750px;
    max-height: 500px;
  }
</style>


<script src="https://unpkg.com/mathjs@11.8.0/lib/browser/math.js"></script>
<script src="https://cdn.plot.ly/plotly-1.35.2.min.js"></script>

<body>
  <br>
  <form id="form">
    <label for="eq">Escolha os valores que deseja aplicar à estrutura</label>
    <p>Valor da carga (kN): <input type="text" id="eq" value="10" class="input-barra" /></p>
    <p>Valor de a (m): <input type="text" id="a" value="2" class="input-barra"/></p>
    <p>Valor de b (m): <input type="text" id="b" value="5" class="input-barra"/></p>
    <input type="submit" value="Draw" class="draw-buttom"/>
  </form>
<br>

<table class="table"><tr><td style="text-align: center;">
  <div id="plot-normal1"></div>
</td></tr></table>

<table class="table"><tr><td style="text-align: center;">
  <div id="plot-cortante1"></div>
</td></tr></table>

<table class="table"><tr><td style="text-align: center;">
  <div id="plot-fletor1"></div>
</td></tr></table>


  <script src="/assets/js/graficos.js"></script>
  <script src="/assets/js/grafico_normal_1.js"></script>
  <script src="/assets/js/grafico_cortante_1.js"></script>
  <script src="/assets/js/grafico_fletor_1.js"></script>
</body>
  </li>
</ol>




# Exemplo 2 
Calcule as reações de apoio e esforços solicitantes do problema a seguir :

 <table><tr><td style="text-align: center;"><img src="/assets/img/ex2.0.png"></td></tr></table>

### Resolução:

<ol>
  <li>Desenhar o diagrama de corpo livre com as reações de apoio e substituir a força distribuída por uma força mecanicamente equivalente.
 <table><tr><td style="text-align: center;"><img src="/assets/img/ex2.1.png"></td></tr></table>

</li>
  <li>Calcular as reações de apoio com as equações de equilíbrio

$$ \sum F_x = 0 \implies H_a - H_b + P = 0 $$
$$ \sum F_y = 0 \implies V_a - Pa = 0 \implies V_a = Pa$$
$$ \sum M_a = 0 \implies \frac{-Pa²}{2} - Pc + H_b(C + b) = 0 \implies H_b = \frac{Pa² + 2Pc}{2(c+b)}$$
$$ H_a = -P + H_b \implies H_a = -P + \frac{Pa² + 2Pc}{2(c+b)} \implies H_a = \frac{Pa² + 2Pb}{2(c+b)} $$
</li>
  <li>Realizar os cortes para os esforços solicitantes
   <table><tr><td style="text-align: center;"><img src="/assets/img/ex2.2.png"></td></tr></table>
  Analisando a esquerda de C1 (x > 0 e x < a)
     <table><tr><td style="text-align: center;"><img src="/assets/img/ex2.3.png"></td></tr></table>
    
$$ \sum F_x = 0 \implies H_a + N = 0 \implies N = -H_a \implies N =  -\frac{Pa² + 2Pb}{2(c+b)} $$

$$ \sum F_y = 0 \implies V_a - V - Px = 0 \implies V = V_a - Px \implies V = Pa - Px $$
$$ \sum M_{C1} = 0 \implies M - V_ax + \frac{Px²}{2} = 0 $$
$$ M = V_ax - \frac{Px²}{2} \implies M = Pax - \frac{Px²}{2}$$

Analisando acima de C2 ($y > b$ e $y < b+c$) (note-se que nesse exemplo, o momento fletor possui sentido arbitrário, pois não existem “fibras inferiores” em uma barra vertical)
<table><tr><td style="text-align: center;"><img src="/assets/img/ex2.4.png"></td></tr></table>

$$ \sum F_x = 0 \implies -H_b - V + P = 0 \implies V = \frac{Pa² + 2Pc}{2(c+b)} - P $$
$$ \sum F_y = 0 \implies N = 0 $$
$$ \sum M_{C2} = 0 \implies M + H_b(c+b-y) - P (c - y) = 0 $$
$$ M = \frac{Pa² + 2Pc}{2(c+b)}(-c +b +y) + P(c - y)$$
  </li>
  <li> Traçar os diagramas dos esforços solicitantes (Você pode ver as diferenças nos diagramas e reações de apoio para diferentes valores de P, a e b, basta alterar os valores nos campos determinados)

  </li>
</ol>

# Exemplo 3 
Calcule as reações de apoio do problema a seguir e os esforços solicitantes do centro da barra:

<table><tr><td style="text-align: center;"><img src="/assets/img/ex3.0.png"></td></tr></table>

DCL:

<table><tr><td style="text-align: center;"><img src="/assets/img/ex3.1.png"></td></tr></table>

$$ \sum F_x = 0 \implies H_a = 0 $$

$$ \sum F_y = 0 \implies V_b + V_a -3P - \frac{3P}{2} $$

$$ \sum M_a = 0 \implies -6V_b + \frac{9*3P}{2} + 2*\frac{3P}{2} = 0 \implies V_b = \frac{33P}{12}$$

$$ V_a = -V_b + 3P + \frac{3P}{2} \implies V_a = -\frac{33P}{12} + \frac{36P}{12} + \frac{18P}{12} = \frac{7P}{4}$$

Esforços solicitantes do centro da barra:
<table><tr><td style="text-align: center;"><img src="/assets/img/ex3.2.png"></td></tr></table>

$$ \sum F_x = 0 \implies N = 0 $$

$$ \sum F_y = 0 \implies V_b - V - 3P = 0 \implies V = V_b - 3P = -\frac{P}{4}$$

$$ M_{C1} = 0 \implies -3V_b + \frac{3*3P}{2} + M = 0 \implies M = 3*\frac{33P}{12} - \frac{9P}{2} = \frac{15P}{4}$$