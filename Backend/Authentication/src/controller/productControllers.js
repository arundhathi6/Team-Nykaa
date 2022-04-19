const express = require("express")
const app = express()
const router = express.Router();
const Product = require("../model/productModel");
const authenticate = require("./authenticatebefore");

router.post("",authenticate,async(req,res)=>{
    req.body.userID = req.user._id;
    console.log("userID",req.user._id)
    try{
        const product = await Product.create(req.body);
        res.status(201).send({product});

    }
    catch(err){
res.status(400).send({message:err.message});
    }
})

router.get("",async(req,res)=>{
    try{
        const product = await Product.find().lean().exec();
        res.status(201).send({product});

    }
    catch(err){
res.status(400).send({message:err.message});
    }
})


module.exports = router;