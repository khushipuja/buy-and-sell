const router=require("express").Router();

const { Product } = require("../models/product");

router.get("/",async (req,res)=>{
    

    try{
        await Product.find({},function(err,product){

        if(err)
        {
            res.status(400).send(err);
        }
        else{
            res.send(product);
            
            
        }
        

        })
    }
    catch(err){
        res.status(400).send(err);
    }
    
})

module.exports=router;