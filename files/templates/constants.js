import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = path.basename(fileURLToPath(import.meta.url));

class Constants {

    static make = (name) => {
        const dir = `./src/${name}/${__filename}`;
        const upperName = name.toUpperCase();
        let content = `export const ${upperName} = "app/${name}/${upperName}";\n`;
        content += `export const ${upperName}_SUCCESS = "app/${name}/${upperName}_SUCCESS";\n`;
        content += `export const ${upperName}_FAILED = "app/${name}/${upperName}_FAILED";\n`;

        fs.appendFileSync(dir, content);
    };

}
export default Constants;
