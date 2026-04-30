# HomeCourses Specification

## Overview
- **Target file:** `components/HomeCourses.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (approx y 1450–2100px)
- **Interaction model:** Cards link to respective course pages

## DOM Structure
```
<section id="cursos"> py-20 md:py-28 bg-brand-dark
  <div> content-wrapper text-center
    <h2> section-title
      "Capacitação de <span class='text-brand-accent'>Alto Nível</span>"
    <p> section-subtitle  "Cursos desenvolvidos com base em evidências científicas..."
    <div> grid md:grid-cols-2 lg:grid-cols-3 gap-8
      ← Card 1: EstomatoPlay
      <div> bg-brand-secondary rounded-xl overflow-hidden shadow-lg group transition-all duration-300
        <div> relative h-56 flex items-center justify-center bg-black
          <img> Logo EstomatoPlay
          <div> absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all
          <span> absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold uppercase px-3 py-1 rounded-full
            "Online"
        <div> p-6 text-left
          <h3> "EstomatoPlay"
          <p> description
          <a href="/cursoestomatoplay/"> "Ver Curso →" (text-brand-accent)
      ← Card 2: Imersão Diagnóstico Total
      <div> bg-brand-secondary rounded-xl overflow-hidden shadow-lg group transition-all duration-300
        <div> relative h-56 flex items-center justify-center bg-white
          <img> Logo Imersão
          <div> absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all
          <span> badge "Online" (bg-brand-accent)
        <div> p-6 text-left
          <h3> "Imersão Diagnóstico Total"
          <p> description
          <a href="/imersao-diagnostico-total/"> "Ver Curso →"
      ← Card 3: Pós-Graduação (coming soon)
      <div> bg-brand-secondary rounded-xl overflow-hidden shadow-lg transition-all duration-300
        <div> relative h-56 flex items-center justify-center bg-gray-900
          <img> Logo Pós-Grad
          <div> absolute inset-0 bg-black/50 transition-all
          <span> badge "Em Breve" (bg-gray-700)
        <div> p-6 text-left
          <h3> "Pós-Graduação Online"
          <p> description
          <a> "Aguarde Novidades" (text-gray-500 cursor-not-allowed, href="#")
```

## Computed Styles (exact)

### section
- background-color: rgb(18, 18, 18) (`bg-brand-dark`, #121212)
- padding-top: 80px → 112px (md:py-28)

### h2 (section-title)
- same as HomeAbout: 30/36/48px, weight 800, span in #E10098

### Cards grid
- grid-template-columns: 1fr (mobile) → repeat(2, 1fr) (md) → repeat(3, 1fr) (lg)
- gap: 32px (gap-8)

### Card outer div
- background-color: rgb(30, 30, 30) (`bg-brand-secondary`)
- border-radius: 12px (rounded-xl)
- overflow: hidden
- box-shadow: 0 10px 15px rgba(0,0,0,0.1) (shadow-lg)
- transition: all 300ms
- hover:box-shadow: involves brand-accent (shadow-brand-accent/20) — add via group-hover

### Card image area
- height: 224px (h-56)
- display: flex; align-items: center; justify-content: center
- Card 1: background black
- Card 2: background white
- Card 3: background rgb(17, 24, 39) (gray-900)

### Course logo image
- width/height: auto, object-contain, max-h-full max-w-full, padding: 16px

### Badge
- position: absolute; top: 16px; left: 16px
- font-size: 12px; font-weight: 700; text-transform: uppercase
- padding: 4px 12px; border-radius: 9999px (rounded-full)
- Card 1&2: background #E10098, color white
- Card 3: background rgb(55, 65, 81) (gray-700), color white

### Card content area (.p-6.text-left)
- padding: 24px (p-6)
- text-align: left

### h3 (card title)
- font-size: 24px (text-2xl)
- font-weight: 700
- color: white
- margin-bottom: 12px (mb-3)

### p (card description)
- font-size: 16px
- color: rgb(156, 163, 175) (text-gray-400)
- margin-bottom: 24px (mb-6)

### Link "Ver Curso →" (cards 1 & 2)
- font-weight: 700
- color: rgb(225, 0, 152) (text-brand-accent)
- hover: color white
- transition: colors 150ms

### Link disabled (card 3)
- color: rgb(107, 114, 128) (text-gray-500)
- cursor: not-allowed

## Text Content (verbatim)

### Section header
- H2: "Capacitação de **Alto Nível**" ("Alto Nível" in pink span)
- Subtitle: "Cursos desenvolvidos com base em evidências científicas e ampla experiência clínica para transformar sua prática diária."

### Card 1 — EstomatoPlay
- Badge: "Online"
- Logo: `/assets/wp-content/uploads/2022/02/Logo-Estomatoplay-3.001-768x400.png`
- H3: "EstomatoPlay"
- Text: "A plataforma completa para dominar o diagnóstico e tratamento das doenças bucais. Aulas, casos clínicos e comunidade interativa."
- Link: "Ver Curso →" → href="/cursoestomatoplay/"

### Card 2 — Imersão Diagnóstico Total
- Badge: "Online"
- Logo: `/assets/wp-content/uploads/2025/09/Fundo-Claro-1-Logo-Imersao-Diagnostico-Total_-da-Afta-ao-Cancer-Bucal-RSEPOUT25-2.png`
- H3: "Imersão Diagnóstico Total"
- Text: "Aprenda a diagnosticar com segurança as principais lesões bucais, da afta ao câncer, e transforme sua prática clínica."
- Link: "Ver Curso →" → href="/imersao-diagnostico-total/"

### Card 3 — Pós-Graduação Online
- Badge: "Em Breve"
- Logo: `/assets/wp-content/uploads/2025/10/Design-sem-nome-2.png`
- H3: "Pós-Graduação Online"
- Text: "Eleve sua carreira a um novo patamar. Aprofunde seus conhecimentos em Estomatologia com nossa pós-graduação completa."
- Link: "Aguarde Novidades" → href="#" (disabled state)

## Responsive Behavior
- **Mobile (<768px):** 1 column
- **Tablet (768–1023px):** 2 columns (md:grid-cols-2)
- **Desktop (≥1024px):** 3 columns (lg:grid-cols-3)
