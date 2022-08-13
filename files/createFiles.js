import fs from "fs";
import Constants from "./templates/constants.js";
import Action from "./templates/action.js";
import API from "./templates/api.js";
import Saga from "./templates/saga.js";
import Reducer from "./templates/reducer.js";
import chalk from "chalk";
import Page from "./templates/Page.js";

const src = "./src/pages";

const createFolders = () => {
    if (!fs.existsSync(src)) {
        fs.mkdirSync(src);
    }
};

const createFiles = (page) => {
    createFolders();

    let dir = `${src}/${page}`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);

        fs.writeFile(`${dir}/action.js`, "", function (err) {
            if (err) throw err;
        });
        fs.writeFile(`${dir}/api.js`, "", function (err) {
            if (err) throw err;
        });
        fs.writeFile(`${dir}/constants.js`, "", function (err) {
            if (err) throw err;
        });
        fs.writeFile(`${dir}/reducer.js`, "", function (err) {
            if (err) throw err;
        });
        fs.writeFile(`${dir}/saga.js`, "", function (err) {
            if (err) throw err;
        });

        Page.make(page);
        Constants.make(page);
        Action.make(page);
        API.make(page);
        Saga.make(page);
        Reducer.make(page);

        console.log(chalk.greenBright(`All necessary files has been created at ./src/pages/${page} folder.`));

    } else {
        console.log(chalk.red(`The page (${page}) you have entered exists. Please try another name!`));
    }
};

export default createFiles;
