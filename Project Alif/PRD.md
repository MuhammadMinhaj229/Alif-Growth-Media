# PRD.md — Product Requirements Document

> Used by the Ralph Loop (/ralph-loop) for autonomous task execution.
> Fill in every section before running /ralph-loop.

---

## Project Overview

**Project name:** [Your project name]

**Goal:** [One sentence — what this project builds/does]

**Success definition:** [How you will know this project is done]

---

## Tech Stack

- **Language:** [e.g. TypeScript, Python, Go]
- **Framework:** [e.g. Next.js, FastAPI, None]
- **Database:** [e.g. PostgreSQL, SQLite, None]
- **Deployment:** [e.g. Vercel, Railway, Local]

---

## Constraints

- [Any hard constraints — max file sizes, specific libraries, no breaking changes, etc.]
- [Security requirements]
- [Performance requirements]

---

## Tasks

> Each task must be small enough to complete in one loop iteration (< 1 hour of work).
> Include an acceptance test so Ralph Loop knows when the task is done.

---

### Task 1: [Task Name]

**Description:** [What needs to be built/changed]

**Files involved:**
- `path/to/file.ts` — [what changes]

**Acceptance criteria:**
- [ ] [Specific, testable condition — e.g. "GET /api/health returns 200"]
- [ ] [Another condition]

**Verification command:**
```bash
# Command to verify this task is complete
```

---

### Task 2: [Task Name]

**Description:** [What needs to be built/changed]

**Files involved:**
- `path/to/file.ts` — [what changes]

**Acceptance criteria:**
- [ ] [Condition]

**Verification command:**
```bash
# Command to verify this task is complete
```

---

### Task 3: [Task Name]

**Description:** [What needs to be built/changed]

**Files involved:**
- `path/to/file.ts` — [what changes]

**Acceptance criteria:**
- [ ] [Condition]

**Verification command:**
```bash
# Command to verify this task is complete
```

---

## Loop Settings

```yaml
checkpoint_on_arch_change: true   # Stop and ask before architectural changes
auto_fix_bugs: true               # Apply Rule 1 automatically
auto_add_missing_critical: true   # Apply Rule 2 automatically
commit_each_task: true            # One commit per completed task
```

---

<!-- 
RALPH LOOP INSTRUCTIONS:
1. Parse all "Task N:" sections above
2. Check progress.txt for completed task IDs
3. Execute the next incomplete task
4. Verify using the "Verification command" for each task
5. Mark COMPLETED in progress.txt after each passing task
-->
