# 🚀 CLI-Dora

CLI-Dora is a fully functional Command Line Interface (CLI) tool built using **Node.js and TypeScript**.  
It follows an **OOP-based architecture** and is designed to run as a global CLI tool.

---

## ✨ Features

- 🧮 Mathematical operations (add, subtract, multiply, divide, power, square, cube)
- 👋 Greeting command
- 🌐 Integration with 3 public APIs:
  - Random Jokes  
  - Random Quotes  
  - Random Facts  
- 🌍 Global CLI support using `npm link`
- 🧩 Modular OOP architecture (Command Pattern)

---

## 🛠 Tech Stack

- Node.js  
- TypeScript  
- Commander.js  
- Axios  
- Chalk  

---

## ⚙ Requirements

- Node.js v18+  
- npm  

Check version:

```bash
node -v
```

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

This generates compiled JavaScript files inside the `dist/` folder.

---

## 🌍 Run as Global CLI

Make sure your `package.json` contains:

```json
"bin": {
  "dora": "./dist/dora.js"
}
```

Then run:

```bash
npm link
```

Now you can use:

```bash
dora <command>
```

---

## 📚 Available Commands

### 👋 greet `<name>`

```bash
dora greet Manik
```

Output:
```
Hello Manik
```

---

### ➕ add `<num1>` `<num2>`

```bash
dora add 5 3
```

---

### ➖ subtract `<num1>` `<num2>`

```bash
dora subtract 10 4
```

---

### ✖ multiply `<num1>` `<num2>`

```bash
dora multiply 6 7
```

---

### ➗ divide `<num1>` `<num2>`

```bash
dora divide 10 2
```

Handles division by zero safely.

---

### 🔢 power `<base>` `<exponent>`

```bash
dora power 2 5
```

---

### 🟦 square `<number>`

```bash
dora square 4
```

---

### 🟪 cube `<number>`

```bash
dora cube 3
```

---

### 😂 joke

Fetches a random joke from Official Joke API.

```bash
dora joke
```

---

### 💬 quote

Fetches a random quote from ZenQuotes API.

```bash
dora quote
```

---

### 📚 fact

Fetches a random fact from Useless Facts API.

```bash
dora fact
```

---

## 🌐 API Integrations

CLI-Dora integrates the following public APIs:

- Official Joke API  
- ZenQuotes API  
- Useless Facts API  

---

## 📁 Project Structure

```
CLI-Dora/
│
├── src/
│   ├── dora.ts
│   ├── cliEngine/
│   │   └── cli_engine.ts
│   └── commands/
│       ├── addCommand.ts
│       ├── subtractCommand.ts
│       ├── multiplyCommand.ts
│       ├── divideCommand.ts
│       ├── powerCommand.ts
│       ├── squareCommand.ts
│       ├── cubeCommand.ts
│       ├── greetCommand.ts
│       ├── jokeCommand.ts
│       ├── quoteCommand.ts
│       └── factCommand.ts
│
├── dist/
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧠 Architecture

- Object-Oriented Design  
- Command Pattern implementation  
- Modular structure (Each command in separate file)  
- Easily scalable for adding new commands  

---

## 👨‍💻 Author

**Lomesh Keshriya**

---

## 📄 License

This project is licensed under the MIT License.