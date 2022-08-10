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
                newContent = index.replace('<App/>', '<Provider store={store}>\n\t\t\t<App />\n\t\t</Provider>');
            } else if (index.includes('<App />')) {
                newContent = index.replace('<App />', '<Provider store={store}>\n\t\t\t<App />\n\t\t</Provider>');
                console.log(newContent)
            }

            if (newContent && !newContent.includes(['import store '])) {
                let replaced = newContent.search("import App from './App';") >= 0;
                if(replaced) {
                    newContent = newContent.replace("import App from './App';",
                        "import App from './App';\nimport store from './store';\nimport { Provider } from 'react-redux';")
                }
            }

            if(newContent) {
                fs.writeFileSync(target, newContent);
            }

            RootSaga.make();
            Store.make();

            console.log(chalk.greenBright('Your project has been wrapped by react saga. ')+'You can check ./index.js.');
        } catch (e) {
            console.log(chalk.red(e.message));
            console.log(chalk.cyan('Please check the documentation and re-run again.'));
        }
    };

}

export default CheckSaga;

// let f = fs.readFileSync("undex.js", {encoding:'utf8', flag:'r'});
// f = f.replace('<App />', '<Provider store={store}>\n\t\t\t<App />\n\t\t</Provider>')
// fs.writeFileSync("undex.js", f);
