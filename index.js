const express = require ("express")
const app = express()
const db = require("./model/connection")

app.use(express.json())


app.get("/test",(req,res)=>{
    res.json({"message":"server testing"})
})

app.post("/addUser",(req,res)=>{
    //console.log(req.body)
    const user = ({name:req.body.name,email:req.body.email,phone:req.body.mobile,city:req.body.city})
    const sql = "INSERT INTO `employee` SET ?"
    db.query(sql,user,(err,result)=>{
        if(err) throw err;
        else res.json(result)
        
    }
    )

})

// showUser
app.get("/showUser",(req,res)=>{
    const sql = "SELECT * FROM `employee`"
    db.query(sql,(err,result)=>{
        if (err) throw err;
        else
        res.json(result)
    })
})

app.get("/showUser/:email",(req,res)=>{
    const sql = `SELECT * FROM employee where email='${req.params.email}'`
    db.query(sql,(err,result)=>{
        if(err) throw err;
        else res.json(result)
    })
})
const PORT= 3002
app.listen(PORT,()=>console.log("server is running"))