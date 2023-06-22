---
# the default layout is 'page'
icon: fas fa-info-circle
order: 4
math: true
---

As estruturas em 3D são uma expansão do que foi estudado nas estruturas em 2D.
Exercícios em 3D possuem algumas características a mais que serão comentados
durante o texto.

##  Equações de Equilíbrio

Em exercícios em três dimensões, será necessário equilibrar as forças nas três dimensões, o que resulta em 6 equações de equilíbrio:

$$ \sum F_{x} = 0;  \sum F_{y} = 0; \sum F_{z} = 0 $$

$$ \sum M_{x} = 0;  \sum M_{y} = 0; \sum M_{z} = 0$$

As resultantes das forças nas três direções do sistema e a resultante dos momentos em torno dos três eixos devem ser nulas.

## Reações de Apoio
Os apoios são os mesmos, mas também aplicam novas forças na nova dimensão. Então, relembrando, as apoios utilizados são (e as forças que eles aplicam em 3
dimensões):
1. Apoio Simples: Uma reação perpendicular ao plano de apoio.

![Desktop View](/assets/img/apoio.png)

2. Apoio Duplo: Não permite movimentação, apenas rotação (Três reações).

![Desktop View](/assets/img/apoioduplo.png)

3. Engaste: Não permite movimentação ou rotação (3 forças e 3 momentos).

![Desktop View](/assets/img/engaste.png)

## Dimensões da Estrutura

Os exercícios considerados são simplificações onde a barra possui uma de suas dimensões muito maior que as outras duas. Mas caso a barra possua mais de uma dimensão significativa, a simplificação pode ser realizada, movendo o ponto de aplicação das forças ativas para o centro da barra (com seus momentos resultantes). Como no exemplo, considere a barra:

![Desktop View](/assets/img/exem.png)

Nesse caso, não podemos apenas desconsiderar a altura e largura da barra, pois a mesma influência nos esforços da mesma. Logo para realizar a simplificação, movemos as forças ativas para o centro da barra, de modo que elas sejam aplicadas no eixo. Assim, com um sistema equivalente, podemos desconsiderar a largura e altura da barra para resolver o problema.

O momento aplicado na mudança de ponto de aplicação da força é obtido pela fórmula: 

$$ \vec{M} = \vec{r} \times \vec{F} $$

Na qual $ \vec{r} $ é o vetor (P - O), P é o ponto de de aplicação original da força e O é o novo ponto de aplicação. No exemplo, obtemos o equivalente:

![Desktop View](/assets/img/exemp.png)

> Simbologia: a seta com duas pontas simboliza o momento em torno do eixo paralelo a seta.
{: .prompt-info }

## Esforços Solicitantes

Como há uma nova direção que forças podem ser aplicadas, novos esforços solicitantes aparecem como reações nas barras. Analisando um corte numa barra percebe-se seis forças atuando internamente na mesma.

![Desktop View](/assets/img/esfcorte.png)

Uma componente da força cortante e do momento fletor passam a atuar na nova dimensão. Já um novo momento, momento torçor, relacionado a torção da barra também aparece.

### Convenção de Sinais

Como convenção segue-se:

* N > 0: Saindo da seção transversal. Desenhado em qualquer plano com sinal.
* V > 0: Ao olhar com o eixo apontando para o observador, a cortante positiva provoca um giro da sub-estrutura no sentido horário. Desenhado no plano de atuação da força com sinal.
* T > 0: Saindo da seção transversal. Desenhado em qualquer plano com sinal.
* M: São desenhados do lado tracionado, sem sinal, no plano de aplicação

