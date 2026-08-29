# Sahib Truck & Trailer Repair — GitHub Pages

## Important: repository layout

Put these files directly in the **root of the GitHub repository**, not inside another folder:

```text
CNAME
README.md
index.html
script.js
style.css
```

`index.html` must be visible at the repository root.

## GitHub Pages setup

1. Open your GitHub repository.
2. Upload the five files above using **Add file → Upload files**.
3. Commit the files to the branch you want to publish (normally `main`).
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
6. Save and wait for the Pages deployment to finish.
7. Under **Custom domain**, enter:
   `sahibtruckandtrailerrepair.com`
8. Save.

## If you still see a GitHub 404

Check that this URL shows your files:

`https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`

The repository root must contain `index.html`.

If your repository is named `jictowing`, the default Pages URL would normally be:

`https://jictowing.github.io/jictowing/`

A root URL such as `https://jictowing.github.io/` requires a repository/site configuration that publishes a root Pages site. For a project repository, use the project URL or configure the custom domain through Pages.

## Domain DNS

For `sahibtruckandtrailerrepair.com`, configure the DNS records at your domain registrar according to the current GitHub Pages custom-domain instructions. Do not put `https://` or `www.` inside the CNAME file unless you intentionally configure a `www` hostname.

The CNAME file in this package is:

`sahibtruckandtrailerrepair.com`
