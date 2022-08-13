#!/usr/bin/env node
import readline from "readline";
import chalk from "chalk";
import CheckSaga from "./checkSaga.js";

export default function runMakeSaga(rl) {
    rl.question(chalk.cyan('Do you want to change your project to redux-saga structure?') + chalk.gray('(Y/n) '), (answer) => {
        rl.close();
    });
    process.stdin.on('keypress', function (ch, key) {
        if(ch.toString() === 'y' || ch.toString() === 'Y' || key.name === 'return' || key.name === 'enter') {
            CheckSaga.initIndex();
            rl.close();
        }
        if(ch.toString() === 'n' || ch.toString() === 'N') {
            console.log(chalk.red('\nProcess aborted by the user.'))
            rl.close();
        }
    });
}
