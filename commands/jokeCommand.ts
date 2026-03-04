import axios from 'axios';

export class JokeCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("joke")
        .description("Random joke")
        .action(() => this.joke())
            }

    async joke() {
        try {
            const res = await axios.get('https://official-joke-api.appspot.com/random_joke')
            console.log(res.data.setup)
            console.log(res.data.punchline)
        } catch (err) {
            console.log(err)
        }
    }
}

