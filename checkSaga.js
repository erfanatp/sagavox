import fs from "fs";
import chalk from "chalk";
import RootSaga from "./files/templates/rootSaga.js";
import Store from "./files/templates/store.js";

class CheckSaga {

    static initIndex = () => {
        const target = "./src/index.js";
        try {
            console.log('\n'+chalk.greenBright('Making saga files...'));
            const index = fs.readFileSync(target, {encoding:'utf8', flag:'r'});
            let newContent = '';

            if (index.includes('<App/>')) {
                newContent = index.replace('<App/>', '\t<Provider store={store}>\n\t\t\t<App />\n\t\t</Provider>');
            } else if (index.includes('<App />')) {
                newContent = index.replace('<App />', '\t<Provider store={store}>\n\t\t\t<App />\n\t\t</Provider>');
            }

            if (newContent && !newContent.includes(['import store '])) {
                let replaced = newContent.search("import App from './App';") >= 0;
                if(replaced) {
                    newContent = newContent.replace("import App from './App';",
                        "import App from './App';\nimport { store } from './store';\nimport { Provider } from 'react-redux';")
                }
            }

            if(newContent) {
                fs.writeFileSync(target, newContent);
            }

            RootSaga.make();
            Store.make();

            console.log(chalk.greenBright('Your project has been wrapped by react saga.'));
            console.log(chalk.dim('You can check ./index.js.'));
            console.log(chalk.yellow("Let's continue with ") + chalk.greenBright('sagavox -p') + chalk.yellow(" command."));
        } catch (e) {
            console.log(chalk.red(e.message));
            console.log(chalk.cyan('Please check the documentation and re-run again.'));
        }
    };

}

export default CheckSaga;
