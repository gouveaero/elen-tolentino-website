# Behaviors — elentolentino.com.br

## Global Libraries Detected
- **jQuery**: present (Elementor dependency)
- **Elementor Pro 4.0.3**: all pages
- **No smooth scroll library** (Lenis/Locomotive not detected)
- **No GSAP**: not detected
- **Tracking**: GTM (GTM-THSFGHSP), Google Ads, Microsoft Clarity

## Scroll Behavior
- Standard browser scroll (no custom scroll library)
- No scroll-snap detected
- No scroll-driven animation libraries

## Navigation Pattern
- **Home**: Single-page scroll with anchor links (#sobre, #cursos, #depoimentos, #contato)
- **All other pages**: Standalone landing pages with no internal nav back to home (except via logo)

## Header/Nav Behaviors
- **Home header**: Sticky nav with logo + anchor links + CTA button. Transparent on load, gets dark bg on scroll (standard Elementor sticky behavior)
- **Product pages (Pós-Grad, Imersão, etc.)**: No header — full-width landing pages without standard nav
- **Bio page**: Redirects to Pós-Graduação with their own header variant

## Interactive Elements
- **Accordion/FAQ**: All product pages have FAQ sections with click-to-expand (Elementor accordion widget). No custom animation — standard height toggle.
- **Countdown timer** (Laserterapia): JS-driven live countdown with hours/minutes/seconds updating every second.
- **Video embed** (EstomatoPlay): YouTube embed iframe. Static, no lightbox.
- **Forms** (Mapa das Lesões, Nova Odontologia): RD Station / ActiveCampaign embedded forms with name + email fields.
- **CTA buttons**: Standard links — no modal, no JS, direct href navigation.

## Hover States
- Buttons: Background color darkens ~10%, scale(1.02) on CTA buttons
- Cards/course cards: Slight box-shadow increase on hover
- Nav links: Color changes to primary pink on hover

## Responsive Breakpoints (observed)
- **Desktop**: ≥1024px — horizontal nav, multi-column grids
- **Tablet**: 768–1023px — same layout, slightly compressed
- **Mobile**: <768px — vertical stack, hamburger menu on home, full-width sections

## Animations (Elementor)
- Elementor "entrance" animations on scroll (fade-in-up) — mostly on section headings and grid items
- These are CSS class-based (`animated fadeInUp`) triggered by Elementor's IntersectionObserver
- In our clone: implement with simple `@keyframes fadeInUp` + IntersectionObserver or Tailwind `animate-` classes

## Page-Level Interaction Models
| Page | Model |
|------|-------|
| Home | Static sections + anchor scroll nav |
| Pós-Graduação | Static landing page + FAQ accordion |
| Imersão Diagnóstico Total | Static landing page + FAQ accordion |
| EstomatoPlay | Static landing page + video embed + FAQ accordion |
| Laserterapia | Countdown timer + static sections |
| Depoimentos | Static grid |
| Mapa das Lesões | Lead capture form + static bio |
| Nova Odontologia | Lead capture form + static bio |
| Pós-Alunos | Redirects to Pós-Graduação (authenticated content not accessible) |
| Bio | Redirects to Pós-Graduação with slight variant |
| Política de Privacidade | Static text, "Diagnosis Cursos" platform page |
