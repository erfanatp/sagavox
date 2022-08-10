import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = path.basename(fileURLToPath(import.meta.url));

class Store {

    static make = () => {
        const dir = `./src/${__filename}`;
        let content = `import { configureStore } from "@reduxjs/toolkit";\n`;
        content += `import rootSaga from "./rootSaga";\n`;
        content += `import createSagaMiddleware from "redux-saga";\n`;
        content += `\n`;
        content += `const sagaMiddleware = createSagaMiddleware();\n`;
        content += `\n`;
        content += `export const store = configureStore({\n`;
        content += `    reducer: {\n`;
        content += `    },\n`;
        content += `    middleware: [sagaMiddleware]\n`;
        content += `});\n`;
        content += `\n`;
        content += `sagaMiddleware.run(rootSaga);\n`;

        fs.appendFileSync(dir, content);
    };

}
export default Store;
