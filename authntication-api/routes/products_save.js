const router = require("express").Router();
const  Product = require("../models/product");

router.post("/", async (req,res)=>{


try{

  await Product.create(req.body,function(err,product){
    if(err){return res.status(400).send(err)}
    Product.uploadedAvatar(req,res,function(err){
      if(err){
        console.log(err); return res.status(400).send(err);
      }
      console.log(req.file);
      
    res.send(product);
    })
  });
  
}
catch(err)
{
  console.log(err);
  return res.status(400).send(err);
  
}



})

module.exports=router;