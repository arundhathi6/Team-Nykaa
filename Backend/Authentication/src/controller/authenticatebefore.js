 const jwt = require("jsonwebtoken");
 require("dotenv").config();
 const validateToken=(token)=>{
     return new Promise((resolve,reject)=>{
      jwt.verify(token, process.env.JWT_SECRET_KEY,(err,decoded)=>{
             if(err){
                 return reject(err)
             }
             if(decoded){
                 return resolve(decoded);
             }
         })
     })
 }
 
 const authenticate = async(req,res,next)=>{
     if(!req.headers.authorization){
        return res.status(400).send({message:"Authorization failed, token not found 1"});
     }
     if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message:"Authorization failed, token not found 2"});
     }
     const token = req.headers.authorization.trim().split(" ")[1];
let decoded;
     try{
decoded = await validateToken(token);
     }
     catch(err){
        return res.status(400).send({message:"Authorization failed, token not found 3"});
     }
     console.log(decoded);
     req.user = decoded.user;
return next()
 }

 module.exports = authenticate;