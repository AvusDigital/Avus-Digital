# Avus Digital, portfólio

Site estático (HTML, CSS com Tailwind e JS puro).

## Estrutura

```
index.html            página
src/input.css         fonte dos estilos (Tailwind + componentes do portfólio)
css/style.css         CSS gerado (é este que o site carrega)
js/main.js            animações, scroll, contadores, galeria
tailwind.config.js    cores, fontes e easing da marca
img/cases/            prints dos projetos reais
img/lab/              prints dos projetos do Avus Lab
design/               galeria Design Portfolio (design1 a design9)
```

## Rodando

```
npm install
npm run dev     # recompila o CSS enquanto você edita
npm run build   # gera o css/style.css minificado
```

O `css/style.css` que vem no projeto é uma versão pré-gerada SEM o Tailwind (reset simples + os componentes do portfólio), então dá pra abrir o `index.html` e ver o site sem rodar nada.
Rode `npm install && npm run build` uma vez para gerar a versão oficial com Tailwind (ela sobrescreve esse arquivo).
Depois disso, sempre que mexer no `src/input.css` ou usar classes novas do Tailwind no HTML, rode o `npm run build` (ou deixe o `npm run dev` ligado).

## Cores da marca (disponíveis como classes do Tailwind)

`bianco`, `bianco-pure`, `nero`, `brg`, `brg-bright`, `brg-tint`, `muted`.
Exemplo: `class="bg-brg text-bianco"`.

## Fotos

Nomes esperados (se a foto não existir, o card mostra o monograma):

- `img/cases/`: `lhl.jpg`, `b1.jpg`, `oceans.jpg`, `vg.jpg`, `gpfilms.jpg`
- `img/lab/`: `cafe.jpg`, `beauty.jpg`, `realty.jpg`, `ink.jpg`, `law.jpg`, `fit.jpg`, `razor.jpg`
- `design/`: `design1.png` a `design9.png` (a seção só aparece se as imagens existirem)

Prints em proporção 16:10 (ex.: 1600x1000) ficam melhores.

## Publicar na Vercel

Suba a pasta inteira. Como o `css/style.css` já está gerado, não precisa de build.
Se preferir buildar lá: Build Command `npm run build` e Output Directory `.`.
