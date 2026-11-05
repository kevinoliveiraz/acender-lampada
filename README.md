
# Acender Lâmpada

Um projeto prático desenvolvido para estudar **HTML, CSS e JavaScript**, com foco na manipulação de elementos HTML e na criação de interações com o usuário.

A proposta é simples: criar uma lâmpada que pode ser acesa e apagada por meio de um interruptor interativo.

## Funcionalidades

- Acender e apagar a lâmpada ao clicar no interruptor.
- Alternar entre imagens da lâmpada acesa e apagada.
- Alterar a aparência do interruptor conforme seu estado.
- Animação suave ao movimentar o botão.
- Atualização dos atributos HTML utilizando JavaScript.

## Tecnologias utilizadas

- **HTML5:** estrutura e organização dos elementos.
- **CSS3:** estilização, Flexbox, pseudoelementos e transições.
- **JavaScript:** eventos, condições e manipulação do DOM.

## Estrutura do projeto

```text
Acender-Lampada/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── lâmpada/
    │   ├── apagada.png
    │   └── acesa.png
    └── assets/
        ├── logo.png
        ├── favicon.png
        ├── favicon.ico
        ├── icone-apagada.png
        └── icone-acesa.png
```

## Como executar

1. Clone ou baixe o repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Execute o arquivo `index.html` no navegador ou utilize a extensão Live Server.
4. Clique no interruptor para acender ou apagar a lâmpada.

O projeto utiliza HTML, CSS e JavaScript puros, sem necessidade de instalar dependências.

## Como funciona

O JavaScript utiliza uma variável chamada `ligada` para armazenar o estado atual da lâmpada.

Inicialmente, seu valor é `false`, indicando que a lâmpada está apagada.

Quando o usuário clica no interruptor, o evento `click` é identificado pelo `addEventListener()`.

Com uma estrutura condicional `if/else`, o código verifica o estado atual e decide se deve acender ou apagar a lâmpada.

A imagem é alterada por meio da propriedade `src`, enquanto o atributo `aria-pressed` permite que o CSS identifique o estado do interruptor e aplique as mudanças visuais.

## O que pratiquei

Durante o desenvolvimento deste projeto, pratiquei:

- Estruturação semântica com HTML.
- Organização de elementos utilizando `main` e `section`.
- Seletores de classes e IDs.
- Posicionamento com Flexbox.
- CSS aninhado utilizando `&`.
- Criação de pseudoelementos com `::before`.
- Declaração de variáveis com `const` e `let`.
- Valores booleanos `true` e `false`.
- Seleção de elementos com `getElementById()`.
- Eventos com `addEventListener()`.
- Condições `if` e `else`.
- Manipulação do DOM com JavaScript.
- Atualização de atributos com `setAttribute()`.

## Status do projeto

**Versão inicial funcional.**

O projeto faz parte dos meus estudos de desenvolvimento web e poderá receber melhorias conforme avanço no aprendizado de JavaScript.

## Autor

Desenvolvido por **Kevin Cardoso de Oliveira**.

GitHub: [@kevinoliveiraz](https://github.com/kevinoliveiraz)

---

Projeto desenvolvido para fins educacionais.
