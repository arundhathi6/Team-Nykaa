const connect = require("./src/config/db");
const app = require("./index");


app.listen(process.env.PORT ||5556,async()=>{
    try{
        await connect();
        console.log("Listening to port number 5556");

    }
    catch(error){
        console.log("ERROR",error);
    }
})