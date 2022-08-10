import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import capitalizeFirstLetter from "../../utils/utils.js";

const __filename = path.basename(fileURLToPath(import.meta.url));

class API {

    static make = (name) => {
        const dir = `./src/${name}/${__filename}`;
        const upperName = name.toUpperCase();
        let content = `import axios from "axios";\n`;
        content += `\n`;
        content += `const api = {\n`;
        content += `    get${capitalizeFirstLetter(name)}: async (\${${name}}) => {\n`;
        content += `        const {data} = await axios.get('url');\n`;
        content += `        return data;\n`;
        content += `    },\n`;
        content += `};\n`;
        content += `\n`;
        content += `export default api;\n`;

        fs.appendFileSync(dir, content);
    };

}
export default API;
