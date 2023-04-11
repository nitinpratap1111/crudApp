const mysql = require ("mysql")
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ems"

})

db.connect((err)=>{
    if(err) console.log(err.sqlMessage)
    console.log("database connected")
})

module.exports=db