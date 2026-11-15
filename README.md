# Soluções Avus — como aplicar no portfólio (AvusDigital/Avus-Digital)

## O que mudou (3 coisas)

1. `index.html`: ganhou a seção `#solucoes` (entre "O que fazemos" e "Avus Lab"), a linha `<link rel="stylesheet" href="css/solucoes.css">` e a linha `<script src="js/solucoes.js" defer></script>`. O resto do arquivo está igual ao do GitHub.
2. `css/solucoes.css` (novo): estilos só da seção. Não mexe no `css/style.css`.
3. `js/solucoes.js` (novo): monta a mensagem do WhatsApp conforme os pilares marcados. Não mexe no `js/main.js`.

## Como subir

Copie os 3 arquivos para a raiz do repositório, mantendo as pastas (`css/` e `js/`), e substitua o `index.html`. Faça commit e a Vercel publica.

## Observações

- A seção usa as classes que o site já tem (`band`, `wrap`, `section-head`, `eyebrow`, `lead`, `reveal`, `btn btn-green`). Os cards usam o verde da marca (`--brg-bright`) e, se a variável não existir, o `#3DBB7E` do favicon.
- Não consegui ler o `css/style.css` nem o `js/main.js`. Se algo ficar diferente do esperado (espaçamento, animação de entrada), me mande esses dois arquivos que eu ajusto.
- Se quiser **substituir** a seção "O que fazemos" (Design, Branding, Desenvolvimento web) em vez de manter as duas, apague o bloco `<section ... id="servicos">` do `index.html` e o link "Serviços" do menu.
- Se quiser um link "Soluções" no menu, adicione `<a href="#solucoes">Soluções</a>` dentro de `<nav class="nav">`.

## Textos

Os quatro pilares estão exatamente como você mandou. Título ("Quatro frentes. Uma estratégia só."), frase de apoio e chamada do botão são meus; ajuste ao seu tom.
