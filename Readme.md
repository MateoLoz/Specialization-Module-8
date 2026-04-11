# API Tests - Test Execution Guide

## 📦 Project Overview

This project contains automated API tests built using **Mocha**, **Chai**, and **Axios**. The tests validate endpoints such as authentication and booking operations.

---

## ⚙️ Prerequisites

Before running the tests, make sure you have:

* Node.js installed (recommended v18+)
* npm installed

---

## 📥 Installation

Install all dependencies:

```bash
npm install
```

---

## 🔐 Environment Configuration

Create a `.env` file in the root of the project and define the required variables:

```env
BASE_URL=https://restful-booker.herokuapp.com
TIMEOUT=10000

AUTH_USERNAME=admin
AUTH_PASSWORD=password123
```

---

## 🚀 Running Tests

### ▶️ Run all API tests

```bash
npm run test:api
```

---

### 🔐 Run only authentication tests

```bash
npm run test:auth
```

---

### 🏨 Run only booking tests

```bash
npm run test:booking
```

---

## 🧹 Linting & Formatting

This project uses **ESLint** for static code analysis and **Prettier** for consistent code formatting.

### ▶️ Check for lint errors

Runs ESLint across the entire project and reports any rule violations:

```bash
npm run lint
```

### 🔧 Auto-fix lint and format errors

Automatically fixes all issues that ESLint and Prettier can resolve (formatting, quote style, trailing commas, etc.):

```bash
npm run lint:fix
```

### 🔍 Check formatting without modifying files

Verifies that all files match Prettier's formatting rules. Useful in CI to catch unformatted code:

```bash
npm run format:check
```

### ✏️ Apply Prettier formatting

Rewrites all files to match Prettier's formatting rules:

```bash
npm run format
```

### 📋 ESLint Rules Configured

| Rule | Level | Description |
| ---- | ----- | ----------- |
| `prettier/prettier` | error | Enforces Prettier formatting as an ESLint rule |
| `no-unused-vars` | error | Disallows declared variables that are never used |
| `eqeqeq` | error | Requires `===` instead of `==` |
| `no-console` | warn | Warns on `console.log` (allows `warn`, `error`, `info`) |
| `no-use-before-define` | error | Variables must be defined before use |
| `prefer-const` | error | Requires `const` when a variable is never reassigned |

### 📋 Prettier Configuration

Prettier is configured via `.prettierrc` with the following rules:

| Option | Value |
| ------ | ----- |
| `semi` | `true` |
| `singleQuote` | `true` |
| `tabWidth` | `2` |
| `trailingComma` | `es5` |
| `printWidth` | `100` |
| `endOfLine` | `lf` |

---

## ⏱️ Timeout Configuration

All tests are configured with a timeout of **10 seconds**:

```bash
--timeout 10000
```

You can adjust this value in the `package.json` if needed.

---

## 📁 Project Structure

```
src/
 ├── tests/
 │    ├── auth.test.js
 │    ├── booking.test.js
 ├── client/
 ├── test-data/
 ├── services/
 ├── schemas/
 └── utils/
```

---

## 🧪 Notes

* Tests use **Axios** for HTTP requests.
* **Chai** is used for assertions.
* **Joi** is used for request/response validation.
* Environment variables are loaded using **dotenv**.

---

## 🐞 Troubleshooting

If tests fail:

* Verify your `.env` configuration
* Ensure the API is reachable
* Check request headers (especially `Content-Type` and `Accept`)
* Increase timeout if needed

---

## ✅ Example Command

```bash
npm run test:booking
```

---

## 📌 Summary

| Command | Description |
| ------- | ----------- |
| `test:api` | Run all API tests |
| `test:auth` | Run authentication tests |
| `test:booking` | Run booking tests |
| `lint` | Check for ESLint errors |
| `lint:fix` | Auto-fix ESLint and Prettier errors |
| `format` | Apply Prettier formatting |
| `format:check` | Verify formatting without modifying files |

---