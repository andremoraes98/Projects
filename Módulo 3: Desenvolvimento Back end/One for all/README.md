# Projeto One for all

<img src="../../images/ONE_FOR_ALL.png" alt="Project-logo">

Este foi o segundo projeto o qual utilizamos o WorkBench o MySQL para criar, popular e estabelecer queries para mostrar os dados. 

Primeiro tivemos que normalizar uma tabela fictícia que nos foi disponibilizada e, depois disso, estabeler a criação da mesma no WorkBench. Depois disso, criamos algumas queries para que dados específicos fossem mostrados.

---

# Habilidades

- Normalizar dados dispostos em uma tabela;

- Criar e popular um banco de dados com o MySQL;

- Manipular comandos SQL mais usados no dia a dia para selecionar e criar dados;

- Fazer consultas mais refinadas, complexas e precisas ao banco de dados;

- Manipular tabelas, fazendo inserções, alterações e exclusões.

---

## Requisitos

Ao todo foram 11 requisitos, sendo um deles bônus:
  
  <details>
    <summary>
      <strong>Desafio 1</strong>
    </summary>

    1. Crie um banco com o nome de `SpotifyClone`;

    2. Providencie as queries necessárias para criar tabelas normalizadas que atendam aos requisitos descritos na seção anterior;

    3. Providencie as queries necessárias para popular as tabelas de acordo com os dados listados na seção anterior;

    4. Crie um arquivo de configurações `desafio1.json`, que mapeará em qual tabela e coluna se encontram as informações necessárias para a avaliação automatizada deste desafio. 
  </details>

  <details>
    <summary>
      <strong>Desafio 2</strong>
    </summary>

    1. A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "cancoes";

    2. A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "artistas";

    3. A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "albuns".
  </details>

  <details>
    <summary>
      <strong>Desafio 3</strong>
    </summary>

    1. A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária;

    2. A segunda coluna deve possuir o alias "qtde_musicas_ouvidas" e exibir a quantidade de músicas ouvida pela pessoa com base no seu histórico de reprodução;

    3. A terceira coluna deve possuir o alias "total_minutos" e exibir a soma dos minutos ouvidos pela pessoa usuária com base no seu histórico de reprodução.
  </details>

  <details>
    <summary>
      <strong>Desafio 4</strong>
    </summary>

    1. A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária;

    2. A segunda coluna deve ter o alias "condicao_usuario" e exibir se a pessoa usuária está ativa ou inativa.
  </details>

  <details>
    <summary>
      <strong>Desafio 5</strong>
    </summary>

    1. A primeira coluna deve possuir o alias "cancao" e exibir o nome da canção;

    2. A segunda coluna deve possuir o alias "reproducoes" e exibir a quantidade de pessoas que já escutaram a canção em questão.
  </details>

  <details>
    <summary>
      <strong>Desafio 6</strong>
    </summary>

    1. A primeira coluna deve ter o alias "faturamento_minimo" e exibir o menor valor de plano existente para uma pessoa usuária;

    2. A segunda coluna deve ter o alias "faturamento_maximo" e exibir o maior valor de plano existente para uma pessoa usuária;

    3. A terceira coluna deve ter o alias "faturamento_medio" e exibir o valor médio dos planos possuídos por pessoas usuárias até o momento;

    4. Por fim, a quarta coluna deve ter o alias "faturamento_total" e exibir o valor total obtido com os planos possuídos por pessoas usuárias.
  </details>

  <details>
    <summary>
      <strong>Desafio 7</strong>
    </summary>

    1. A primeira coluna deve exibir o nome da pessoa artista, com o alias "artista";

    2. A segunda coluna deve exibir o nome do álbum, com o alias "album";

    3. A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "seguidores".
  </details>

  <details>
    <summary>
      <strong>Desafio 8</strong>
    </summary>

    1. O nome da pessoa artista, com o alias "artista";

    2. O nome do álbum, com o alias "album".
  </details>

  <details>
    <summary>
      <strong>Desafio 9</strong>
    </summary>

    1. O valor da quantidade, com o alias "quantidade_musicas_no_historico".
  </details>

  <details>
    <summary>
      <strong>Desafio 10</strong>
    </summary>

    1. A primeira coluna deve exibir o nome da canção, com o alias "nome";

    2. A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "reproducoes";

    3. Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética.
  </details>

  ### Bônus

  <details>
    <summary>
      <strong>Desafio 11</strong>
    </summary>

    1. O nome da música em seu estado normal com o alias nome_musica;

    2. O nome da música atualizado com o alias novo_nome.
  </details>