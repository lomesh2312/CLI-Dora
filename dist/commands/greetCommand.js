"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetCommand = void 0;
const chalk_1 = __importDefault(require("chalk"));
class GreetCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .action((name) => this.sayHello(name));
    }
    sayHello(name) {
        console.log(chalk_1.default.green(`Hello ${name}`));
    }
}
exports.GreetCommand = GreetCommand;
