#!/usr/bin/env node
import fs from "fs";
import runMakeSaga from "./makeSaga.js";
import runMakePage from "./makePage.js";
import chalk from "chalk";

switch (process.argv[2]) {
    case '-i':
    case '--init':
        runMakeSaga();
        break;
    case '-p':
    case '--page':
        if(process.argv[3]) {
            runMakePage(process.argv[3]);
        } else {
            runMakePage();
        }
        break;
    case '-v':
    case '--version':
        const json = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        console.log(`sagavox version is: `+chalk.greenBright(json.version));
        process.exit(0);
        break;
}
