const express = require("express");
const Master = require("../models/master.model");
const router = express.Router();

router.post("",async (req,res) =>{
    try {
        const post = await User.create(req.body);
        return res.send(post);
    } catch (error) {
        return res.send(error);
    }
});
router.get("",async (req,res) =>{
    try {
        const allusers = await User.find().lean().exec();
        return res.send(allusers);
    } catch (error) {
        return res.send(error);
    }
});
router.get("/:id",async (req,res) =>{
    try {
        const oneuser = await User.findByID(req,params.id).lean().exec();
        return res.send(oneuser);
    } catch (error) {
        return res.send(error);
    }
});
router.patch("/:id",async (req,res) =>{
    try {
        const chuser = await User.findByIDAndUpdate(req,params.id,req.body,{
            new: true,
        });
        return res.send(chuser);
    } catch (error) {
        return res.send(error);
    }
});
router.delete("/:id",async (req,res) =>{
    try {
        const deluser = await User.findByIDAndDelete(req,params.id);
        return res.send(deluser);
    } catch (error) {
        return res.send(error);
    }
});

module.exports = router;


