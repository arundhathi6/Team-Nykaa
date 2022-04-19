const express = require("express");
const app = express();
const cors = require("cors");
const {Register,Login}= require("./src/controller/authControllers")
const ProductController = require("./src/controller/productControllers")
app.use(express.json());
app.use(cors());
app.post("/register",Register);
app.post("/login",Login);
app.use("/products",ProductController);


module.exports=app;