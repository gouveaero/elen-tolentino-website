# HomeHero Specification

## Overview
- **Target file:** `components/HomeHero.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (approx y 80–900px)
- **Interaction model:** Static (CTA scrolls to #cursos)

## DOM Structure
```
<section> relative min-h-screen flex items-center justify-center text-center overflow-hidden
  <div> absolute inset-0 bg-black opacity-60 z-10  ← dark overlay
  <img> absolute inset-0 w-full h-full object-cover  ← Unsplash background
  <div> absolute top-0 left-0 w-full md:w-1/2 h-full bg-gradient-to-r from-black via-black/70 to-transparent z-10  ← left gradient
  <div> relative z-20 content-wrapper flex flex-col md:flex-row items-center text-center md:text-left
    <div> md:w-1/2  ← left column
      <h1> "Transformando a Odontologia com Conhecimento de <span>Vanguarda</span>."
      <p>  "Capacitando cirurgiões-dentistas a diagnosticar com precisão..."
      <a href="#cursos"> "Conheça os Cursos"  ← CTA button
    <div> w-full md:w-1/2 mt-12 md:mt-0 flex justify-center  ← right column
      <div> w-96 h-96 rounded-full overflow-hidden border-4 border-brand-accent  ← circular frame
        <img> Dra. Elen portrait
```

## Computed Styles (exact)

### section
- position: relative
- min-height: 100vh (min-h-screen)
- display: flex
- align-items: center
- justify-content: center
- text-align: center
- overflow: hidden
- background-color: #121212 (fallback)

### Background image
- src: `/assets/images/hero-bg.jpg` (downloaded from Unsplash)
- position: absolute inset-0
- width: 100% / height: 100%
- object-fit: cover

### Dark overlay (z-10)
- position: absolute inset-0
- background: black
- opacity: 0.6

### Left gradient (z-10)
- position: absolute
- top/left: 0
- width: 100% (mobile) / 50% (md+)
- height: 100%
- background: `linear-gradient(to right, black, rgba(0,0,0,0.7), transparent)`

### h1
- font-size: 36px (mobile) → 48px (sm) → 60px (lg) → 72px (2xl)
- font-weight: 800 (extrabold)
- color: rgb(255, 255, 255)
- line-height: tight (leading-tight = 1.25)
- margin-bottom: 16px

### h1 span (Vanguarda)
- color: #E10098 (`text-brand-accent`)

### p (subtitle)
- font-size: 18px (lg) → 20px (md) → 24px (2xl)
- color: rgb(209, 213, 219) (gray-300)
- margin-bottom: 32px
- max-width: xl (576px)

### CTA button
- tag: `<a href="#cursos">`
- class: `btn btn-primary`
- display: inline-block
- padding: 14px 32px
- font-weight: 700
- text-transform: uppercase
- border-radius: 8px
- background-color: #E10098
- color: #FFF
- letter-spacing: 1px
- transition: all 0.3s ease
- hover: background-color: #C60086; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(225,0,152,0.2)

### Circular photo frame
- width: 256px (w-64) → 320px (sm) → 384px (md)
- height: same as width
- border-radius: 9999px (rounded-full)
- overflow: hidden
- border: 4px solid #E10098 (border-brand-accent)
- box-shadow: 0 25px 50px rgba(225,0,152,0.2) (shadow-2xl shadow-brand-accent/20)

### Portrait image
- width/height: 100%
- object-fit: cover

## Text Content (verbatim)
- H1: "Transformando a Odontologia com Conhecimento de **Vanguarda**."
  ("Vanguarda" wrapped in `<span class="text-brand-accent">`)
- Subtitle: "Capacitando cirurgiões-dentistas a diagnosticar com precisão e a tratar com excelência através da Estomatologia e Laserterapia."
- CTA: "Conheça os Cursos"

## Assets
- Hero BG: `/assets/images/hero-bg.jpg` (Unsplash photo-1576091160550-2173dba999ef, 2070px wide)
- Portrait: `/assets/wp-content/uploads/2022/02/Igc-89-1-scaled-e1644545094436.jpg`

## Responsive Behavior
- **Mobile (<768px):** flex-col, text-center, circular photo below text (320px diameter)
- **Desktop (≥768px):** flex-row, text-left, photo on right (384px diameter)
