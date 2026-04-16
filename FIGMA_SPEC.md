# Sunshine Flowers — Figma Spec

Canvas: 1440 × 2400 (Desktop)

## Colors (Pastel System)
- Cream (bg)      #FFF8EE
- Blush           #F9D5D3
- Peach           #FBD9B8
- Butter          #FCEBA4
- Mint            #CCE6D0
- Lilac           #DCD0EC
- Sky             #CFE3EF
- Ink (text)      #3B322C
- Muted (sub)     #8A7F76

## Type
- Display: Fraunces — H1 64/72 semibold, H2 32/40, Card title 18/24
- UI: Inter — Body 14/20, Caption 12/16, Button 14/20 medium
- Tracking uppercase labels: 0.2em

## Spacing scale
4 / 8 / 12 / 16 / 24 / 32 / 56 / 80 px

## Radius
- Pill: 9999
- Card: 16
- Hero: 24

## Layout (top → bottom)
1. **Header** — 1440×80, padding 24/56. Logo mark 36×36 on Butter pill + wordmark. Nav links right-aligned. Dark pill "Cart (0)".
2. **Hero** — container 1328×≈420, Blush/60 rounded-24. Eyebrow "FRESH THIS WEEK" (uppercase, Muted). H1 "Soft blooms, sunny mornings." Sub-copy 400px max. CTA pill "Shop the collection" (Ink bg / Cream text).
3. **Toolbar** — H2 "The Collection" + count. Right: sort dropdown pill.
4. **Shop grid** — 2-column layout: filter sidebar 240px | product grid 3 cols × card 280×400.
   - Sidebar sections: Category (pill buttons, active = Ink/Cream), Color (9×swatches 36×36 circles, active ring Ink 2px), Max price (range slider).
   - Product card: image area aspect 4:5, swatch bg + blurred accent circle center; category chip top-left (white/80 backdrop blur); footer row with title + color subtitle + price.
5. **Footer** — divider, copyright left + social links right, 56px vertical padding.

## Components to build as Figma components
- `Button/Pill-Dark`, `Button/Pill-Ghost`
- `Chip/Category`
- `Swatch/Color` (variants: Pink / Peach / Yellow / Lilac / White / Green; state: default / active)
- `Card/Product` (variants by swatch color)
- `FilterItem/Category` (default / active)

## Products to mock (12)
Morning Blush · Sunlit Peach · Buttercup Dream · Lilac Whisper · Mint Garden ·
Cloud Peony · Rosé Vows · Honey Daisy · Lavender Pot · Peach Tulips ·
White Aisle · Fern Bowl
