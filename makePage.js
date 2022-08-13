#!/usr/bin/env node
import readline from "readline";
import chalk from "chalk";
import CheckSaga from "./checkSaga.js";
import createFiles from "./files/createFiles.js";

export default function runMakePage(rl, name) {
    if(name) {
        createFiles(name);
        process.exit(0);
    } else {
        rl.question(chalk.cyan('Enter the page name: ') + chalk.gray('(users) '), (page) => {
            createFiles(page || "users");
            rl.close();
        });
    }
}
