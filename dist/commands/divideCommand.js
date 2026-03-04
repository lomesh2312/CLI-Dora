"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivideCommand = void 0;
class DivideCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("divide <num1> <num2>")
            .description("Divides two numbers")
            .action((num1, num2) => this.divide(num1, num2));
    }
    divide(num1, num2) {
        if (Number(num2) === 0) {
            console.log("Error: Division by zero is not allowed.");
        }
        else {
            console.log(Number(num1) / Number(num2));
        }
    }
}
exports.DivideCommand = DivideCommand;
