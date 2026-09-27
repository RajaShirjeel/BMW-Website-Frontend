# BMW — Frontend Showcase

A responsive single-page site built for a college dev club frontend hackathon, showcasing frontend and React fundamentals: component structure, routing, live API data, and handled loading/error states.

## Tech stack

- React
- React Router 
- NHTSA vPIC API for vehicle data

## Project structure

```
src/
├── App.jsx                    # Routes: "/" and "/models/:modelId"
├── index.css                  # Global tokens (colors, spacing, fonts) and reset
├── pages/
│   ├── Home.jsx                # Hero + Models + About
│   ├── ModelDetail.jsx         # Model detail page
│   └── ModelDetail.module.css
└── components/
    ├── Navbar.jsx / .module.css
    ├── Hero.jsx / .module.css
    ├── Models.jsx / .module.css
    ├── About.jsx / .module.css
    └── Footer.jsx / .module.css
```

## Getting started

```bash
npm install
npm run dev        # Vite
# or: npm start     # Create React App
```

## Assets

A few image paths are placeholders — drop your own images at these paths before running:

- `public/assets/bmw-hero.jpg` — hero background
- `public/assets/models/placeholder.jpg` — shown on every model card and detail page (the API doesn't provide images)
- `public/assets/about-engine.jpg` — About section image

## Known limitations

- The NHTSA API returns model names and IDs only — no specs, pricing, or images, so every card uses the same placeholder image.
- Only the first 10 models from the API response are displayed.
- Model detail pages re-fetch the full model list and filter client-side, since the API has no single-model lookup endpoint. Fine at this scale (10 models); would need a caching layer at larger scale.
