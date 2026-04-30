# HomeHeader Specification

## Overview
- **Target file:** `components/HomeHeader.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (top ~80px)
- **Interaction model:** Sticky + mobile hamburger menu (click-driven)

## DOM Structure
```
<header> sticky top-0 z-50
  <div> content-wrapper flex justify-between items-center py-4
    <a href="/#"> Logo "ELEN TOLENTINO"
    <nav> hidden md:flex space-x-8 items-center
      <a href="#sobre"> Sobre Mim
      <a href="#cursos"> Cursos
      <a href="#depoimentos"> Depoimentos
      <a href="#contato"> Contato
      <a href="#cursos" class="btn btn-primary"> QUERO TE AJUDAR
    <button> md:hidden mobile menu toggle (hamburger "☰")
  <div> mobile overlay (hidden by default, shown when menu open)
    <nav> flex-col items-center justify-center h-full space-y-8
      same links + CTA
      <button> X close
```

## Computed Styles (exact)

### header
- position: sticky
- top: 0
- z-index: 50
- background: transparent (becomes rgba(0,0,0,0.8) with backdrop-blur-sm on scroll via JS)
- border-bottom: 1px solid rgb(31 41 55) → Tailwind `border-b border-gray-800`
- color: rgb(224, 224, 224)
- font-size: 16px

### Logo link "ELEN TOLENTINO"
- font-size: 24px (text-2xl)
- font-weight: 700 (font-bold)
- color: rgb(255, 255, 255)
- letter-spacing: 0.05em (tracking-wider)
- "ELEN" in white, "TOLENTINO" in `text-brand-accent` (#E10098)

### Nav links (desktop)
- color: rgb(224, 224, 224) (text-gray-200)
- font-size: 14px
- font-weight: 500
- hover: color → rgb(255, 255, 255)
- transition: colors 150ms

### CTA button (QUERO TE AJUDAR)
- background-color: #E10098
- color: #FFF
- padding: 14px 32px (but compact in nav: py-2 px-4 or similar)
- Actually in nav appears smaller: ~py-2 px-5
- font-weight: 700
- text-transform: uppercase
- border-radius: 8px
- letter-spacing: 1px
- hover: background #C60086, transform: translateY(-2px)

### Mobile menu overlay
- position: fixed
- inset: 0
- background: rgb(18, 18, 18) = bg-brand-dark
- z-index: 50
- display: flex → flex-col items-center justify-center

## States & Behaviors

### Sticky scroll behavior
- **Trigger:** page scroll > 10px
- **State A (top):** header background = transparent
- **State B (scrolled):** header background = rgba(0,0,0,0.8) + backdrop-blur-sm
- **Transition:** transition-all duration-300
- **Implementation:** useEffect with scroll listener, toggle class `scrolled`

### Mobile menu
- **Trigger:** click hamburger button
- **State A (closed):** mobile overlay display:none / opacity:0
- **State B (open):** opacity:1, display:flex
- **Transition:** opacity 300ms
- **Implementation:** useState isMenuOpen, toggle on button click, close on link click

## Text Content (verbatim)
- Logo: "ELEN TOLENTINO" (ELEN in white, TOLENTINO in pink)
- Nav: Sobre Mim | Cursos | Depoimentos | Contato | QUERO TE AJUDAR

## Assets
- No images — text-only logo

## Responsive Behavior
- **Desktop (≥768px):** full nav bar visible, mobile button hidden
- **Mobile (<768px):** nav hidden, hamburger button shown, full-screen overlay on click
