export class PowerCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("power <base> <exponent>")
        .description("Raises a number to a power")
        .action((base, exponent) => this.power(base, exponent))
    }

    power(base, exponent) {
        console.log(Number(base) ** Number(exponent))
    }
}