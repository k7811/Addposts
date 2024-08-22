let pm = require("../model/postmodel")
let {v4:uuid}=require("uuid")

let addpost=async(req,res)=>{
    try{
    let data=new pm({...req.body,"_id":uuid()})
    await data.save()
    res.json({"msg":"post added"})
    }
    catch(err)
    {
          console.log(err)
    }

}
let getpost=async(req,res)=>{
    try{
        let data=await pm.find({})
        res.json(data)

    }
    catch(err)
    {

    }


}
let getcatpost=async(req,res)=>{
    try{
        let data=await pm.find({[req.params.cat]:req.params.value})
        res.json(data)
    }
    catch(err)
    {

    }

}
let updpost=async(req,res)=>{
    try{
        await pm.findByIdAndUpdate({"_id":req.body._id},{"title":req.body.title,"body":req.body.body,"cat":req.body.cat})
        res.json({"msg":"upd done"})

    }
    catch(err)
    {

    }
}
let del=async(req,res)=>{
    try{
    await pm.findByIdAndDelete({"_id":req.params.id})
    res.json({"msg":"del done"})
    }
    catch(err)
    {

    }

}
module.exports={addpost,getpost,getcatpost,updpost,del}
