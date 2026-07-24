# andyzhou.ai

Personal site. Plain Jekyll, no theme, no build step beyond what GitHub Pages
does on push to `master`.

## Editing content

Content is data; the templates rarely need to change.

| What | Where |
| --- | --- |
| Name, role, description, profile links, analytics ID | `_config.yml` |
| Projects in "What I'm building" | `_data/work.yml` |
| Dated entries in "Updates" | `_data/news.yml` |
| Publications | `_data/papers.yml` |
| Hero copy and section order | `index.html` |
| Page shell, meta tags, nav, footer | `_layouts/default.html` |

A paper with `selected: true` appears on the page directly; everything else is
folded into the "All publications" disclosure. Order in the file is the order on
the page — newest first.

## Design

One stylesheet (`assets/css/site.css`), one small script
(`assets/js/site.js`) for the theme switch and the header hairline. Dark is the
default; the choice persists in `localStorage`. Colors, spacing, and radii are
custom properties at the top of the stylesheet — change them there, not inline.

Scroll reveals use `animation-timeline: view()`, so browsers without
scroll-driven animations simply show the content. Nothing depends on JavaScript
to become visible.

## Local preview

```bash
bundle exec jekyll serve   # requires ruby + `gem install jekyll`
```

## Deployment

`.github/workflows/jekyll-gh-pages.yml` builds and deploys on every push to
`master`. The custom domain is in `CNAME`.
