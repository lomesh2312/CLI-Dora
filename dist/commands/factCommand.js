"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class FactCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("fact")
            .description("Random fact")
            .action(() => this.fact());
    }
    async fact() {
        try {
            const res = await axios_1.default.get('https://uselessfacts.jsph.pl/random.json?language=en');
            console.log(res.data.text);
        }
        catch (err) {
            console.log("Error fetching fact");
        }
    }
}
exports.FactCommand = FactCommand;
