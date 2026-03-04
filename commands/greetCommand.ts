import chalk from 'chalk';


export class GreetCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }   

    register() {
        this.program
        .command("greet <name>")
        .action((name) => this.sayHello(name))
    }

    sayHello(name) {
        console.log(chalk.green(`Hello ${name}`))
    }
}

