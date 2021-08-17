const path = require('path');
const fs = require('fs');
const {v4:uuid} = require('uuid');
const dirCodes = path.join(__dirname,"../codes");
const inputs = path.join(__dirname,"../outputs");
if(!fs.existsSync(dirCodes)){
    fs.mkdirSync(dirCodes,{recursive:true});
}
if(!fs.existsSync(inputs)){
    fs.mkdirSync(inputs,{recursive:true});
}

const createFile = async (format,code,input='')=>{
    const codeId = uuid();
    const filename = `${codeId}.${format}`
    const filepath = path.join(dirCodes,filename);
    const inputFileName = `${codeId}.txt`
    const inputFilePath = path.join(inputs,inputFileName);
    await fs.writeFileSync(inputFilePath,input)
    await fs.writeFileSync(filepath,code);
    return filepath;
}
module.exports={createFile}