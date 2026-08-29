# Sahib Truck & Trailer Repair — Website

A fast, responsive, single-page marketing website for **Sahib Truck & Trailer Repair** in Winnipeg, MB. Built with plain HTML, CSS, and JavaScript — no build step, no dependencies.

## Business Details

- **Owner:** Manjinder Panesar — Certified Technician & Safety Inspector
- **Address:** Unit # 3-6 Don Valley Parkway, Winnipeg, MB R2C 2Z2
- **Phone:** 204.996.7611 / 431.276.7611
- **Email:** info.sahibtruck@gmail.com
- **Hours:** 24/7 Roadside Assistance

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page markup and content |
| `style.css` | All styling (red/black/white industrial theme, responsive) |
| `script.js` | Mobile menu, footer year, and contact-form email handoff |
| `CNAME` | Custom domain for GitHub Pages |
| `images/` | Local SVG artwork used across the page |

## Run Locally

No tooling required. Either:

- Double-click `index.html` to open it in your browser, **or**
- Serve the folder for accurate relative paths:

```bash
# Python 3
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository and upload all files (keep the folder structure).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose the `main` branch and `/ (root)` folder, then **Save**.
4. Edit the `CNAME` file to your real domain (currently `sahibtruckandtrailerrepair.com`) and point your DNS records to GitHub Pages. If you don't have a custom domain, delete the `CNAME` file.

Your site will publish at `https://<username>.github.io/<repo>/` or your custom domain.

## Customizing

- **Contact form:** The form opens the visitor's email app pre-filled to `info.sahibtruck@gmail.com`. To capture submissions server-side instead, swap the handler in `script.js` for a service like Formspree or Getform.
- **Colors:** Edit the CSS variables at the top of `style.css` (`--red`, `--ink`, etc.).
- **Images:** Replace files in `images/` with the same filenames, or update the paths in `index.html`.
- **Map:** The Google Maps embed uses the street address; update the `src` query in `index.html` if the location changes.

> Note: Safety inspection and trailer service wording is kept general. Update the copy in `index.html` to match exactly what your MPI authorization and services cover.
