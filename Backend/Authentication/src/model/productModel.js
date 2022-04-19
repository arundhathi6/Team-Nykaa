const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");

const productSchema = new mongoose.Schema({
    btitle :{type:String,required:true},
    bprice:{type:Number,required:true},
    bimage:{type:String,required:true},
    bauthor:{type:String,required:true},
    userID:{type:mongoose.Schema.Types.ObjectId,
    ref:"user",
required:true}
},{
    versionKey:false,
    timestamps:true
})

const Product = mongoose.model("product",productSchema);
module.exports = Product;
