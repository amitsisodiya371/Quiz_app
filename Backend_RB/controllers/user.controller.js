const express = require("express");
const router = express.Router()
const User = require("../model/user.model");


router.get("",async(req,res)=>{
    const data = await User.find({});
    return res.send(data)
})

router.post("",async(req,res)=>{
    const data = await User.create(req.body);
    return res.send(data)
})


router.get("/:id",async(req,res)=>{
    const data = await User.findById(req.params.id)
    res.send(data)
})

router.patch("/:id",async(req,res)=>{
    const data = await User.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})


router.delete("/:id",async(req,res)=>{
    const data = await User.findByIdAndDelete(req.params.id);
    res.send(data)
})


module.exports = router