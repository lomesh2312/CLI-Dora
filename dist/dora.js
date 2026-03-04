#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_engine_1 = require("./cliEngine/cli_engine");
const greetCommand_1 = require("./commands/greetCommand");
const addCommand_1 = require("./commands/addCommand");
const subtractCommand_1 = require("./commands/subtractCommand");
const multiplyCommand_1 = require("./commands/multiplyCommand");
const divideCommand_1 = require("./commands/divideCommand");
const squareCommand_1 = require("./commands/squareCommand");
const cubeCommand_1 = require("./commands/cubeCommand");
const powerCommand_1 = require("./commands/powerCommand");
const jokeCommand_1 = require("./commands/jokeCommand");
const quoteCommand_1 = require("./commands/quoteCommand");
const factCommand_1 = require("./commands/factCommand");
const engine = new cli_engine_1.CLI_Engine();
engine.registerCommands([
    greetCommand_1.GreetCommand,
    addCommand_1.AddCommand,
    subtractCommand_1.SubtractCommand,
    multiplyCommand_1.MultiplyCommand,
    divideCommand_1.DivideCommand,
    squareCommand_1.SquareCommand,
    cubeCommand_1.CubeCommand,
    powerCommand_1.PowerCommand,
    jokeCommand_1.JokeCommand,
    quoteCommand_1.QuoteCommand,
    factCommand_1.FactCommand
]);
engine.run();
