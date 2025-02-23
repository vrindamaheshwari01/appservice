const express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.json({"msg":"deploying the application"})
})


app.listen(8001,()=>{
    console.log("Listening to port 8001")
})
