require('dotenv').config()
require('./DB/connection')


const express=require('express')
const cors=require('cors')
const basicserver=express()
basicserver.use(express.json())
basicserver.use(cors())
const router=require('./routes/router')
basicserver.use(router)
const port=5000
basicserver.listen(port,()=>{
    console.log(`server isrunniing in port ${port}`)
})
