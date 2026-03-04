"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareCommand = void 0;
class SquareCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("square <num>")
            .description("Squares a number")
            .action((num) => this.square(num));
    }
    square(num) {
        console.log(Number(num) * Number(num));
    }
}
exports.SquareCommand = SquareCommand;
