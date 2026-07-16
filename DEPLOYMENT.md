# ROFLNator Studio — GitHub Pages Deployment Guide

This project is a static website (HTML/CSS/JS only) ready for **GitHub Pages** deployment. No build step, no Node.js, no CI required.

---

## 1. Repository Setup

### Option A: Create a new repository (recommended)

1. Go to **github.com/new**
2. Repository name: `roflnator-studio` (or any name you prefer)
3. Visibility: **Public** (required for free GitHub Pages)
4. Do **not** initialize with README, .gitignore, or license — we already have files locally
5. Click **Create repository**

### Option B: Use an existing repository

If you already have a repo, skip to step 2.

---

## 2. Push the Project

```bash
# In your terminal (Git Bash, PowerShell, or CMD)
cd C:\HERMES_PROJEKTE\ROFLNator-Studio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: ROFLNator Studio static site"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/roflnator-studio.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

## 3. Enable GitHub Pages

1. Open your repository on GitHub
2. Go to **Settings** → **Pages** (in the left sidebar under "Code and automation")
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / `(root)`
4. Click **Save**
5. Wait ~1–2 minutes. GitHub will show a green banner with your site URL:
   - `https://USERNAME.github.io/roflnator-studio/`
   - Or if you named the repo differently, the URL matches the repo name

---

## 4. Custom Domain (Optional)

If you own a domain (e.g., `roflnator.studio`):

1. In **Settings → Pages**, scroll to **Custom domain**
2. Enter your domain (e.g., `roflnator.studio`)
3. Click **Save** — GitHub will verify DNS
4. Add these DNS records at your registrar:

   | Type | Host | Value |
   |------|------|-------|
   | A    | @    | 185.199.108.153 |
   | A    | @    | 185.199.109.153 |
   | A    | @    | 185.199.110.153 |
   | A    | @    | 185.199.111.153 |
   | CNAME| www  | USERNAME.github.io |

5. Enable **Enforce HTTPS** once DNS propagates

---

## 5. Verify the Deployment

Visit your site URL and confirm:

- ✅ Homepage loads with all sections (Overview, Features, How It Works, Contact)
- ✅ Footer shows **Privacy Policy** and **Terms of Service** links (visible without menu)
- ✅ Click **Privacy** → loads `privacy.html`
- ✅ Click **Terms** → loads `terms.html`
- ✅ Contact form submits (configure Formspree endpoint in `index.html` if needed)
- ✅ Mobile navigation toggle works
- ✅ Smooth scroll to anchor links works

---

## 6. Project Structure (for reference)

```
ROFLNator-Studio/
├── index.html          # Homepage
├── privacy.html        # Privacy Policy
├── terms.html          # Terms of Service
├── styles.css          # Complete design system
├── script.js           # Mobile nav, smooth scroll, form UX
├── favicon.svg         # App icon
├── site.webmanifest    # PWA manifest
└── DEPLOYMENT.md       # This file
```

---

## 7. Updating the Site

```bash
cd C:\HERMES_PROJEKTE\ROFLNator-Studio
# Edit files...
git add .
git commit -m "Update: describe change"
git push
```

GitHub Pages auto-deploys on every push to `main`. Changes go live within ~1 minute.

---

## 8. Formspree Contact Form (Optional)

The contact form in `index.html` uses Formspree. To activate:

1. Go to **formspree.io** → Sign up (free tier: 50 submissions/month)
2. Create a new form → Copy the endpoint ID (e.g., `f/abc123`)
3. In `index.html`, replace:
   ```html
   <form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
   ```
4. Commit & push — form will now email you at `roflnator.90@gmail.com`

---

## 9. Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on subpages (`privacy.html`, `terms.html`) | Ensure files are in repo root, not a subfolder. GitHub Pages serves from root. |
| Styles not loading | Check `styles.css` path in HTML: `<link rel="stylesheet" href="styles.css">` (no leading `/`) |
| Custom domain shows "DNS check failed" | Wait 5–30 min for DNS propagation. Verify A records match table above. |
| HTTPS not enforced | In Settings → Pages, check **Enforce HTTPS** after domain verifies. |
| Mobile menu doesn't close | Ensure `script.js` is loaded and not blocked by CSP. |

---

## 10. Cost

- **GitHub Pages**: Free for public repos (unlimited bandwidth)
- **Custom domain**: ~$10–15/year at any registrar
- **Formspree**: Free tier (50 submissions/mo) or $10/mo for more

**Total: $0–15/year**

---

## 11. Support

- GitHub Pages docs: https://docs.github.com/en/pages
- Formspree docs: https://formspree.io/docs
- Questions? Email: roflnator.90@gmail.com