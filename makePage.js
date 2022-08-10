#!/usr/bin/env node
import readline from "readline";
import chalk from "chalk";
import CheckSaga from "./checkSaga.js";
import createFiles from "./files/createFiles.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default function runMakePage(name) {
    if(name) {
        createFiles(name);
        process.exit(0);
    } else {
        rl.question(chalk.cyan('Enter the page name: '), (page) => {
            createFiles(name);
            rl.close();
        });
    }
}
