const result=require("../model/resmodel")

let add= async (req,res)=>{
    try{
      let data = new result(req.body)
      await data.save()
      res.json({"msg":"data saved"})
    }
    catch(err){
      res.json({"msg":"error in data saving"})
    }
}

let getdata = async (req,res)=>{
    try{
       let data = await result.find({})
       res.json(data)
    }
    catch(err){
          res.send(err)
    }
}

let getbyid = async (req,res)=>{
    try{
        let data = await result.findById({"_id":req.params.hno})
        res.json(data)
    }
    catch(err){
       res.send("Error")
    }
}

let delbyid= async (req,res)=>{
  try{
    let data = await result.findByIdAndDelete({"_id":req.params.hno})
    res.json(data)
  }
  catch(err){
    res.send("")
  }
}
module.exports = {add,getbyid,getdata,delbyid}