const mongoose =require('mongoose');
const multer=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/uploads/products/avatar');




const productSchema=new mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },

})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {

        

      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

  productSchema.statics.uploadedAvatar=multer({storage: storage}).single('avatar');
  productSchema.statics.avatarPath=AVATAR_PATH;

const Product=new mongoose.model('Product',productSchema);
module.exports=Product;