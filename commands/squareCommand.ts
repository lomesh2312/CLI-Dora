export class SquareCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("square <num>")
        .description("Squares a number")
        .action((num) => this.square(num))
    }

    square(num) {
        console.log(Number(num) * Number(num))
    }
}