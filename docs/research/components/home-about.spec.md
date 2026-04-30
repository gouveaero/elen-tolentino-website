# HomeAbout Specification

## Overview
- **Target file:** `components/HomeAbout.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (approx y 900–1450px)
- **Interaction model:** Static

## DOM Structure
```
<section id="sobre"> py-20 md:py-28 bg-brand-secondary
  <div> content-wrapper text-center
    <h2> section-title
      "Uma Trajetória Dedicada à <span class='text-brand-accent'>Excelência</span>"
    <p> section-subtitle
      "Minha missão é compartilhar o conhecimento que adquiri em anos de estudo..."
    <div> max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left
      <div> glassmorphism-card p-6  ← card 1: Formação Sólida
        <i> fas fa-graduation-cap text-brand-accent text-3xl mb-4
        <h3> "Formação Sólida"
        <p> description text
      <div> glassmorphism-card p-6  ← card 2: Dupla Especialidade
        <i> fas fa-star text-brand-accent text-3xl mb-4
        <h3> "Dupla Especialidade"
        <p> description text
      <div> glassmorphism-card p-6  ← card 3: Paixão por Ensinar
        <i> fas fa-chalkboard-teacher text-brand-accent text-3xl mb-4
        <h3> "Paixão por Ensinar"
        <p> description text
```

## Computed Styles (exact)

### section
- background-color: rgb(30, 30, 30) (`bg-brand-secondary`, #1E1E1E)
- padding-top: 80px (py-20) → 112px (md:py-28)
- padding-bottom: same

### h2 (section-title)
- font-size: 30px (text-3xl) → 36px (md:text-4xl) → 48px (xl:text-5xl)
- font-weight: 800 (font-extrabold)
- line-height: 1.25 (leading-tight)
- margin-bottom: 16px
- color: rgb(224, 224, 224)
- span: color rgb(225, 0, 152) (`text-brand-accent`)

### p (section-subtitle)
- font-size: 16px → 18px (md:text-lg) → 20px (xl:text-xl)
- color: rgb(156, 163, 175) (`text-gray-400`)
- max-width: 672px (max-w-2xl)
- margin: 0 auto 48px (mb-12)

### Cards grid
- max-width: 1024px (max-w-5xl)
- grid-template-columns: 1fr (mobile) → repeat(3, 1fr) (md)
- gap: 32px (gap-8)

### glassmorphism-card
- background: rgba(30, 30, 30, 0.6)
- backdrop-filter: blur(10px)
- border: 1px solid rgba(255, 255, 255, 0.1)
- border-radius: 16px
- padding: 24px (p-6)
- text-align: left

### Icon (Font Awesome → replaced with SVG or emoji equiv.)
- color: rgb(225, 0, 152) (`text-brand-accent`)
- font-size: 30px (text-3xl)
- margin-bottom: 16px (mb-4)

### h3 (card title)
- font-size: 20px (text-xl)
- font-weight: 700 (font-bold)
- color: rgb(255, 255, 255)
- margin-bottom: 8px (mb-2)

### p (card description)
- font-size: 16px
- color: rgb(156, 163, 175) (`text-gray-400`)
- line-height: 24px

## Text Content (verbatim)

### Section header
- H2: "Uma Trajetória Dedicada à **Excelência**" ("Excelência" in pink span)
- Subtitle: "Minha missão é compartilhar o conhecimento que adquiri em anos de estudo e prática clínica, formando profissionais mais seguros e capacitados."

### Card 1 — Formação Sólida
- Icon: `fa-graduation-cap` → use graduation cap SVG or emoji 🎓
- Title: "Formação Sólida"
- Text: "Graduada pela UEM, com Mestrado, Doutorado e Pós-Doutorado pela renomada FOB-USP. Uma base acadêmica robusta para um ensino de qualidade."

### Card 2 — Dupla Especialidade
- Icon: `fa-star` → use star SVG or ⭐
- Title: "Dupla Especialidade"
- Text: "Especialista em Estomatologia e em Radiologia Odontológica e Imaginologia, oferecendo uma visão integrada e completa do diagnóstico."

### Card 3 — Paixão por Ensinar
- Icon: `fa-chalkboard-teacher` → use chalkboard/teaching SVG
- Title: "Paixão por Ensinar"
- Text: "Professora na Graduação e Pós-Graduação da UEM, com mais de 70 artigos publicados. Dedicada a impulsionar a carreira de meus alunos."

## Implementation Note
The original uses Font Awesome CDN icons. Replace with inline SVGs that match the shape:
- `fa-graduation-cap` → graduation cap SVG (24×24)
- `fa-star` → star SVG (24×24)  
- `fa-chalkboard-teacher` → teacher/board SVG (24×24)
All icons: `className="w-8 h-8 text-brand-pink mb-4"`

## Responsive Behavior
- **Mobile (<768px):** single column grid, centered text with glassmorphism cards stacked
- **Desktop (≥768px):** 3-column grid, text-left inside cards
