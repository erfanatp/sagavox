import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = path.basename(fileURLToPath(import.meta.url));

class Action {

    static make = (name) => {
        const dir = `./src/pages/${name}/${__filename}`;
        const upperName = name.toUpperCase();
        let content = `import {${upperName}, ${upperName}_FAILED, ${upperName}_SUCCESS} from "./constants";\n`;
        content += `\n`;
        content += `export function ${name}Action(payload) {\n`;
        content += `    return {\n`;
        content += `        type: ${upperName},\n`;
        content += `        payload,\n`;
        content += `    };\n`;
        content += `}\n`;
        content += `\n`;
        content += `export function ${name}ActionSuccess(payload) {\n`;
        content += `    return {\n`;
        content += `        type: ${upperName}_SUCCESS,\n`;
        content += `        payload,\n`;
        content += `    };\n`;
        content += `}\n`;
        content += `\n`;
        content += `export function ${name}ActionFailed(payload) {\n`;
        content += `    return {\n`;
        content += `        type: ${upperName}_FAILED,\n`;
        content += `        payload,\n`;
        content += `    };\n`;
        content += `}\n`;

        fs.appendFileSync(dir, content);
    };

}

export default Action;
