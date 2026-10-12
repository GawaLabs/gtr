# Claude Code Project Rules

## Project
- Build the Gawalise TrailRun 2026 homepage.
- Stack: existing Angular version, TypeScript, and Tailwind CSS.
- All visible website content must be in Bahasa Indonesia.
- `PRD.md` is the source of truth for product requirements.

## Scope
- Implement the homepage only.
- Do not build separate category, location, or contact pages.
- Do not add backend, registration, payment, database, or API features.
- Do not invent event details, contact information, or URLs.

## Token Efficiency
- Inspect only files relevant to the current task.
- Never read the entire repository without a specific reason.
- Do not reread `PRD.md` unless needed to resolve a requirement.
- Avoid repeating information already available in the current context.
- Do not explain routine actions or provide lengthy progress updates.
- Ask before expanding scope or introducing dependencies.

## Coding Rules
- Preserve existing project conventions and configuration.
- Reuse existing components and assets where appropriate.
- Prefer small, focused changes over broad refactoring.
- Avoid unnecessary dependencies and duplicated code.
- Follow Angular and Tailwind conventions already in the project.

## Verification
- Run the smallest relevant check after each task.
- Run a production build after completing a major milestone.
- Fix errors introduced by the current changes.
- Never claim a test or build passed unless it was actually run.

## Final Response
Report only:
1. Files changed.
2. What was implemented.
3. Checks run and their actual results.
4. Any blockers or missing information.