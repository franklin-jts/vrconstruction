# VR Constructions — React + Vite + Tailwind CSS

Homepage for **VR Constructions** (house construction company, Bangalore), built with
**React 18 + Vite 6 + Tailwind CSS v4**. Layout inspired by a construction-site landing
page, rebranded with a green identity.

## Design system

| Token | Value | Usage |
|---|---|---|
| `brand` | `#16A34A` | Primary green (buttons, accents) |
| `brand-dark` | `#15803D` | Button hover |
| `brand-light` | `#F0FDF4` | Soft backgrounds |
| `ink` | `#333333` | Body text / dark headings |
| `night` | `#00040D` | Dark sections & footer |

Font: **Poppins** (all weights 300–900), loaded via Google Fonts in `index.html`.

## Sections (in page order)

1. **Navbar** — green ticker bar, sticky, Services/Company dropdowns, mobile drawer
2. **Hero** — photo background, ISO badge, stats bar, instant-quote form
3. **Brands strip** — UltraTech, JSW, Asian Paints, etc.
4. **Services** — 3 cards with hover glow effects
5. **Contract Models** — Cost-Plus vs Lump-Sum comparison
6. **Packages** — Silver / Gold / Diamond / Platinum pricing + Cost-Plus banner
7. **How It Works** — 4-step timeline
8. **The VR Constructions Advantage** — dark section, 4 cards
9. **Final CTA** — "Ready to Build" with estimate form
10. **About** — story + stats
11. **Start Journey** — final CTA band
12. **Footer** — link columns, service areas, socials
13. **Mobile bottom nav** — Call / WhatsApp / Free Quote (fixed, mobile only)

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Notes

- Images use Unsplash placeholders — swap in your own site photos.
- The logo is pure HTML/CSS (`BrandLogo.jsx`): bold Poppins "VR" + green "Constructions".
- Interactive: dropdown menus, mobile drawer, hover effects throughout.

## Pages

| Route | Page |
|---|---|
| `/` | Homepage (all sections) |
| `/services/constructions` | Constructions service page |
| `/services/interiors` | Interiors service page |
| `/services/renovations` | Renovations service page |
| `/services/others` | Approvals / Design / PMC / Maintenance |

Service pages are generated from one template (`src/pages/ServicePage.jsx`)
with all content in `src/data/services.js` — edit the data to change page
copy, offerings or process steps.

## Structure

```
src/
├── main.jsx, App.jsx, index.css     # entry, router, theme
├── pages/
│   ├── HomePage.jsx                 # full homepage
│   └── ServicePage.jsx              # template for the 4 service pages
├── data/
│   └── services.js                  # content for all 4 services
└── components/
    ├── Navbar.jsx          ├── Hero.jsx           ├── BrandsStrip.jsx
    ├── Services.jsx        ├── ContractModels.jsx ├── Packages.jsx
    ├── HowItWorks.jsx      ├── Advantage.jsx      ├── FinalCta.jsx
    ├── About.jsx           ├── StartJourney.jsx   ├── Footer.jsx
    ├── MobileBottomNav.jsx ├── SectionHeading.jsx └── BrandLogo.jsx
```
