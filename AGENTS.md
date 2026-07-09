# AGENTS.md

## Commands

```shell
pnpm install          # Must use pnpm (packageManager: pnpm@11.10.0)
pnpm docs:dev         # Dev server on port 5391
pnpm docs:build       # Production build → docs/.vitepress/dist
pnpm docs:preview     # Preview built site locally
```

## Project structure

- `docs/source/` — Markdown content (`srcDir: './source'` in VitePress config)
  - `zh/` — Chinese locale (`/zh/`)
  - `ja/` — Japanese locale (`/ja/`)
  - `public/` — Static assets (images etc., referenced as `/images/...`)
- `docs/.vitepress/config.ts` — VitePress config using `defineConfigWithTheme`
- `docs/.vitepress/composition/` — Reusable config helpers (sidebar, nav, head)
- `docs/.vitepress/theme/` — Custom theme extending `vitepress/theme-without-fonts`
- `docs/.vitepress/dist/` — Build output (gitignored)
- `docs/.vitepress/cache/` — Dev cache (gitignored)

## Architecture notes

- **Bilingual**: zh-CN and ja. Root `/` auto-redirects to `/zh/`.
- **Custom theme**: Uses `defineConfigWithTheme<DefaultTheme.Config & CustomTheme.Config>()` in config.ts. Theme extends `vitepress/theme-without-fonts` — no bundled Google Fonts, any custom fonts must be loaded separately in custom.css.
- **Sidebar**: Defined programmatically in `docs/.vitepress/composition/sidebar/`. Each locale path key gets its own sidebar config. When adding content with a new path prefix, add a corresponding sidebar function.
- **No test/lint/typecheck setup** — this is a static blog.

## CI / Deploy

- GitHub Actions deploys to `gh-pages` on push to branch `vite-press` (not `main`).
- Workflow: install → `pnpm docs:build` → deploy `docs/.vitepress/dist`.

## Markdown conventions

- Follow markdownlint rules.
- Sentences end with periods or termination marks.
- Headings must not contain punctuation.
- Hard line breaks use two trailing spaces (the VitePress line break convention can differ — but this repo uses double-space).
