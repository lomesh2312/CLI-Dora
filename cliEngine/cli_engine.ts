import { Command } from 'commander';

export class CLI_Engine {
    private program: Command;

    constructor() {
        this.program = new Command();
    }

    registerCommands(commands: any[]) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }

    run() {
        this.program.parse();
    }
}