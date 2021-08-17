const compilerCode = require('../models/compilerCode');
const getstatus = async(req,res,next)=>{
    const jobId = req.query.id;
    console.log(req.query)
    console.log("status for ",jobId)
    //this is for checking if code is not given.
    if(jobId===undefined){
        return res.status(404).send({success: false,error:"missing query param"})
    }
    try{
    const job = await compilerCode.findById(jobId);

    if(job===undefined){
        return res.status(404).send({success: false,error:"invalid job id"})
    }
    return res.status(200).send({success: true,job})
    
    }catch(err){
        return res.status(404).send({success: false,error:JSON.stringify(err)})

    }
    
   
    //and after file creation run and send the response back

}
module.exports={
    getstatus
}