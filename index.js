const express = require("express");
const router = require("./src/routes/route");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(express.static(__dirname+"/"))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.listen("5000")

app.get("/",(req,res)=>{
    res.send({  
        code:201,
        error:false,
        message:"Open source GeoLocation API.",
        data:{}
    })
})
app.use(router)