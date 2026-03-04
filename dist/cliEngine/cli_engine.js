"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI_Engine = void 0;
const commander_1 = require("commander");
class CLI_Engine {
    constructor() {
        this.program = new commander_1.Command();
    }
    registerCommands(commands) {
        commands.forEach(CommandClass => {
            const commandInstance = new CommandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
exports.CLI_Engine = CLI_Engine;
