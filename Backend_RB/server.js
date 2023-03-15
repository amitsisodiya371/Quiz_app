const express = require("express");
const app = express();
const connect = require("./config/db")
const cors = require("cors")
const userController = require("./controllers/user.controller")
// const bikeController = require("./controllers/bike.controller")
const {Signup,login} = require("./controllers/auth.controller")
app.get("/",(req,res)=>{
    res.send("Hllo")
})
app.use(cors());
app.use(express.json());
app.post("/Signup",Signup)
app.post("/login",login);
app.use("/user",userController)
// app.use("/bike",bikeController)


app.listen(8000,(req,res)=>{
    connect()
    console.log("Server started on port 8000.")
})