const express = require ("express")
const app = express()


app.get("/test",(req,res)=>{
    res.json({"message":"server testing"})
})

const PORT= 3002
app.listen(PORT,()=>console.log("server is running"))