"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeCommand = void 0;
class CubeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("cube <num>")
            .description("Cubes a number")
            .action((num) => this.cube(num));
    }
    cube(num) {
        console.log(Number(num) ** 3);
    }
}
exports.CubeCommand = CubeCommand;
