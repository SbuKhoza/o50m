<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Coverage lookup lives only in `src/services/coverageService.ts` over `src/data/mockCoverage.ts`; components never import mock data for coverage logic — so Firebase/API can replace the service without UI changes.
- Auth UI calls `src/services/authService.ts` placeholders only; no fake logged-in state or stored passwords until Firebase Auth is wired.
- Product/technology copy lives in `src/data/mockProducts.ts`; never add prices, speeds or limits without verified data.
