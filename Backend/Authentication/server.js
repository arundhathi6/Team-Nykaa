const connect = require("./src/config/db");
const app = require("./index")

const port = process.env.PORT || 5678;
app.listen(port,async()=>{
    try{
        await connect();
        console.log("Listening to port number 5678..")
    }
    catch(err){
        console.log("Err",err)

    }
})