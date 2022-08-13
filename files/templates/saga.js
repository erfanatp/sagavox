import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import capitalizeFirstLetter from "../../utils/utils.js";

const __filename = path.basename(fileURLToPath(import.meta.url));

class Saga {

    static make = (name) => {
        const dir = `./src/pages/${name}/${__filename}`;
        const upperName = name.toUpperCase();
        let content = `import { call, put, takeLatest } from "redux-saga/effects";\n`;
        content += `import {${upperName}, ${upperName}_SUCCESS, ${upperName}_FAILED} from "./constants";\n`;
        content += `import api from "./api";\n`;
        content += `import {${name}ActionFailed, ${name}ActionSuccess} from "./action";\n`;
        content += `\n`;
        content += `export default function* ${capitalizeFirstLetter(name)}Saga() {\n`;
        content += `    yield takeLatest(${upperName}, get${capitalizeFirstLetter(name)});\n`;
        content += `}\n`;
        content += `\n`;
        content += `function* get${capitalizeFirstLetter(name)}(action) {\n`;
        content += `    try {\n`;
        content += `        const response = yield call(\n`;
        content += `            api.get${capitalizeFirstLetter(name)},\n`;
        content += `            action.payload,\n`;
        content += `        );\n`;
        content += `        yield put(\n`;
        content += `            ${name}ActionSuccess({\n`;
        content += `                response,\n`;
        content += `            })\n`;
        content += `        );\n`;
        content += `    } catch (error) {\n`;
        content += `        yield put(${name}ActionFailed(error.response));\n`;
        content += `    }\n`;
        content += `}\n`;

        fs.appendFileSync(dir, content);

        const rootSagaSrc = './src/rootSaga.js';
        let rootSagaContent = fs.readFileSync(rootSagaSrc, {encoding:'utf8', flag:'r'});
        rootSagaContent = rootSagaContent.replace(`import { all } from "redux-saga/effects";`,
            `import { all } from "redux-saga/effects";\nimport ${capitalizeFirstLetter(name)}Saga from "./pages/${name}/saga";`);
        fs.writeFileSync(rootSagaSrc, rootSagaContent.replace(`yield all([`, `yield all([\n\t\t${capitalizeFirstLetter(name)}Saga(),`));
    };

}
export default Saga;
