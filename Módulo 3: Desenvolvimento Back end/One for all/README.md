# Projeto Recipe App

<div style="display: flex;" align="center">
  <img src="../../images/TUDIBAO-LOGIN.gif" alt="Project-logo">
  <img src="../../images/TUDIBAO-EXPLORE-2.gif" alt="Project-logo">
</div>

<div style="display: flex;" align="center">
  <img src="../../images/TUDIBAO-EXPLORE-1.gif" alt="Project-logo">
  <img src="../../images/TUDIBAO-PROGRESS.gif" alt="Project-logo">
</div>

Este foi o nosso último projeto de Front End. Para formar e nos tornarmos um Desenvolvedor Front End Jr, fomos responsáveis por desenvolver um aplicativo que tem como principal propósito prover algumas receitas para a pessoa usuária. A aplicação foi, inicialmente, desenvolvida para web, com resolução de mobile.

Os dados da aplicação foram providos de duas APIs: uma para as bebidas (https://www.thecocktaildb.com/api.php) e outra para as comidas (https://www.themealdb.com/api.php).

Para explorar de forma completa, a aplicação está hospedada no domínio: <a target="_blank" href="https://tudibao.surge.sh">TudiBão</a>.

Para fins de desenvolvimento, a nossa aplicação foi toda realizada com o React e a nossa equipe optou por utilizar apenas o ContextAPI como ferramenta para gerenciar os estados globais da aplicação.

---

# Habilidades

- Utilizar _Redux_ para gerenciar estado;

- Utilizar a biblioteca _React-Redux_;

- Utilizar a Context API do _React_ para gerenciar estado;

- Utilizar o _React Hook useState_;

- Utilizar o _React Hook useContext_;

- Utilizar o _React Hook useEffect_;

- Criar Hooks customizados.

---

## Requisitos

Ao todo foram 87 requisitos:

  <details>
    <summary>Testes unitários</summary>

  - 1: Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%;
  </details>
  
  <details>
    <summary>Desafio 1</summary>

    - Crie um banco com o nome de **`SpotifyClone`**;

    - Providencie as queries necessárias para criar tabelas normalizadas que atendam aos requisitos descritos na seção anterior;

    - Providencie as queries necessárias para popular as tabelas de acordo com os dados listados na seção anterior;

    - Crie um arquivo de configurações `desafio1.json`, que mapeará em qual tabela e coluna se encontram as informações necessárias para a avaliação automatizada deste desafio. 
  </details>

  <details>
    <summary>Desafio 2</summary>

    1. A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "**cancoes**";

    2. A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "**artistas**";

    3. A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "**albuns**".
  </details>

  <details>
    <summary>Desafio 3</summary>

    1. A primeira coluna deve possuir o alias "**usuario**" e exibir o nome da pessoa usuária;

    2. A segunda coluna deve possuir o alias "**qtde_musicas_ouvidas**" e exibir a quantidade de músicas ouvida pela pessoa com base no seu histórico de reprodução;

    3. A terceira coluna deve possuir o alias "**total_minutos**" e exibir a soma dos minutos ouvidos pela pessoa usuária com base no seu histórico de reprodução.
  </details>

  <details>
    <summary>Desafio 4</summary>

    1. A primeira coluna deve possuir o alias "**usuario**" e exibir o nome da pessoa usuária;

    2. A segunda coluna deve ter o alias "**condicao_usuario**" e exibir se a pessoa usuária está ativa ou inativa.
  </details>

  <details>
    <summary>Desafio 5</summary>

    1. A primeira coluna deve possuir o alias "**cancao**" e exibir o nome da canção;

    2. A segunda coluna deve possuir o alias "**reproducoes**" e exibir a quantidade de pessoas que já escutaram a canção em questão.
  </details>

  <details>
    <summary>Tela de detalhes de uma receita</summary>

  - 33: Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo;
  - 34: Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL;
  - 35: Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações;
  - 36: Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa;
  - 37: Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`;
  - 38: Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo;
  - 39: Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Start Recipe" deve sumir;
  - 40: Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe";
  - 41: Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso;
  - 42: Implemente um botão de compartilhar e um de favoritar a receita;
  - 43: Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer;
  - 44: Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário;
  - 45: Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa;
  - 46: Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`;
  </details>

  <details>
    <summary>Tela de receita em progresso</summary>

  - 47: Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades e suas instruções;
  - 48: Desenvolva um checkbox para cada item da lista de ingredientes;
  - 49: Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista;
  - 50: Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita;
  - 51: Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui;
  - 52: Implemente a solução de maneira que o botão de finalizar receita ('Finish Recipe') só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados);
  - 53: Redirecione a pessoa usuária após clicar no botão de finalizar receita ('Finish Recipe'), para a página de receitas feitas, cuja rota deve ser `/receitas-feitas`;
  </details>

  <details>
    <summary>Tela de receitas feitas</summary>

  - 54: Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo;
  - 55: Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar;
  - 56: Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar;
  - 57: Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard;
  - 58: Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros;
  - 59: Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita;
  </details>

  <details>
    <summary>Tela de receitas favoritas</summary>

  - 60: Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo;
  - 61: Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar";
  - 62: Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar";
  - 63: Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard;
  - 64: Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela;
  - 65: Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros;
  - 66: Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita;
  </details>

  <details>
    <summary>Tela de explorar</summary>

  - 67: Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo;
  - 68: Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas;
  - 69: Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas;
  </details>

  <details>
    <summary>Tela de explorar bebidas ou comidas</summary>

  - 70: Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo;
  - 71: Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória;
  - 72: Redirecione a pessoa usuária ao clicar em "By Ingredient", a rota deve mudar para a tela de explorar por ingredientes;
  - 73: Redirecione a pessoa usuária ao clicar em "By Nationality", a rota deve mudar para tela de explorar por nacionalidades;
  - 74: Redirecione a pessoa usuária ao clicar em "Surprise me!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API;
  </details>

  <details>
    <summary>Tela de explorar ingredientes</summary>

  - 75: Implemente os elementos da tela de explorar ingredientes respeitando os atributos descritos no protótipo;
  - 76: Desenvolva cards para os 12 primeiros ingredientes, de forma que cada card contenha o nome do ingrediente e uma foto;
  - 77:  Redireciona a pessoa usuária ao clicar no card do ingrediente, a rota deve mudar para tela principal de receitas mas mostrando apenas as receitas que contém o ingrediente escolhido;
  </details>

  <details>
    <summary>Tela de explorar por nacionalidades</summary>

  - 78: Implemente os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo;
  - 79: Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown;
  - 80: Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro;
  - 81: Implemente a rota que deve ser apenas `/explore/foods/nationalities`;
  </details>

  <details>
    <summary>Tela de perfil</summary>

  - 82: Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo;
  - 83: Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível;
  - 84: Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout";
  - 85: Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas;
  - 86: Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas;
  - 87: Redirecione a pessoa usuária que, ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login.
  </details>