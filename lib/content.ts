// ──────────────────────────────────────────────────────────────────────────
// CONTEÚDO DO SITE - Fiora
//
// Este é o único arquivo que você precisa editar para trocar o conteúdo.
// As fotos reais estão em /public/portfolio/. Para adicionar/trocar:
//   1. Coloque a imagem em /public/portfolio/
//   2. Adicione/edite um item em "photos" com o src "/portfolio/arquivo.ext"
//   3. Ajuste category, title, alt e span ("normal" | "wide" | "tall")
// ──────────────────────────────────────────────────────────────────────────

export type Category = {
  id: string;
  label: string;
};

export type Photo = {
  id: number;
  src: string;
  alt: string;
  category: string; // deve bater com um Category.id
  title: string;
  /** "wide" ocupa 2 colunas, "tall" ocupa 2 linhas, "normal" = 1x1 */
  span?: "normal" | "wide" | "tall";
};

export type Partner = {
  name: string;
  /** caminho do logo quando você tiver; por ora usamos só o nome estilizado */
  logo?: string;
};

// Filtros das galerias (baseados no trabalho real)
export const categories: Category[] = [
  { id: "all", label: "Todos" },
  { id: "vinhos", label: "Vinhos" },
  { id: "gastronomia", label: "Gastronomia" },
  { id: "paisagem", label: "Paisagem" },
];

export const photos: Photo[] = [
  // ── Vinhos · As Duas (DOC Douro) ──────────────────────────────────────
  {
    id: 1,
    src: "/portfolio/vinho-01.jpeg",
    alt: "As Duas: tinto e rosé nas mãos",
    category: "vinhos",
    title: "As Duas",
    span: "tall",
  },
  {
    id: 2,
    src: "/portfolio/vinho-02.jpeg",
    alt: "Garrafas As Duas lado a lado",
    category: "vinhos",
    title: "Tinto & Rosé",
  },
  {
    id: 3,
    src: "/portfolio/vinho-03.jpeg",
    alt: "Detalhe do rótulo As Duas",
    category: "vinhos",
    title: "Rótulo",
  },
  {
    id: 4,
    src: "/portfolio/vinho-04.jpeg",
    alt: "Composição com a garrafa de vinho",
    category: "vinhos",
    title: "Composição",
  },
  {
    id: 5,
    src: "/portfolio/vinho-05.jpeg",
    alt: "Mesa posta com vinho As Duas",
    category: "vinhos",
    title: "Mesa Posta",
    span: "wide",
  },
  {
    id: 6,
    src: "/portfolio/vinho-06.jpeg",
    alt: "Taça servida ao sol",
    category: "vinhos",
    title: "Taça Cheia",
  },
  {
    id: 7,
    src: "/portfolio/vinho-07.jpeg",
    alt: "Vinho branco As Duas em ambiente",
    category: "vinhos",
    title: "DOC Douro",
    span: "tall",
  },
  {
    id: 8,
    src: "/portfolio/vinho-08.jpeg",
    alt: "Momento de degustação",
    category: "vinhos",
    title: "Degustação",
  },
  {
    id: 9,
    src: "/portfolio/vinho-09.jpeg",
    alt: "Garrafa em luz natural",
    category: "vinhos",
    title: "Reserva",
    span: "tall",
  },
  {
    id: 10,
    src: "/portfolio/vinho-10.jpeg",
    alt: "Vinho servido em encontro",
    category: "vinhos",
    title: "Encontro",
  },
  {
    id: 11,
    src: "/portfolio/vinho-11.jpeg",
    alt: "Detalhe de aroma e cor",
    category: "vinhos",
    title: "Aroma",
  },
  {
    id: 12,
    src: "/portfolio/vinho-12.jpeg",
    alt: "Brinde com As Duas",
    category: "vinhos",
    title: "Brinde",
    span: "wide",
  },
  {
    id: 13,
    src: "/portfolio/vinho-13.jpeg",
    alt: "Garrafa sobre a mesa",
    category: "vinhos",
    title: "Safra",
  },
  {
    id: 14,
    src: "/portfolio/vinho-14.jpeg",
    alt: "Vinho ao entardecer",
    category: "vinhos",
    title: "Colheita",
  },
  {
    id: 15,
    src: "/portfolio/vinho-15.jpeg",
    alt: "Composição editorial com vinho",
    category: "vinhos",
    title: "Vindima",
    span: "tall",
  },
  {
    id: 16,
    src: "/portfolio/vinho-16.jpeg",
    alt: "O último gole",
    category: "vinhos",
    title: "Último Gole",
  },

  // ── Gastronomia · Malolo ──────────────────────────────────────────────
  {
    id: 17,
    src: "/portfolio/malolo-01.jpeg",
    alt: "Ambiente tropical do Malolo",
    category: "gastronomia",
    title: "Malolo",
  },
  {
    id: 18,
    src: "/portfolio/malolo-02.jpeg",
    alt: "Detalhe do espaço ao ar livre",
    category: "gastronomia",
    title: "Sombra & Rede",
    span: "tall",
  },
  {
    id: 19,
    src: "/portfolio/malolo-03.jpeg",
    alt: "Vista geral do Malolo",
    category: "gastronomia",
    title: "O Espaço",
    span: "wide",
  },
  {
    id: 20,
    src: "/portfolio/malolo-04.jpeg",
    alt: "Clima de verão",
    category: "gastronomia",
    title: "Verão",
  },
  {
    id: 21,
    src: "/portfolio/malolo-05.jpeg",
    alt: "Mural e folhagens",
    category: "gastronomia",
    title: "Mural",
  },
  {
    id: 22,
    src: "/portfolio/malolo-06.jpeg",
    alt: "Pausa tropical",
    category: "gastronomia",
    title: "Pausa",
    span: "tall",
  },
  {
    id: 23,
    src: "/portfolio/malolo-07.jpeg",
    alt: "Folhagem ao sol",
    category: "gastronomia",
    title: "Folhagem",
  },
  {
    id: 24,
    src: "/portfolio/malolo-08.jpeg",
    alt: "Detalhe do quintal",
    category: "gastronomia",
    title: "Quintal",
  },
  {
    id: 25,
    src: "/portfolio/malolo-09.jpeg",
    alt: "Rede entre as árvores",
    category: "gastronomia",
    title: "Rede",
    span: "tall",
  },
  {
    id: 26,
    src: "/portfolio/malolo-10.jpeg",
    alt: "Bebida gelada ao ar livre",
    category: "gastronomia",
    title: "Refresco",
  },
  {
    id: 27,
    src: "/portfolio/malolo-11.jpeg",
    alt: "Atmosfera do lugar",
    category: "gastronomia",
    title: "Atmosfera",
  },

  // ── Paisagem · Douro ──────────────────────────────────────────────────
  {
    id: 28,
    src: "/portfolio/paisagem-01.png",
    alt: "Mirante ao pôr do sol",
    category: "paisagem",
    title: "Mirante",
  },
  {
    id: 29,
    src: "/portfolio/paisagem-02.png",
    alt: "Vinhedos em encosta sob céu azul",
    category: "paisagem",
    title: "Vinhedos",
    span: "tall",
  },
  {
    id: 30,
    src: "/portfolio/paisagem-03.png",
    alt: "Encosta de vinhas do Douro",
    category: "paisagem",
    title: "Encosta",
    span: "wide",
  },
  {
    id: 31,
    src: "/portfolio/paisagem-04.png",
    alt: "Estufa e fonte do Jardim Botânico de Curitiba",
    category: "paisagem",
    title: "Jardim Botânico",
  },
  {
    id: 32,
    src: "/portfolio/paisagem-05.png",
    alt: "Trem atravessando a serra verde",
    category: "paisagem",
    title: "Serra Verde",
    span: "tall",
  },
  {
    id: 33,
    src: "/portfolio/paisagem-06.png",
    alt: "Parque com lago e fonte ao entardecer",
    category: "paisagem",
    title: "Parque",
  },
];

export const partners: Partner[] = [
  { name: "Absoluta Distribuidora" },
  { name: "Casa Alvares" },
  { name: "Vinho As Duas" },
  { name: "Malolo Quiosque" },
  { name: "Tecdisa Informática" },
  { name: "Foco Automóveis" },
];

export const contact = {
  name: "Pedro P Lacerda",
  phone: "(67) 99637-0937",
  whatsapp: "https://wa.me/5567996370937",
  whatsappNumber: "5567996370937",
  instagram: "https://instagram.com/fiora",
};
