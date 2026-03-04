"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JokeCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .description("Random joke")
            .action(() => this.joke());
    }
    async joke() {
        try {
            const res = await axios_1.default.get('https://official-joke-api.appspot.com/random_joke');
            console.log(res.data.setup);
            console.log(res.data.punchline);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.JokeCommand = JokeCommand;
