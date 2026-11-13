# Tier Party — split site build

Marvel Rivals Season 11 tier list / map plans / patch notes, generated from
[`tier-party-shell.html`](../tier-party-shell.html) by [`build.py`](../build.py).

This folder is what you deploy. `index.html` is ~93 KB; everything else lives in
`data/` (~4.7 MB, mostly the baked animated hero icons) and loads as plain
`<script>` tags — no fetch, no build step, so the site also works when opened
directly from disk (`file://`).

## Run it locally

```
python -m http.server 8777
# then open http://localhost:8777/tier-party-site/index.html
```

or just double-click `index.html`.

## Deploy to GitHub Pages

The repo is already committed and ships with a deploy workflow (`.github/workflows/pages.yml`),
so deployment is three steps:

1. **Create the repo** on github.com — public, named e.g. `tier-party`, and do *not*
   initialize it with a README (commits already exist locally).
2. **Push** from this folder:
   ```
   git remote add origin https://github.com/<you>/tier-party.git
   git push -u origin main
   ```
3. **Turn Pages on once**: repo → Settings → Pages → Build and deployment →
   Source: **GitHub Actions**.

The first workflow run publishes the site at `https://<you>.github.io/tier-party/`
(about a minute). Every future `git push` redeploys automatically; you can also
re-run it from the Actions tab (workflow_dispatch).

Under a subpath (`/tier-party/`) everything works as-is: all asset references are
relative, and routing is hash-based (`#patch`, `#diamond-vanguard`, `#maps`).
`.nojekyll` skips Jekyll processing so the large data files serve untouched.

## Notes

- Hash deep links (`#patch`, `#diamond-vanguard`, `#maps`) and the
  localStorage state key (`tp.v2`) work unchanged.
- Hero icons hotlink from the Marvel Rivals Wiki CDN and require
  `referrerpolicy="no-referrer"` on every `<img>` — already in the shell.
- Rebuild after editing the shell or any `data/s11-*.js`:
  `python build.py` (from the project root). It writes both the split site
  and the single-file `Tier Party 11.html`.
