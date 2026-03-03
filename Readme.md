# 🚀 CLI-Dora

CLI-Dora is a fully functional Command Line Interface (CLI) tool built using **Node.js + TypeScript**.

It provides:

- 🧮 Mathematical operations  
- 👋 Greeting functionality  
- 🌐 Integration with 3 public APIs (Jokes, Quotes, Facts)  
- 🌍 Global CLI support using `npm link`  

---

## 🛠 Tech Stack

- Node.js  
- TypeScript  
- Commander.js  
- Axios  

---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lomesh2312/CLI-Dora.git
cd CLI-Dora
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Compile TypeScript

```bash
npx tsc
```

This generates the compiled JavaScript inside the `dist/` folder.

---

## 🌍 Run as Global CLI (Using npm link)

To use CLI-Dora as a global command:

```bash
npm link
```

Now you can use:

```bash
dora <command>
```

### Example:

```bash
dora greet Manik
```

---

## 📚 Available Commands

Below are all available commands in CLI-Dora.

---

### 👋 greet `<name>`

Greets the user by name.

```bash
dora greet Manik
```

---

### ➕ add `<num1>` `<num2>`

Adds two numbers.

```bash
dora add 5 3
```

---

### ➖ subtract `<num1>` `<num2>`

Subtracts second number from first.

```bash
dora subtract 10 4
```

---

### ✖ multiply `<num1>` `<num2>`

Multiplies two numbers.

```bash
dora multiply 6 7
```

---

### ➗ divide `<num1>` `<num2>`

Divides first number by second.

```bash
dora divide 10 2
```

---

### 🔢 power `<base>` `<exponent>`

Raises base to the power of exponent.

```bash
dora power 2 5
```

---

### 🟦 square `<number>`

Returns square of a number.

```bash
dora square 4
```

---

### 🟪 cube `<number>`

Returns cube of a number.

```bash
dora cube 3
```

---

### 😂 joke

Fetches a random joke from the Official Joke API.

```bash
dora joke
```

---

### 💬 quote

Fetches a random quote from the ZenQuotes API.

```bash
dora quote
```

---

### 📚 fact

Fetches a random fact from the Useless Facts API.

```bash
dora fact
```

---

## 🌐 API Integrations

CLI-Dora integrates the following public APIs:

- Official Joke API  
- ZenQuotes  
- Useless Facts API  

---

## 📁 Project Structure

```
CLI-Dora/
│
├── src/
│   └── dora.ts
│
├── dist/
│   └── dora.js
│
├── package.json
├── tsconfig.json
└── README.md
```

---

💡 Built with TypeScript and designed for global CLI usage.