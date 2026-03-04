import axios from 'axios'

export class FactCommand {
    name;
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("fact")
        .description("Random fact")
        .action(() => this.fact())
    }

    async fact() {
        try {
            const res = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
            console.log(res.data.text)
        } catch (err) {
            console.log("Error fetching fact")
        }
    }
}