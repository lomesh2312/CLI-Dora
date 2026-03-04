export class MultiplyCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("multiply <num1> <num2>")
        .description("Multiplies two numbers")
        .action((num1, num2) => this.multiply(num1, num2))
    }

    multiply(num1, num2) {
        console.log(Number(num1) * Number(num2))
    }
}