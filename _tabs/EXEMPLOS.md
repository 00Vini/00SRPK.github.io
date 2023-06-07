---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
math: true
---
 Para colocar em prática os conceitos dessa disciplina, é fundamental a realização de exercícios. Para isso, separamos alguns exercícios para você leitor praticar. Os exercícios estão com o passo a passo para resolvê-los, mas a cada exercício iremos avançar mais

# Exemplo 1 
 Ache as reações de apoio do problema a seguir:

<table><tr><td style="text-align: center;"><img src="/assets/img/um.png"></td></tr></table>

### Resolução:
DLC e equilíbrio:
  <table><tr><td style="text-align: center;"><img src="/assets/img/umum.png"></td></tr></table>
  
$$ \sum F_x = 0 \implies -H_a + 2P = 0 \implies H_a = 2P $$ 

$$ \sum F_y = 0 \implies V_a + V_b - P = 0 $$ 

$$ \sum M_a = 0 \implies - 2Pa + 3Pa -4V_ba= 0 \implies V_b = \frac{P}{4}$$

$$ V_a = P - V_b \implies V_a = P - \frac{P}{4} \implies V_a = \frac{3P}{4}$$


# Exemplo 2 
Determinar as reações da viga a seguir.

 <table><tr><td style="text-align: center;"><img src="/assets/img/dois.png"></td></tr></table>

### Respostas: 

 $$ \sum F_x = 0 \implies B_x = 0 $$

 $$ \sum F_y = 0 \implies B_y + D_y = 180 $$

 $$ \sum M_B = 0 \implies 6D_y + 90*1 + 90*1,5 = 105 + 180*6 \implies D_y = 160 kN$$ 
 $$ B_y = 20 kN $$ 

# Exemplo 3 
 A barra da figura está engastada e sujeita ao carregamento mostrado abaixo, usando seus conhecimentos sobre esforços internos em vigas, determine as equações do cortante e do momento fletor para cada um dos trechos da barra.

 <table><tr><td style="text-align: center;"><img src="/assets/img/três.png"></td></tr></table>

### Resolução:

<ol>
  <li>Determinar o diagrama de corpo livre e as reações de apoio.
 <table><tr><td style="text-align: center;"><img src="/assets/img/trêsum.png"></td></tr></table>

$$ \sum F_y = 0 \implies V_a - 20 - 15 - 30 - 10(1,5 + 0,8 + 1,1) = 0 $$
$$ V_a = 99 kN$$

$$ \sum M_a = 0 $$ 
$$ M_a - 20*1,5 - 15(1,5+0,8) - 30(1,5+0,8+1,1) - \frac{34(1,5+0,8+1,1)}{2} = 0$$
$$ M_a = 224,4 kNm$$
  </li>
  <li>Agora precisamos cortar cada trecho da nossa peça, lembrar da utilização de sinais e fazer o equilíbrio da peça.
<table><tr><td style="text-align: center;"><img src="/assets/img/trêsdois.png"></td></tr></table>
Para o trecho BC:
<table><tr><td style="text-align: center;"><img src="/assets/img/trêstrês.png"></td></tr></table>
Para o trecho CD:
<table><tr><td style="text-align: center;"><img src="/assets/img/trêsquatro.png"></td></tr></table>

</li>
  <li>Agora vamos fazer o equilíbrio da peça para calcular as equações.

Para o trecho AB:

$$ V_a - V - 10x - 20 = 0 \implies 99 - V - 10x - 20= 0 $$
$$ V_a = 79 - 10x $$

$$ M_a + M_{Fl} + 10x\frac{x}{2} - 99x + 20(x - 1,5) = 0$$
$$ 224,3 + M_{Fl} + 10\frac{x²}{2} - 99x + 20x - 30 = 0$$
$$ M_{Fl} = -5x² + 79x - 194,3 $$

Para o trecho CD:
$$ V_a - V - 10x - 20 - 15 = 0 $$
$$ 99 - V - 10x -20 -15 = 0 $$
$$ V = 64 - 10x $$

$$ M_a + M_{Fl} + 10x\frac{x}{2} - 99x + 20(x - 1,5) + 15(x - 2,3) = 0 $$
$$ 224,3 + M_{Fl} + 10\frac{x²}{2} - 99x + 20x - 30 + 15x - 34,5 = 0$$
$$ M_{Fl} = -5x² + 64x - 159,8$$
</li>
</ol>

### Respostas finais:

$$ V_{AB} = 99 - 10x $$

$$ M_{Fl_{AB}} = -5x² + 99x 224,3 $$

$$ V_{BC} = 79 - 10x $$

$$ M_{Fl_{BC}} = -5x² + 79x - 194,3 $$

$$ V_{CD} = 64 - 10x $$

$$ M_{Fl_{CD}} = -5x² + 64x - 159,8$$
