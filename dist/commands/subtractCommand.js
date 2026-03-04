"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubtractCommand = void 0;
class SubtractCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("subtract <num1> <num2>")
            .description("Subtracts two numbers")
            .action((num1, num2) => this.sub(num1, num2));
    }
    sub(num1, num2) {
        console.log(Number(num1) - Number(num2));
    }
}
exports.SubtractCommand = SubtractCommand;
