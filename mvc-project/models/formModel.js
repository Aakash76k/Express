const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data.json");

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath,"[]");
}

const saveForm = (formData)=>{
    const data = fs.readFileSync(filePath,"utf-8");
    const forms = JSON.parse(data);

    forms.push(formData);

    fs.writeFileSync(filePath,JSON.stringify(forms,null,2));

    return formData;
}

module.exports = {saveForm};

