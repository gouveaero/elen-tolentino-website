# HomeFooter Specification

## Overview
- **Target file:** `components/HomeFooter.tsx`
- **Screenshot:** `docs/design-references/home/desktop.png` (bottom section)
- **Interaction model:** Social links open in new tab

## DOM Structure
```
<footer id="contato"> bg-black py-16
  <div> content-wrapper text-center text-gray-400
    <a href="#"> text-3xl font-bold text-white tracking-wider mb-4 inline-block
      "ELEN " <span class='text-brand-accent'> "TOLENTINO"
    <p> max-w-md mx-auto mb-8  "Vamos juntos elevar o nível da odontologia..."
    <div> flex justify-center space-x-6 mb-8
      <a href="#"> Instagram icon
      <a href="#"> YouTube icon
      <a href="#"> LinkedIn icon
      <a href="#"> WhatsApp icon
    <p> text-sm  "© 2025 Dra. Elen Tolentino. Todos os direitos reservados."
    <p> text-xs mt-2 text-gray-600
      <i> fas fa-heart text-brand-accent (heart icon)
```

## Computed Styles (exact)

### footer
- background-color: rgb(0, 0, 0) (bg-black)
- padding-top: 64px (py-16)
- padding-bottom: 64px

### content-wrapper
- text-align: center
- color: rgb(156, 163, 175) (text-gray-400)

### Logo link
- font-size: 30px (text-3xl)
- font-weight: 700 (font-bold)
- color: rgb(255, 255, 255)
- letter-spacing: 0.1em (tracking-wider)
- margin-bottom: 16px (mb-4)
- display: inline-block
- "ELEN" is plain white text, "TOLENTINO" is `<span class="text-brand-accent">` = #E10098

### p (tagline)
- font-size: 16px
- color: rgb(156, 163, 175) (text-gray-400)
- max-width: 448px (max-w-md)
- margin: 0 auto 32px (mb-8)

### Social icons row
- display: flex
- justify-content: center
- gap: 24px (space-x-6)
- margin-bottom: 32px (mb-8)

### Social icon link
- color: rgb(156, 163, 175) (text-gray-400)
- font-size: 24px (text-2xl) → for SVG icons: w-6 h-6
- hover: color #E10098 (hover:text-brand-accent)
- transition: colors 150ms

### Copyright p
- font-size: 14px (text-sm)
- color: rgb(156, 163, 175) (text-gray-400)

### Sub-copyright p
- font-size: 12px (text-xs)
- margin-top: 8px (mt-2)
- color: rgb(75, 85, 99) (text-gray-600)
- contains a heart icon in pink

## Text Content (verbatim)
- Logo: "ELEN TOLENTINO" ("TOLENTINO" in pink span)
- Tagline: "Vamos juntos elevar o nível da odontologia. Siga-me nas redes sociais e fique por dentro de novos conteúdos e turmas."
- Copyright: "© 2025 Dra. Elen Tolentino. Todos os direitos reservados."
- Sub-copyright: "Feito com ♥ (pink heart icon)"

## Social Links
The original uses Font Awesome icons (fab fa-instagram, fab fa-youtube, fab fa-linkedin-in, fab fa-whatsapp).
Replace with SVG components from `components/icons.tsx`:
- Instagram → `<InstagramIcon className="w-6 h-6" />`
- YouTube → `<YouTubeIcon className="w-6 h-6" />`
- LinkedIn → add `LinkedInIcon` to icons.tsx (simple SVG)
- WhatsApp → `<WhatsAppIcon className="w-6 h-6" />`

All href values in original are "#" (placeholder) — use actual social URLs if available, otherwise "#".

## Responsive Behavior
- Same layout on all viewports (centered, single column)
- Max-width wrapper constrains content width on desktop
