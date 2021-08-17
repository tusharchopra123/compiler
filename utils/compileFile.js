const {exec} = require('child_process');
const path = require('path');
const fs = require('fs');
const outputPath = path.join(__dirname,"../outputs");

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive:true});
}
const compileFileCpp = (filepath)=>{
    const codeId = path.basename(filepath).split('.')[0];
    const outPath = path.join(outputPath, `${codeId}.out`)
    return new Promise((resolve,reject)=>{
        exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${codeId}.out < ${codeId}.txt`, (error,stdout,stderr)=>{
            console.log(error)
            console.log(stdout)
            error && reject({error,stderr});
            stderr && reject({stderr});
            resolve(stdout);
        })
    })
}

const compileFilePython = (filepath)=>{
    const codeId = path.basename(filepath).split('.')[0];
    const outPath = path.join(outputPath, `${codeId}.txt`)
    return new Promise((resolve,reject)=>{
        exec(`python ${filepath} < ${outPath}`, (error,stdout,stderr)=>{
            console.log(error)
            console.log(stdout)
            error && reject({error,stderr});
            stderr && reject({stderr});
            resolve(stdout);
        })
    })
}
module.exports = {
    compileFileCpp,compileFilePython
}