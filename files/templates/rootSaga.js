import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = path.basename(fileURLToPath(import.meta.url));

class RootSaga {

    static make = () => {
        const dir = `./src/${__filename}`;
        let content = `import { all } from "redux-saga/effects";\n`;
        content += `\n`;
        content += `export default function* rootSaga() {\n`;
        content += `    yield all([\n`;
        content += `    ]);\n`;
        content += `}\n`;

        fs.appendFileSync(dir, content);
    };

}
export default RootSaga;
