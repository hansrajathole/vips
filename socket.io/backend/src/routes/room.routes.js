const express = require("express")
const roomModel = require("../models/room.model")
const router = express.Router()

router.post("/create", async (req, res)=>{
    const {roomName} = req.body


    await roomModel.create({
        name : roomName
    })

    res.status(201).json({message : "room created" })
})


router.get("/allroom",async (req,res)=>{
    const rooms = await roomModel.find()

    res.status(200).json({message : "room founds" , rooms})
})


module.exports = router