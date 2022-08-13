#!/usr/bin/env node
import fs from "fs";
import runMakeSaga from "./makeSaga.js";
import runMakePage from "./makePage.js";
import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

switch (process.argv[2]) {
    case '-i':
    case '--init':
        runMakeSaga(rl);
        break;
    case '-p':
    case '--page':
        if(process.argv[3]) {
            runMakePage(rl, process.argv[3]);
        } else {
            runMakePage(rl);
        }
        break;
    case '-v':
    case '--version':
        const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        console.log(`sagavox version is: `+chalk.greenBright(json.version));
        process.exit(0);
        break;
    default:
        console.log(chalk.red(`The argument "${process.argv[2]}" not found!`));
        console.log(chalk.dim(`Please read the document.`));
        process.exit(0);
}
