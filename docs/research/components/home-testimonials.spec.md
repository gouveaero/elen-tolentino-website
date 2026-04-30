# HomeTestimonials Specification

## Overview
- **Target file:** `components/HomeTestimonials.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (approx y 2100–2750px)
- **Interaction model:** Static cards + CTA link to /depoimentoseplay/

## DOM Structure
```
<section id="depoimentos"> py-20 md:py-28 bg-brand-secondary
  <div> content-wrapper text-center
    <h2> section-title
      "O que meus <span class='text-brand-accent'>Alunos Dizem</span>"
    <p> section-subtitle  "O sucesso dos meus alunos é a minha maior recompensa..."
    <div> grid lg:grid-cols-3 gap-8
      ← Testimonial card (×3)
      <div> glassmorphism-card p-8 text-left
        <div> flex items-center mb-4
          <img> w-16 h-16 rounded-full mr-4 border-2 border-brand-accent flex-shrink-0
          <div>
            <h4> "Dr. João Silva"
            <p> "Aluno EstomatoPlay"
        <p> quote text
    <a href="/depoimentoseplay/"> mt-12 btn btn-primary
      "Ver mais depoimentos"
```

## Computed Styles (exact)

### section
- background-color: rgb(30, 30, 30) (`bg-brand-secondary`)
- padding-top: 80px → 112px (md)

### h2 (section-title)
- same pattern: 30/36/48px, weight 800
- span "Alunos Dizem" in #E10098

### Cards grid
- grid-template-columns: 1fr (mobile/tablet) → repeat(3, 1fr) (lg)
- gap: 32px (gap-8)

### glassmorphism-card
- background: rgba(30, 30, 30, 0.6)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(255, 255, 255, 0.1)
- border-radius: 16px
- padding: 32px (p-8)
- text-align: left

### Avatar image
- width: 64px (w-16)
- height: 64px (h-16)
- border-radius: 9999px (rounded-full)
- margin-right: 16px (mr-4)
- border: 2px solid #E10098 (border-brand-accent)
- flex-shrink: 0

### h4 (name)
- font-size: 18px (text-lg)
- font-weight: 700 (font-bold)
- color: rgb(255, 255, 255)

### p (role)
- font-size: 14px (text-sm)
- color: rgb(156, 163, 175) (text-gray-400)

### p (quote text)
- font-size: 16px
- color: rgb(209, 213, 219) (text-gray-300)

### CTA button
- class: `btn btn-primary`
- margin-top: 48px (mt-12)
- background: #E10098
- color: white
- padding: 14px 32px
- font-weight: 700
- text-transform: uppercase
- border-radius: 8px

## Text Content (verbatim)

### Section header
- H2: "O que meus **Alunos Dizem**" ("Alunos Dizem" in pink span)
- Subtitle: "O sucesso dos meus alunos é a minha maior recompensa. Veja o que eles têm a dizer sobre a experiência de aprendizado."

### Testimonial 1
- Avatar: `https://placehold.co/60x60/E10098/FFFFFF?text=J` (placeholder)
- Name: "Dr. João Silva"
- Role: "Aluno EstomatoPlay"
- Quote: '"O curso mudou minha forma de enxergar a estomatologia. A didática da Dra. Elen é fantástica e o conteúdo é extremamente aplicável. Recomendo de olhos fechados!"'

### Testimonial 2
- Avatar: `https://placehold.co/60x60/E10098/FFFFFF?text=M` (placeholder)
- Name: "Dra. Maria Oliveira"
- Role: "Aluna Imersão"
- Quote: '"A imersão foi um divisor de águas. Saí do curso aplicando os conhecimentos no dia seguinte com total segurança. A Dra. Elen é uma mestre no que faz."'

### Testimonial 3
- Avatar: `https://placehold.co/60x60/E10098/FFFFFF?text=C` (placeholder)
- Name: "Dr. Carlos Pereira"
- Role: "Aluno EstomatoPlay"
- Quote: '"A melhor plataforma de estomatologia do Brasil. O suporte e a comunidade fazem toda a diferença. Sinto-me muito mais confiante nos meus diagnósticos."'

### CTA
- Text: "Ver mais depoimentos"
- href: "/depoimentoseplay/"

## Implementation Note
Avatars use placehold.co service — these are placeholder images for real testimonial photos. 
Use Next.js `<Image>` with `unoptimized` or a regular `<img>` for external URLs.

## Responsive Behavior
- **Mobile/Tablet (<1024px):** 1 column stacked
- **Desktop (≥1024px):** 3 columns (lg:grid-cols-3)
