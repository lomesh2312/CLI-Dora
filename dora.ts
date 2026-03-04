#!/usr/bin/env node

import { CLI_Engine } from './cliEngine/cli_engine';

import { GreetCommand } from './commands/greetCommand';
import { AddCommand } from './commands/addCommand';
import { SubtractCommand } from './commands/subtractCommand';
import { MultiplyCommand } from './commands/multiplyCommand';
import { DivideCommand } from './commands/divideCommand';
import { SquareCommand } from './commands/squareCommand';
import { CubeCommand } from './commands/cubeCommand';
import { PowerCommand } from './commands/powerCommand';
import { JokeCommand } from './commands/jokeCommand';
import { QuoteCommand } from './commands/quoteCommand';
import { FactCommand } from './commands/factCommand';

const engine = new CLI_Engine();

engine.registerCommands([
  GreetCommand,
  AddCommand,
  SubtractCommand,
  MultiplyCommand,
  DivideCommand,
  SquareCommand,
  CubeCommand,
  PowerCommand,
  JokeCommand,
  QuoteCommand,
  FactCommand
]);

engine.run();