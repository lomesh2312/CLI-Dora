"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCommand = void 0;
const axios_1 = __importDefault(require("axios"));
class QuoteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Random quote")
            .action(() => this.quote());
    }
    async quote() {
        try {
            const res = await axios_1.default.get('https://zenquotes.io/api/random');
            console.log(res.data[0].q);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.QuoteCommand = QuoteCommand;
