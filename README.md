# Gunn Speech & Debate

Static site for the Gunn High School Speech & Debate team. Plain HTML, CSS, and one small
JS file — no build step, no dependencies.

```
index.html        Home: hero, practice details, branch overview, contact
branches.html     Public Forum, Parliamentary, Lincoln–Douglas, Speech
about.html        About us + officers and branch leads
contact.html      Emails, location, FAQ
assets/css/       style.css — all styling and design tokens
assets/js/        main.js — mobile menu, scroll reveal
assets/img/       logo, favicon, officer headshots (see README.txt inside)
vercel.json       clean URLs (/branches instead of /branches.html)
```

## Run it locally

Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Push to GitHub

```bash
git clone https://github.com/luna-777/gunnsd.git
cd gunnsd
# copy these files in, then:
git add .
git commit -m "Add site"
git push origin main
```

## Deploy to Vercel

1. vercel.com → **Add New → Project** → import `luna-777/gunnsd`.
2. Framework preset: **Other**. Leave build command and output directory empty.
3. Deploy. Every push to `main` redeploys automatically.

## Editing content

**Officers** — in `about.html`, each person is one `<article class="officer">` block.
Copy a block per person, swap in the name, role, bio, and email. To add a photo, replace
the contents of `<div class="officer__photo">` with:

```html
<img src="assets/img/officers/firstname.jpg" alt="Full Name">
```

Crop headshots to 4:5 portrait, around 800×1000px.

**Logo** — drop the Gunn logo at `assets/img/gunn-logo.png`. It appears in the header
automatically; if the file is absent, a red "G" monogram is used instead.

**Emails** — placeholder co-president addresses are marked with `TODO` comments in
`index.html`, `about.html`, and `contact.html`. Search for `copresident` to find them all.

**Colors** — every color lives in the `:root` block at the top of `assets/css/style.css`.
Change `--crimson` to adjust the accent everywhere at once.

## Design notes

Palette is Gunn red (`#C8102E`) on near-black (`#111014`) over warm off-white paper.
Type is Fraunces for display, Public Sans for body, JetBrains Mono for anything that
reads as data — speech times, labels, locations.

The recurring device is **the flow**: the columnar sheet debaters keep during a round.
Each branch's speech order is set on it, with sides tagged and times in the right-hand
column, so the page mirrors the artifact the activity actually runs on.
