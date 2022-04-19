const User = require("../model/useModel");
require("dotenv").config();
const jwt = require("jsonwebtoken")

const generateToken = (user)=>{
return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const Register = async(req,res)=>{
try{
let user = await User.findOne({email:req.body.email}).lean().exec();
if(user){
   return res.status(400).send({message:"user already exist"})
}
user = await User.create(req.body);
const token = generateToken(user);
return res.status(201).send({user,token})
    }

catch(err){
return res.status(400).send({Err:err.message})
    }

} 

const Login = async(req,res)=>{
try{
    let user = await User.findOne({email:req.body.email});
    if(!user){
       return res.status(400).send({message:"Incorrect credential"})
    }
    const match = user.checkPassword(req.body.password);

    if(!match){
        return res.status(400).send({message:"Incorrect credential"});
    }

    const token = generateToken(user);
    return res.status(200).send({user,token});

}
catch(err){

}
}

module.exports = {Register,Login}
