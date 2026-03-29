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

| Command        | Description              |
| -------------- | ------------------------ |
| `test:api`     | Run all API tests        |
| `test:auth`    | Run authentication tests |
| `test:booking` | Run booking tests        |

---