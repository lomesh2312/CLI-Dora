const { execSync } = require("child_process");
const chalk = require('chalk');
class Init_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init_ts <folderName>")
            .description("Initializes a TypeScript project")
            .action((folderName) => this.initTS(folderName));
    }
    initTS(folderName) {
        console.log(chalk.green("Initializing TypeScript project"));
        this.run(`mkdir ${folderName}`);
        this.run(`cd ${folderName} && npm init -y`);
        this.run(`cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`);
        this.run(`cd ${folderName} && npx tsc --init`);
        console.log(chalk.green("TypeScript project created"));
    }
    run(command) {
        execSync(command, { stdio: "inherit" });
    }
}
