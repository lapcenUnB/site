# Site LAPCEN

## O básico de alterar código

Os arquivos a serem editados com propósitos de mudar o conteúdo do site são:
- `src/content/admin/*`, que altera os conteúdos da navbar e da homepage;
- `src/content/post/*`, que pode ser usado para criar/editar/deletar postagens no site;
- `src/pages`, onde pode ser adicionado mais arquivos `.md` para criar novas páginas.

Você pode editar os arquivos diretamente nesse site, simplesmente navegando até eles e clicando para editar. Depois de editar o código, o site vai ser atualizado em alguns segundos. Você pode acompanhar o processo olhando a marquinha de progresso:
![image](https://github.com/lapcenUnB/site/assets/142829643/180ed14a-2529-4bc6-9154-b542087c2cf0)
Caso seja uma bola laranja, o site está sendo atualizado. Caso seja um "v" verde, o site foi atualizado. Caso seja um "x" vermelho, o site não pôde ser atualizado, pois a última alteração é inválida.

### Breve introdução à sintaxe `.ts` usada

A extensão de arquivos `.ts` significa que o arquivo é escrito em Typescript, e deve ser escrito considerando o seguinte:

Certos símbolos tem significado específico, e não podem ser colocados incorretamente, senão o código não funcionará.

Primeiro, introduzindo alguns tipos relevantes:
- Lista. Esse tipo tem nome bem intuitivo, e é usado no projeto para enumerar objetos diferentes. Tem início e fim definido por colchetes `[]`
- Objeto. Serve para relacionar nomes específicos a certo valor. Tem início e fim definido por chaves `{}`
- String. Serve para guardar texto arbitrário. Tem início e fim determinado por \`, ' ou ". Por exemplo: ``` `opa` ```, `'opa'` ou `"opa"`
  - Obs: só é possível usar quebra de linha (Enter) usando \`, e mesmo assim ela não aparece na página.

Ao usar um Objeto, temos que cumprir um contrato. Por exemplo, se foi feito um código que usa a propriedade `title` para pegar uma String (como em `{ title: "Opa, um Título" }`), não podemos colocar `{ titulo: "Opa, um Título" }` e esperar que as coisas funcionem normalmente.

Além disso, alguns campos possuem um contrato ainda mais arbitrário, como os usados pra colocar ícones. `{ icon: "tabler:123" }`, por exemplo, funciona corretamente; enquanto `{ icon: "um triangulo retangulo" }` não funciona corretamente.
Procure um ícone desejado no site [tabler](https://tablericons.com/), copie o nome e coloque depois dos `:`.

### Breve introdução à sintaxe `.md`
Markdown é uma linguagem simples de marcação. É um padrão simples e comum a muitos lugares (como Notion). Com Markdown é possível colocar metadados, títulos, tabelas, links, imagens, listas, etc.

Um exemplo simples. O seguinte blog escrito em markdown:

```md
---
title: Opa
category: Blog Teste
---
#### Veja nossos exemplos
- [De metadados](https://github.com/lapcenUnB/site/blob/main/src/content/post/exemplo-metadados.md?plain=1) (quais metadados são aceitos nas postagens)
- [De conteúdo](https://github.com/lapcenUnB/site/blob/main/src/content/post/exemplo-conte%C3%BAdo.mdx)
  - Obs: A extensão `.mdx` é um superset do `.md`. Ou seja, tem tudo que o Markdown tem, e permite a escrita de código Astro. Não use essa extensão a não ser que saiba um pouco de JSX
```

Renderizaria um blog com o seguinte conteúdo:

---

#### Veja nossos exemplos
- [De metadados](https://github.com/lapcenUnB/site/blob/main/src/content/post/exemplo-metadados.md?plain=1) (quais metadados são aceitos nas postagens)
- [De conteúdo](https://github.com/lapcenUnB/site/blob/main/src/content/post/exemplo-conte%C3%BAdo.mdx)
  - Obs: A extensão `.mdx` é um superset do `.md`. Ou seja, tem tudo que o Markdown tem, e permite a escrita de código Astro. Não use essa extensão a não ser que saiba um pouco de JSX

---

## Template usado

Foi utilizado e alterado um template já existente, chamado [AstroWind](https://github.com/onwidget/astrowind) para criação desse site.

### Possui licensa MIT

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.


