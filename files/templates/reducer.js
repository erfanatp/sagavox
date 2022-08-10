import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import capitalizeFirstLetter from "../../utils/utils.js";

const __filename = path.basename(fileURLToPath(import.meta.url));

class Reducer {

    static make = (name) => {
        const dir = `./src/${name}/${__filename}`;
        const upperName = name.toUpperCase();
        let content = `import {${upperName}, ${upperName}_SUCCESS, ${upperName}_FAILED} from "./constants";\n`;
        content += `\n`;
        content += `export const initialState = {};\n`;
        content += `\n`;
        content += `const ${capitalizeFirstLetter(name)}Reducer = (state = initialState, action) => {\n`;
        content += `    switch (action.type) {\n`;
        content += `        case ${upperName}:\n`;
        content += `            return {\n`;
        content += `                ...state,\n`;
        content += `            };\n`;
        content += `        case ${upperName}_SUCCESS:\n`;
        content += `            return {\n`;
        content += `                ...state,\n`;
        content += `            };\n`;
        content += `        case ${upperName}_FAILED:\n`;
        content += `            return {\n`;
        content += `                ...state,\n`;
        content += `            };\n`;
        content += `        default:\n`;
        content += `            return {\n`;
        content += `                ...state,\n`;
        content += `            };\n`;
        content += `    }\n`;
        content += `};\n`;
        content += `\n`;
        content += `export default ${capitalizeFirstLetter(name)}Reducer;\n`;

        fs.appendFileSync(dir, content);
    };

}
export default Reducer;
