# Fortis Rose Engineering LLC — Static Website (Azure Static Web Apps)

## Projects grid
Edit `assets/data/projects.json` and add items like:
```json
{
  "title": "Beam Reinforcement Details",
  "category": "Design",
  "year": 2026,
  "location": "Pinellas County, FL",
  "image": "/assets/img/projects/beam-detail.jpg",
  "description": "Detailing and calculations for structural reinforcement.",
  "link": "/projects/beam-reinforcement.html"
}
```
Place images under `assets/img/projects/` and reference them with a leading `/` path.

## Logo
Replace `/assets/img/logo.png` with your official logo file (PNG or SVG named `logo.png`).

## Deploy to Azure Static Web Apps
1. Push to GitHub
2. Azure portal → Static Web Apps → Create → connect repo; set App/Output location to `/`.
3. Add your Squarespace DNS records (CNAME for `www`, apex A/ALIAS if desired), then add the custom domain in the SWA resource.
