import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import capitalizeFirstLetter from "../../utils/utils.js";

const __filename = path.basename(fileURLToPath(import.meta.url));

class API {

    static make = (name) => {
        const dir = `./src/pages/${name}/${__filename}`;
        let content = `import axios from "axios";\n`;
        content += `\n`;
        content += `const api = {\n`;
        content += `\tget${capitalizeFirstLetter(name)}: async ({INPUTS}) => {\n`;
        content += `\t\tconst url = "https://jsonplaceholder.typicode.com/users"\n`;
        content += `\t\tconst {data} = await axios.get(url);\n`;
        content += `\t\treturn data;\n`;
        content += `\t},\n`;
        content += `};\n`;
        content += `\n`;
        content += `export default api;\n`;

        fs.appendFileSync(dir, content);
    };

}
export default API;
