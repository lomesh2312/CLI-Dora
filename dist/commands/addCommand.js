"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCommand = void 0;
class AddCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("add <num1> <num2>")
            .description("Adds two numbers")
            .action((num1, num2) => this.add(num1, num2));
    }
    add(num1, num2) {
        console.log(Number(num1) + Number(num2));
    }
}
exports.AddCommand = AddCommand;
