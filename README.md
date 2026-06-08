# Fiora — Portfólio de Fotografia

Site portfólio em **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS** + **Framer Motion**, com estética **dark premium** inspirada na logo da Fiora (águia geométrica).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura

```
app/
  layout.tsx        # fontes (Cormorant + Inter), metadata, <body>
  page.tsx          # monta todas as seções
  globals.css       # tema, tokens, utilitários
components/
  Header.tsx        # nav fixa com menu mobile
  Hero.tsx          # capa full-screen com a logo
  Portfolio.tsx     # galeria com filtros por categoria + lightbox
  Lightbox.tsx      # visualizador (teclado: ←/→/Esc)
  Contact.tsx       # contatos + formulário (envia pelo WhatsApp)
  Footer.tsx
  Logo.tsx          # marca reutilizável
  SectionHeader.tsx
lib/
  content.ts        # ⭐ TODO o conteúdo do site fica aqui
public/brand/       # logo (svg + png)
```

## Como trocar pelas suas fotos

Tudo está em [`lib/content.ts`](lib/content.ts):

1. Coloque as imagens em `public/portfolio/`.
2. Em `photos`, adicione/edite o `src` de cada item para `"/portfolio/arquivo.jpg"`.
3. Ajuste `title`, `alt`, `category` e o `span` (`"normal"`, `"wide"` ou `"tall"`)
   para controlar o tamanho de cada foto no mosaico.
4. Edite `contact` (nome, WhatsApp, Instagram).

As categorias dos filtros ficam em `categories` (adicione/remova à vontade).

## Notas

- O formulário de contato abre o WhatsApp já com a mensagem montada pelos campos.
- A logo é branca, por isso o tema é escuro: ela aparece naturalmente sobre o fundo.
