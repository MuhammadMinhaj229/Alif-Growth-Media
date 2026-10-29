# Engineering Workflow

This repository uses GitHub as the source of truth and Netlify for production hosting. The application lives in `alif-growth-media/` and uses TanStack Start, React, TypeScript, Vite and Tailwind CSS.

## Change lifecycle

1. Confirm the scope, affected routes and behavior that must remain unchanged.
2. Create a short-lived feature branch from `main`; do not work directly on `main`.
3. For visual work, record the approved design/reference and target desktop/mobile viewports before coding.
4. Implement the smallest maintainable change in the existing application. Generated code is a candidate, not an automatically trusted deliverable.
5. Open a pull request and review the code diff, generated dependencies, route changes and any data or environment assumptions.
6. Wait for GitHub Actions checks to pass. Review the Netlify Deploy Preview if it is available for that pull request.
7. Manually inspect the preview, approve the pull request and merge only after the review is complete.
8. Confirm the production deploy succeeds and run a basic post-deploy smoke check.

## Automated quality checks

The `.github/workflows/ci.yml` workflow runs on pull requests to `main`, pushes to `main`, and manual dispatches. It installs locked dependencies, runs the substantive ESLint rules, checks formatting for the new Playwright files, type-checks the app, builds with the Netlify adapter enabled, then runs the Playwright Chromium smoke suite. The current repository-wide Prettier rule reports hundreds of pre-existing formatting violations in application files, so CI temporarily disables only that ESLint rule to avoid mass-formatting unrelated production code. A separate cleanup should reduce that baseline before repository-wide formatting is made a hard gate. Playwright reports are uploaded as workflow artifacts when available.

Run the same checks locally from the app directory:

```sh
cd alif-growth-media
npm ci
npm run lint:ci
npm run format:check
npm run typecheck
NETLIFY=true npm run build
npx playwright install chromium
npm run test:e2e
```

The initial browser suite covers the homepage primary call to action, key public routes, and horizontal overflow at a 390px viewport. Extend it whenever a new critical user flow is introduced. Chromium is the initial CI browser to keep the first pipeline focused; add Firefox/WebKit after the base suite is stable.

## Optional UI generation with v0

v0 is an optional implementation accelerator, not a production authority or a required CI dependency.

- Import the existing GitHub repository only after confirming the correct repo and access.
- Work on a dedicated feature branch; never connect generated changes directly to the production branch.
- Prompt it to preserve TanStack Start, React, TypeScript, current route conventions, existing design tokens and installed component libraries.
- Ask for the smallest in-scope diff. Reject unrelated rewrites, unnecessary packages, duplicate routing systems, placeholder production data and new backend assumptions.
- Review the diff in GitHub, then run the same CI and preview checks as any hand-written change.
- Do not copy a full standalone generated app into this repository when only a component or page section is needed.

## Supabase and database testing

The existing app dependency manifest does not currently declare the Supabase client or a database test suite. Do not add a database dependency simply to satisfy the workflow. Enable this section only when a feature actually needs persistence, authentication or database-backed behavior.

When a Supabase-backed feature is added:

1. Use a dedicated development/test project or isolated Supabase preview branch; never point automated tests at production.
2. Commit schema changes as migrations and review them with the application change.
3. Keep test-only connection details in local ignored environment files or GitHub Actions secrets. Do not commit credentials or database URLs containing passwords.
4. Prefer least-privilege test credentials. Keep service-role keys server-side only; never expose them through `VITE_*` variables or client bundles.
5. Add a separate database integration-test job only when deterministic setup, migrations/seed data and cleanup have been defined.
6. Run the same tests against the isolated environment before merging. Do not make a successful browser smoke test stand in for database migration or authorization tests.

Supabase is therefore an intentional future integration point, not an active CI dependency in this change.

## Netlify preview and release

Netlify is the production host for this site. Use the Deploy Preview associated with the pull request when the repository/site integration provides one. The CI build explicitly sets `NETLIFY=true` so the build uses the Netlify Nitro preset.

Before merging, verify that the preview is built from the expected branch and commit, routes such as `/services` and `/contact` render, and no production environment variables are required by the test suite. After merging, confirm that Netlify publishes the intended `main` commit successfully. A green GitHub job alone does not confirm that the live deploy completed.
