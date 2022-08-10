#!/usr/bin/env node
import readline from "readline";
import chalk from "chalk";
import CheckSaga from "./checkSaga.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export default function runMakeSaga() {
    rl.question(chalk.cyan('Do you want to change your project to redux-saga structure?') + chalk.gray('(Y/n)'), (page) => {
        rl.close();
    });
    process.stdin.on('keypress', function (ch, key) {
        if(ch.toString() === 'y' || ch.toString() === 'Y' || key.name === 'return' || key.name === 'enter') {
            CheckSaga.initIndex();
            rl.close();
        }
    });
}
