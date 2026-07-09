# Provérbios de Hoje

Página estática e minimalista que exibe, todos os dias, um versículo do capítulo
de Provérbios correspondente ao dia do mês (dia 8 → Provérbios 8, dia 21 →
Provérbios 21, etc.), acompanhado de um comentário de linha reformada sobre o
capítulo/versículo.

Como o livro de Provérbios tem exatamente 31 capítulos — o mesmo número máximo
de dias que um mês pode ter — todo dia do calendário sempre corresponde a um
capítulo válido, sem necessidade de ajustes para meses de 28, 29, 30 ou 31 dias.

## Stack

HTML, CSS e JavaScript puros, sem framework nem build step. Os dados dos 31
capítulos (versículo de destaque + comentário) ficam em [`js/data.js`](js/data.js).

## Conteúdo e fontes

- **Texto bíblico:** versículos de domínio público (tradução de Almeida).
- **Comentário:** trechos adaptados e parafraseados a partir de temas conhecidos
  de comentaristas reformados (Matthew Henry, Charles Bridges, John Gill).
  **Não são citações literais** das obras originais — é uma síntese devocional
  inspirada nas ênfases teológicas de cada um, conforme aviso no rodapé do site.

## Rodando localmente

```bash
npx http-server -p 8080 -c-1 .
```

Depois acesse `http://localhost:8080`.

## Testes e lint

```bash
npm install
npm test
```

O comando `npm test` roda, em sequência:

- `validate:data` — garante que `js/data.js` tem os 31 capítulos (1 a 31), cada
  um com versículo e comentário preenchidos.
- `lint:js` — ESLint em `js/` e `scripts/`.
- `lint:css` — Stylelint em `css/`.
- `lint:html` — html-validate em `index.html`.

## CI/CD

- **CI** ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)): roda em pull
  requests para `main` e em pushes para qualquer branch que não seja `main`.
  Executa `npm test` (validação de dados + lints).
- **CD** ([`.github/workflows/cd.yml`](.github/workflows/cd.yml)): roda em push
  para `main`. Primeiro repete a validação/lint e, se passar, publica o site no
  GitHub Pages via Actions oficiais (`configure-pages`, `upload-pages-artifact`,
  `deploy-pages`).

Para o deploy funcionar, habilite em **Settings → Pages → Source: GitHub
Actions** no repositório.
