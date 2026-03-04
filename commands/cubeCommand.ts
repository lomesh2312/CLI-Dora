export class CubeCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("cube <num>")
        .description("Cubes a number")
        .action((num) => this.cube(num))
    }

    cube(num) {
        console.log(Number(num) ** 3)
    }
}