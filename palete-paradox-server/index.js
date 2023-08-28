const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
// middleware
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("heyyyy")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})