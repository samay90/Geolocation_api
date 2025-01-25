const express = require("express")
const mainRouter = require("../controllers/main")
const router = express.Router()

router.use("/v1",mainRouter)
router.use("*",(req,res)=>{
    res.send({
        code:404,
        error:true,
        message:"No such endpoint found.",
        data:{}
    })
})

module.exports = router