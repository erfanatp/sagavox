import fs from "fs";
import capitalizeFirstLetter from "../../utils/utils.js";


class Page {

    static make = (name) => {
        const dir = `./src/pages/${name}/${capitalizeFirstLetter(name)}.js`;
        let content = `import React, { useEffect } from "react";\n`;
        content += `import { useDispatch, useSelector } from "react-redux";\n`;
        content += `import PropTypes from "prop-types";\n`;
        content += `import { ${name}Action } from "./action";\n`;
        content += `\n`;
        content += `${capitalizeFirstLetter(name)}.propTypes = {\n`;
        content += `\n`;
        content += `};\n`;
        content += `\n`;
        content += `function ${capitalizeFirstLetter(name)}(props) {\n`;
        content += `\tlet dispatch = useDispatch();\n`;
        content += `\tlet { users } = useSelector((state) => state.${capitalizeFirstLetter(name)}Reducer);\n`;
        content += `\tuseEffect(() => {\n`;
        content += `\t\tdispatch(${name}Action({}));\n`;
        content += `\t}, []);\n`;
        content += `\treturn (\n`;
        content += `\t\t<div>\n`;
        content += `\t\t\t<ul>\n`;
        content += `\t\t\t\t{users.map(user => { return <li key={user.id}>{user.name}</li>})}\n`;
        content += `\t\t\t</ul>\n`;
        content += `\t\t</div>\n`;
        content += `\t);\n`;
        content += `}\n`;
        content += `\n`;
        content += `export default ${capitalizeFirstLetter(name)};\n`;

        fs.appendFileSync(dir, content);
    };

}
export default Page;
