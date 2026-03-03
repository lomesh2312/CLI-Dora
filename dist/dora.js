#!/usr/bin/env node
const { Command } = require('commander');
const axios = require('axios');
const program = new Command();
program
    .command("greet <name>")
    .action((name) => { console.log(`Hello ${name}`); });
program
    .command("add <num1> <num2>")
    .description("Adds two numbers")
    .action((num1, num2) => { console.log(Number(num1) + Number(num2)); });
program
    .command("subtract <num1> <num2>")
    .description("Subtracts two numbers")
    .action((num1, num2) => { console.log(Number(num1) - Number(num2)); });
program
    .command("multiply <num1> <num2>")
    .description("Multiplies two numbers")
    .action((num1, num2) => { console.log(Number(num1) * Number(num2)); });
program
    .command("square <num>")
    .description("Squares a number")
    .action((num) => { console.log(Number(num) * Number(num)); });
program
    .command("divide <num1> <num2>")
    .description("Divides two numbers")
    .action((num1, num2) => {
    if (Number(num2) === 0) {
        console.log("Error: Division by zero is not allowed.");
    }
    else {
        console.log(Number(num1) / Number(num2));
    }
});
program
    .command("power <base> <exponent>")
    .description("Raises a number to a power")
    .action((base, exponent) => { console.log(Number(base) ** Number(exponent)); });
program
    .command("cube <num>")
    .description("Cubes a number")
    .action((num) => { console.log(Number(num) ** 3); });
program
    .command("joke")
    .description("Random joke")
    .action(async () => {
    try {
        const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log(res.data.setup);
        console.log(res.data.punchline);
    }
    catch (err) {
        console.log(err);
    }
});
program
    .command("quote")
    .description("Random quote")
    .action(async () => {
    try {
        const res = await axios.get('https://zenquotes.io/api/random');
        console.log(res.data[0].q);
    }
    catch (err) {
        console.log(err);
    }
});
program
    .command("fact")
    .description("Random fact")
    .action(async () => {
    try {
        const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
        console.log(res.data.text);
    }
    catch (err) {
        console.log(err);
    }
});
program.parse();
