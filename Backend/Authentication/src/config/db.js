const mongoose = require("mongoose");
module.exports = (()=>{
    return mongoose.connect("mongodb+srv://arundhathi:arundhathi009@cluster0.mar6i.mongodb.net/myFirstjobassignment?retryWrites=true&w=majority")
})