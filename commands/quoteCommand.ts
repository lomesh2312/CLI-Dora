import axios from 'axios'

export class QuoteCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("quote")
        .description("Random quote")
        .action(() => this.quote())
    }

    async quote() {
        try {
            const res = await axios.get('https://zenquotes.io/api/random')
            console.log(res.data[0].q)
        } catch (err) {
            console.log(err)
        }
    }
}