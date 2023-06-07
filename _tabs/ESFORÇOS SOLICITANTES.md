---
# the default layout is 'page'
icon: fas fa-info-circle
order: 3
math: true
---

# Equilíbrio - 2° Lei de Newton

A segunda lei de Newton é fundamental para definir se a estrutura analisada está em equilíbrio. Por essa lei podemos definir que dado um conjunto de forças, a resultante: 

$$ \vec{R} = \sum_{i} \vec{F}_i $$

Além disso, sabemos que o momento resultante, em 
relação ao polo O, pode ser definido como:

$$ \vec{M}_o = \sum (P_i - O)\times \vec{F}_i $$

Com isso, para uma estrutura estar em equilíbrio, sabemos que a resultante e o momento, em relação a qualquer polo, devem ser iguais a 0. Assim, os problemasplanos resultam em três equações que, se satisfeitas, permitem o equilíbrio daestrutura e permitem determinar as reações de apoio:


$$ \sum F_x = 0 $$

$$ \sum F_y = 0 $$

$$ \sum M_o = 0 $$

# Esforços Solicitantes
Esforços solicitantes são as reações internas da estrutura. Quando realizamos um corte ortogonal na barra, um par (ação e reação) de esforços solicitantes “aparecem” na barra, um em cada lado do corte. Devem ser realizados um corte a cada mudança de direção da barra e a cada carregamento concentrado.

Os esforços presentes em estruturas planas são:
* Normal (N): resultante dos esforços internos na direção da barra
* Cortante (V): resultante dos esforços internos na direção do plano do corte
* Momento fletor (M): momento resultante dos esforços internos com relação
ao baricentro da seção transversal do corte.

Os esforços solicitantes seguem uma convenção de sinal que indica os sentidos
positivos dos esforços.
* N > 0 -> força normal saindo da seção transversal.
* V > 0 -> força cortante gira a sub-estrutura no sentido horário.
* M > 0 -> momento fletor traciona as fibras inferiores

    <table><tr><td style="text-align: center;">
    <img src="/assets/img/esforços.png"  style="width: 500px; height: 500px;"></td></tr></table>

Em alguns casos não é possível seguir a convenção de sinal, mas recomenda-se segui-la sempre que possível. Para determinar os esforços solicitantes, basta equilibrar uma das sub-estruturas geradas.

> Em barras de treliça (barras articuladas nas extremidades e com carregamento de forças aplicados apenas nos nós), o único esforço solicitante é a força normal em cada barra.
{: .prompt-info }

## Diagrama dos esforços solicitantes

Os diagramas dos esforços solicitantes existem para possibilitar o estudo da maneira que os esforços variam pela barra. Cada esforço é desenhado individualmente em uma cópia da barra, sem outras forças (ativas ou reativas) ouvínculos desenhados.

Os diagramas seguem uma convenção na sua representação. O diagrama da força normal e da força cortante podem ser desenhados em qualquer lado da barra, mas devem conter o sinal da força. Já os diagramas do momento fletor devem ser desenhados do lado tracionado da barra, sem sinal.





