# Learn TypeScript

A hands-on TypeScript project for learning programming fundamentals step by step. Each module contains **examples** (ready-to-run demonstrations) and **tasks** (exercises for you to complete).

## Prerequisites

Before you start, make sure you have the following installed:

| Tool | Minimum Version | Check Command |
|------|-----------------|---------------|
| [Node.js](https://nodejs.org/) | 18.x or later | `node --version` |
| [npm](https://www.npmjs.com/) | 9.x or later (comes with Node.js) | `npm --version` |

> **Tip:** If `node --version` shows a version below 18, download the latest LTS from [nodejs.org](https://nodejs.org/).

## Getting Started

### 1. Clone or download this project

If you received this as a ZIP file, extract it. If it is in a Git repository:

```bash
git clone <repository-url>
cd l-typescript
```

### 2. Install dependencies

Run this command once in the project root folder:

```bash
npm install
```

This installs TypeScript and `tsx` (a tool to run `.ts` files directly without compiling first).

### 3. Verify the setup

Check that TypeScript compiles without errors:

```bash
npm run check
```

Run your first example:

```bash
npm run example src/01-data-types/examples/basic-types.ts
```

If you see output in the terminal, your environment is ready!

## Project Structure

```
learn-typescript/
├── src/
│   ├── 01-data-types/          # Strings, numbers, booleans, arrays, enums
│   │   ├── examples/           # Read and run these first
│   │   └── tasks/              # Your exercises
│   ├── 02-operators/           # Arithmetic, comparison, logical operators
│   ├── 03-conditions/          # if/else, switch statements
│   ├── 04-looping/             # for, while, do...while loops
│   ├── 05-functions/           # Functions, arrow functions, callbacks
│   ├── 06-oop/                 # Classes, interfaces, inheritance
│   ├── 07-arrays-and-objects/  # Array methods, objects, destructuring
│   └── 08-generics/            # Generic types and type utilities
├── package.json                # Project configuration and scripts
├── tsconfig.json               # TypeScript compiler settings
└── README.md                   # This file
```

## How to Learn Each Module

Follow this workflow for every topic:

1. **Read the examples** — Open files in the `examples/` folder and read the code with comments.
2. **Run the examples** — Execute them in the terminal to see the output.
3. **Complete the tasks** — Open files in the `tasks/` folder and follow the `TODO` instructions.
4. **Run your solutions** — Execute your task file and compare output with the expected results in the comments.
5. **Check for errors** — Run `npm run check` to catch type errors before submitting.

## Running Code

### Run an example or task file

```bash
npm run example src/<module>/examples/<filename>.ts
```

**Examples:**

```bash
# Module 1 — Data Types
npm run example src/01-data-types/examples/basic-types.ts

# Module 2 — Operators
npm run example src/02-operators/examples/arithmetic-and-logical.ts

# Module 5 — Functions (task)
npm run example src/05-functions/tasks/task-01.ts
```

### Alternative: use npx directly

```bash
npx tsx src/01-data-types/examples/basic-types.ts
```

### Compile all TypeScript to JavaScript

```bash
npm run build
```

Compiled files will appear in the `dist/` folder. You normally do not need this during learning — `npm run example` is enough.

### Check for type errors (without running)

```bash
npm run check
```

## Module Overview

| # | Module | Topics Covered |
|---|--------|----------------|
| 01 | Data Types | `string`, `number`, `boolean`, arrays, tuples, enums, `any`, `unknown` |
| 02 | Operators | Arithmetic, comparison, logical, assignment, ternary |
| 03 | Conditions | `if`/`else`, `switch`, nested conditions |
| 04 | Looping | `for`, `while`, `do...while`, `break`, `continue` |
| 05 | Functions | Declarations, arrow functions, default/optional/rest parameters |
| 06 | OOP | Classes, interfaces, inheritance, abstract classes, access modifiers |
| 07 | Arrays & Objects | `map`, `filter`, `reduce`, destructuring, spread operator |
| 08 | Generics | Generic functions, interfaces, `Pick`, `Partial`, `Readonly` |

## Working on Tasks

Each task file contains:

- **Instructions** at the top explaining what to do
- **`TODO` comments** marking where you should write code
- **Test code** at the bottom with expected output in comments

Example workflow:

```bash
# 1. Open the task file in your editor
#    src/02-operators/tasks/task-01.ts

# 2. Replace placeholder code where you see TODO

# 3. Run and verify
npm run example src/02-operators/tasks/task-01.ts
```

Compare your terminal output with the `// expected:` comments in the test section.

## Recommended Study Order

Work through the modules in numerical order (01 → 08). Each module builds on concepts from the previous ones.

Estimated time per module:

| Module | Examples | Tasks | Total |
|--------|----------|-------|-------|
| 01–04  | ~15 min  | ~30 min | ~45 min |
| 05–06  | ~20 min  | ~40 min | ~60 min |
| 07–08  | ~20 min  | ~45 min | ~65 min |

## Troubleshooting

### `command not found: npm` or `command not found: node`

Node.js is not installed or not in your PATH. Install it from [nodejs.org](https://nodejs.org/) and restart your terminal.

### `Cannot find module` error

Dependencies are not installed. Run:

```bash
npm install
```

### TypeScript errors when running tasks

This is expected while you are working! Fix the errors indicated by the compiler, then run again. Use:

```bash
npm run check
```

to see all errors at once.

### `npm run example` shows no output

Make sure you included the full file path after `npm run example`. The path must start with `src/`.

## Tips for Success

- **Type everything explicitly** at first — it helps you learn TypeScript's type system.
- **Read error messages carefully** — TypeScript errors usually tell you exactly what is wrong.
- **Do not skip examples** — they introduce patterns used in the tasks.
- **Experiment** — change values in example files and re-run to see what happens.
- **Ask for help** when stuck for more than 15 minutes on a single task.

## Available npm Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies (run once) |
| `npm run example <file>` | Run a TypeScript file directly |
| `npm run check` | Check all files for type errors |
| `npm run build` | Compile TypeScript to JavaScript in `dist/` |

---

Happy learning! 🎓
