const {createFile}=require('../utils/createFile');
const {compileFileCpp,compileFilePython}=require('../utils/compileFile')
const compilerCode = require('../models/compilerCode');
const compile = async(req,res,next)=>{
    const {language,code,input} = req.body;
    //this is for checking if code is not given.
    if(code==undefined){
        return res.status(400).send({success:false,error:"nothing in code body"});
    }
    var newJob;
    try{
    //once received the code and language we will generate the file accordingly
    const filepath = await createFile(language,code,input);
    newJob = await new compilerCode({language,filepath}).save()
    console.log(newJob);
    const jobId = newJob._id;

    res.status(201).send({success:true,jobId})
    newJob["startedAt"] = new Date();
    var output;
    if(language==="cpp"){
        output = await compileFileCpp(filepath);
    }else{
        output = await compileFilePython(filepath); 
    }
    newJob["completedAt"] = new Date();
    newJob["status"] = "success";
    newJob["output"] = output;
    await newJob.save();
    // return res.status(200).send({output})
    console.log(newJob)
    }catch(error){
        console.log(error)
        newJob["completedAt"] = new Date();
        newJob["status"] = "error";
        newJob["output"] = JSON.stringify(error);
        newJob.save();
        console.log(error);

        // return res.status(500).send({error})
    }
    //and after file creation run and send the response back

}
module.exports={
    compile
}