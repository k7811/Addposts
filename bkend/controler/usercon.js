let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
const usermod = require("../model/usermodel")
let add=async(req,res)=>{
    try{
        let result=await usermod.findById({"_id":req.body._id})
        if(result)
        {
            res.json({"msg":"with given email account exists"})
        }
        else{
        let hash=await bcrypt.hash(req.body.pwd,8)
        let data=new usermod({...req.body,"pwd":hash})
        await data.save()
        res.json({"msg":"reg done"})
        }

    }
    catch(err)
    {

    }

}
let login=async(req,res)=>{
    try{
    let data=await usermod.findById({"_id":req.body._id})
    if(data)
    {
        let f=await bcrypt.compare(req.body.pwd,data.pwd)
        if(f)
        {
            res.json({"token":jwt.sign({"_id":req.body._id},"fsd4"),"name":data.name,"_id":data._id})
        }
        else{
            res.json({"msg":"check pwd"})
        }

    }
    else{
        res.json({"msg":"check email"})
    }
}

catch(err)
{

}
}
module.exports={add,login}
